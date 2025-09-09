---
title: "JS. Начало #11. SSE(Server-Sent Events)"
description: "Поток данных с сервера через SSE"
course: "first-sem"
date: "2025-05-11"
---

_Автор: Чердаков Анатолий Сергеевич_

# Введение

Спецификация Server-Sent Events описывает встроенный класс EventSource, который позволяет поддерживать соединение с сервером и получать от него события.

Как и в случае с WebSocket, соединение постоянно.

Но есть несколько важных различий:

| WebSocket | EventSource |
| :---- | :---- |
| Двунаправленность: и сервер, и клиент могут обмениваться сообщениями | Однонаправленность: данные посылает только сервер |
| Бинарные и текстовые данные | Только текст |
| Протокол WebSocket | Обычный HTTP |

EventSource не настолько мощный способ коммуникации с сервером, как WebSocket.

Зачем нам его использовать?

Основная причина: он проще. Многим приложениям не требуется вся мощь WebSocket.

Если нам нужно получать поток данных с сервера: неважно, сообщения в чате или же цены для магазина – с этим легко справится EventSource. К тому же, он поддерживает автоматическое переподключение при потере соединения, которое, используя WebSocket, нам бы пришлось реализовывать самим. Кроме того, используется старый добрый HTTP, а не новый протокол.

# Как работает SSE?

1. Клиент создает соединение через EventSource.

2. Сервер отвечает с заголовком Content-Type: text/event-stream и держит соединение открытым.

3. Данные отправляются в формате:

```text

data: Сообщение

```

или с дополнительными полями:

```text

event: customEvent

id: 42

data: {"time": "12:00"}

```

SSE — хорошая технология, которая должна вытеснить Long Poling она проста и не менее эффективна, чем WebSockets. Сейчас SSE поддерживают Opera 10.6+ (Opera 9 поддерживает старый стандарт SSE), Chrome, Safari 5+. Firefox поддерживает Multipart XMLHTTPRequest, для которого можно написать обертку и использовать как интерфейс SSE.

# Создание и использование SSE 

Как создать сервер с SSE (Content-Type: text/event-stream)

## Как создать сервер с SSE

Чтобы начать получать данные, нам нужно просто создать new EventSource(url).

Браузер установит соединение с url и будет поддерживать его открытым, ожидая события.

Сервер должен ответить со статусом 200 и заголовком Content-Type: text/event-stream, затем он должен поддерживать соединение открытым и отправлять сообщения в особом формате:

data: Сообщение 1

data: Сообщение 2

data: Сообщение 3

data: в две строки

* Текст сообщения указывается после data:, пробел после двоеточия необязателен.

* Сообщения разделяются двойным переносом строки \n\n.

* Чтобы разделить сообщение на несколько строк, мы можем отправить несколько data: подряд (третье сообщение).

На практике сложные сообщения обычно отправляются в формате JSON, в котором перевод строки кодируется как \n, так что в разделении сообщения на несколько строк обычно нет нужды.

Например:

data: {"user":"Джон","message":"Первая строка\n Вторая строка"}

…Так что можно считать, что в каждом data: содержится ровно одно сообщение.

Для каждого сообщения генерируется событие message:
```javascript

let eventSource = new EventSource("/events/subscribe");

eventSource.onmessage = function(event) {

  console.log("Новое сообщение", event.data);

  // этот код выведет в консоль 3 сообщения, из потока данных выше

};

// или eventSource.addEventListener('message', ...)
```

## Как клиент подписывается на события через EventSource

![](/web-course-site/sse/img1.png)


## Обработка ошибок

При возникновении ошибок (например, проблемы сети или доступа), генерируется сообщение об ошибке. Его можно обработать программно, установив метод onerror в объекте EventSource:

```javascript

evtSource.onerror = (err) => {

  console.error("В EventSource произошла ошибка:", err);

};

```

## Подписка на события message

Сообщения, отправленные с сервера и не имеющие поля event, принимаются как события message. Чтобы получать сообщения из событий, необходимо установить обработчик для события message:

```javascript

evtSource.onmessage = (event) => {
    
  const newElement = document.createElement("li");

  const eventList = document.getElementById("list");

  newElement.textContent = `Сообщение: ${event.data}`;

  eventList.appendChild(newElement);

};

```

Этот код обрабатывает входящие события и добавляет текст сообщения в список в HTML-документе.

# Пример реализации SSE

Код сервера

```javascript

const http = require('http')  
const axios = require('axios')  
const PORT = process.env.PORT || 3000

const getUserData = async () => {  
    const response = await axios.get('https://randomuser.me/api')  
    return response.data.results[0]  
}

let i = 1

const sendUserData = (req, res) => {  
    res.writeHead(200, {  
    Connection: 'keep-alive',  
    'Content-Type': 'text/event-stream',  
    'Cache-Control': 'no-cache'  
    })

    const timer = setInterval(async () => {  
    if (i > 10) {  
        clearInterval(timer)  
        console.log('10 users has been sent.')  
        res.write('id: -1\ndata:\n\n')  
        res.end()  
        return  
    }

    const data = await getUserData()

    res.write(`event: randomUser\nid: ${i}\nretry: 5000\ndata: ${JSON.stringify(data)}\n\n`)

    console.log('User data has been sent.')

    i++  
    }, 2000)

    req.on('close', () => {  
    clearInterval(timer)  
    res.end()  
    console.log('Client closed the connection.')  
    })  
}

http.createServer((req, res) => {  
    res.setHeader('Access-Control-Allow-Origin', '*')

    if (req.url === '/getUsers') {  
    sendUserData(req, res)  
    } else {  
    res.writeHead(404)  
    res.end()  
    }

}).listen(PORT, () => console.log('Server ready.'))

```

Клиента

```javascript

const sanitizeHTML = str => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
};

const getTemplate = user => `  
<div class="card">  
    <div class="row">  
        <div class="col-md-4">  
            <img src="${sanitizeHTML(user.img)}" class="card-img" alt="user-photo">  
        </div>  
        <div class="col-md-8">  
            <div class="card-body">  
                <h5 class="card-title">${user.id !== null ? `Id: ${sanitizeHTML(user.id)}` : `User hasn't id`}</h5>  
                ${['name', 'username', 'email', 'age']
                    .map(field => `<p class="card-text">${field}: ${sanitizeHTML(user[field])}</p>`)
                    .join('')}
            </div>  
        </div>  
    </div>  
</div>  
`;

class App {  
    constructor(selector) {  
        this.$ = document.querySelector(selector);  
        this.eventSource = null;
        this.connectionTimeout = null;
        this.#init();  
        this.addConnectionStatus();
    }

    #init() {  
        this.startBtn = this.$.querySelector('[data-type="start-btn"]');  
        this.stopBtn = this.$.querySelector('[data-type="stop-btn"]');  
        this.eventLog = this.$.querySelector('[data-type="event-log"]');  
        this.clickHandler = this.clickHandler.bind(this);  
        this.$.addEventListener('click', this.clickHandler);  
    }

    addConnectionStatus() {
        const status = document.createElement('div');
        status.dataset.type = "connection-status";
        this.$.prepend(status);
        
        setInterval(() => {
            status.textContent = this.eventSource 
                ? `Status: ${this.getConnectionState()}`
                : 'Status: disconnected';
        }, 1000);
    }

    getConnectionState() {
        if (!this.eventSource) return 'disconnected';
        return {
            0: 'connecting',
            1: 'open',
            2: 'closed'
        }[this.eventSource.readyState] || 'unknown';
    }

    clickHandler(e) {  
        if (e.target.tagName === 'BUTTON') {  
            const { type } = e.target.dataset;
            type === 'start-btn' ? this.startEvents() : this.stopEvents();  
            this.changeDisabled();  
        }  
    }

    changeDisabled() {  
        [this.stopBtn, this.startBtn].forEach(btn => btn.disabled = !btn.disabled);  
    }

    startEvents() {  
        if (this.eventSource) {
            this.eventLog.textContent = 'Connection already exists';
            return;
        }

        try {
            this.eventSource = new EventSource('http://localhost:3000/getUsers');
        } catch (error) {
            this.handleConnectionError(error);
            return;
        }

        this.eventLog.textContent = 'Connecting to server...';
        
        this.connectionTimeout = setTimeout(() => {
            this.eventLog.textContent = 'Connection timeout';
            this.cleanup();
        }, 30_000);

        this.eventSource.addEventListener('message', e => {  
            if (e.lastEventId === '-1') {  
                this.eventLog.textContent = 'Server closed connection';
                this.cleanup();  
            }  
        }, { once: true });

        this.eventSource.addEventListener('randomUser', e => this.handleUserEvent(e));
        this.eventSource.addEventListener('error', e => this.handleServerError(e));
    }

    async handleUserEvent(e) {  
        try {
            const userData = JSON.parse(e.data);
            
            if (!this.validateUserData(userData)) {
                throw new Error('Invalid user data structure');
            }

            const user = this.transformUserData(userData);
            const template = getTemplate(user);
            this.$.insertAdjacentHTML('beforeend', template);

        } catch (error) {
            console.error('Data processing error:', error);
            this.eventLog.textContent = `Data error: ${error.message}`;
            this.cleanup();
        }
    }

    validateUserData(userData) {
        const requiredFields = ['id', 'name', 'login', 'email', 'dob', 'picture'];
        return requiredFields.every(field => userData[field]);
    }

    transformUserData(userData) {
        return {
            id: userData.id.value,
            name: `${userData.name.first} ${userData.name.last}`,
            username: userData.login.username,
            email: userData.email,
            age: userData.dob.age,
            img: userData.picture.large
        };
    }

    handleServerError(e) {  
        if (this.eventSource.readyState === EventSource.CLOSED) {
            this.eventLog.textContent = 'Connection closed by server';
        } else {
            this.handleConnectionError(new Error('Connection failed'));
        }
        this.cleanup();
    }

    handleConnectionError(error) {  
        this.eventLog.textContent = `Connection error: ${error.message}`;
        console.error('SSE Error:', error);
        if (confirm('Retry connection?')) {
            setTimeout(() => this.startEvents(), 2000);
        }
        this.cleanup();
    }

    cleanup() {  
        clearTimeout(this.connectionTimeout);
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
        }
        this.changeDisabled();
    }

    stopEvents() {  
        if (!this.eventSource) {
            this.eventLog.textContent = 'No active connection';
            return;
        }
        this.cleanup();
        this.eventLog.textContent = 'Connection closed by client';  
    }  
}

const app = new App('main');

```

# Особенности SSE

## Переподключение

После создания new EventSource подключается к серверу и, если соединение обрывается, – переподключается.

Это очень удобно, так как нам не приходится беспокоиться об этом.

По умолчанию между попытками возобновить соединение будет небольшая пауза в несколько секунд.

Сервер может выставить рекомендуемую задержку, указав в ответе retry: (в миллисекундах):

retry: 15000

data: Привет, я выставил задержку переподключения в 15 секунд

Поле retry: может посылаться как вместе с данными, так и отдельным сообщением.

Браузеру следует ждать именно столько миллисекунд перед новой попыткой подключения. Или дольше, например, если браузер знает (от операционной системы) что соединения с сетью нет, то он может осуществить переподключение только когда оно появится.

* Если сервер хочет остановить попытки переподключения, он должен ответить со статусом 204.

* Если браузер хочет прекратить соединение, он может вызвать eventSource.close():

```javascript
let eventSource = new EventSource(...);

eventSource.close();
```

Также переподключение не произойдёт, если в ответе указан неверный Content-Type или его статус отличается от 301, 307, 200 и 204. Браузер создаст событие "error" и не будет восстанавливать соединение.

## Недостатки использования SSE:

* Ограничения формата данных. 1SSE ограничены передачей сообщений в формате UTF-8, бинарные данные не поддерживаются. 

* Ограничение параллельных соединений. В браузере одновременно можно открыть только шесть параллельных открытых SSE-соединений. Это становится проблематичным, когда требуется открыть несколько вкладок с активными SSE-соединениями. 

* Односторонняя связь. SSE поддерживают только передачу сообщений от сервера к клиенту, что может быть ограничением для более интерактивных приложений в реальном времени. 

# Когда использовать Server-Sent Events (SSE)

SSE идеально подходит для сценариев, где требуется односторонняя передача данных от сервера к клиенту в реальном времени. Вот типичные случаи:

## Обновления данных в реальном времени

* Примеры:

  * Новостные ленты (Twitter, Facebook).

  * Уведомления (например, оповещения о новых сообщениях).

  * Биржевые котировки или финансовые тикеры.

  * Онлайн-трансляции (спортивные события, голосования).

* Почему SSE?  
  Клиенту не нужно отправлять запросы — сервер сам "толкает" данные при их появлении.

## Мониторинг состояния процессов

* Примеры:

  * Отслеживание прогресса загрузки файла.

  * Статус выполнения задач (например, обработка видео).

  * Логи сервера в реальном времени.

  * Мониторинг IoT-устройств (температура, давление).

Почему SSE?  
Позволяет непрерывно обновлять интерфейс без перезагрузки страницы.

## Чем SSE удобнее WebSockets в некоторых случаях

SSE работает поверх стандартного HTTP, не требуя нового протокола.

WebSockets требует установки отдельного соединения (протокол ws:// или wss://) и обработки рукопожатий.

Автоматическое восстановление соединения

SSE использует стандартные HTTP-порты (80/443), что упрощает работу с:

* Прокси-серверами.

  * Брандмауэрами.

  * CORS (достаточно добавить заголовок Access-Control-Allow-Origin).

WebSockets могут блокироваться в корпоративных сетях из-за нестандартных портов.

SSE позволяет отправлять:

* Именованные события (event: alert).

  * ID сообщений (id: 100).

  * Время переподключения (retry: 5000).

В WebSockets такие функции нужно реализовывать самостоятельно.

