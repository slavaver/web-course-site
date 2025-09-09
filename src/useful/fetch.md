---
title: "JS. Начало #8. Fetch"
description: "Асинхронные запросы с Fetch API"
course: "second-sem"
date: "2025-04-29"
---

_Автор: Рябкова Анна, Коптикова Лилия, Манюшкина Дарья_

Fetch API — это интерфейс JavaScript для работы с HTTP-запросами и ответами. Он предоставляет глобальную функцию fetch(), которая позволяет асинхронно получать ресурсы по сети легко и логично.

Ранее для подобных задач использовался XMLHttpRequest, однако fetch() представляет собой более современную, гибкую и мощную альтернативу. Благодаря использованию Promise, этот API проще и удобнее в использовании, особенно при работе с асинхронным кодом и взаимодействии с API.

Основные преимущества Fetch API:

* Простота использования;
* Поддержка промисов;
* Читаемый и понятный синтаксис;
* Возможность работы с различными типами данных (JSON, текст, Blob и т.д.);
* Поддержка современных стандартов и технологий.

# Основы использования fetch

## Синтаксис fetch(url)

```js
fetch(url, [options])
```

Функция fetch() принимает два параметра:

* url — адрес, по которому нужно сделать запрос;
* options (необязательный) —  объект с дополнительными настройками запроса

По умолчанию вызов fetch() делает GET-запрос по указанному адресу.

Функция fetch() возвращает объект Promise, который получает ответ после завершения запроса к сетевому ресурсу.

## Как получить ответ от сервера

Браузер сразу же начинает запрос и возвращает промис, который внешний код использует для получения результата. Процесс получения ответа обычно происходит в два этапа.

Promise выполняется с объектом встроенного класса Response в качестве результата, как только сервер пришлёт заголовки ответа. На этом этапе можно проверить статус HTTP-запроса и определить, выполнился ли он успешно, а также посмотреть заголовки, но пока без тела ответа.

Если запрос не удался (например, при ошибке сети или отсутствующем домене), промис перейдёт в состояние rejected. HTTP-статусы 404 и 500 не считаются ошибкой на уровне fetch.

Примеры свойств объекта Response:

* status — HTTP-код ответа, например 200;
* ok — булево значение, true, если статус от 200 до 299.

## Работа с response.json() и response.text()

Для получения тела ответа нужно использовать дополнительный вызов метода. Response предоставляет несколько методов, основанных на промисах, для доступа к телу ответа в различных форматах:

* response.text() – читает ответ и возвращает как обычный текст,
* response.json() – декодирует ответ в формате JSON,
* response.formData() – возвращает ответ как объект FormData,
* response.blob() – возвращает объект как Blob (бинарные данные с типом),
* response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),

помимо этого, response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям.

Можно выбрать только один метод чтения ответа. Если ответ уже был получен с response.text(), тогда response.json() не сработает, так как данные уже были обработаны.

```js
let text = await response.text(); // тело ответа обработано 
let parsed = await response.json(); // ошибка (данные уже были обработаны)
```

**Пример базового запроса**

```js
fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Ошибка:', error));
```

Этот пример демонстрирует, как легко можно выполнить HTTP-запрос и обработать ответ.

# Обработка ошибок в fetch

Любой ответ на запрос через fetch(), например, HTTP-код 400, 404 или 500, переводит Promise в состояние fulfilled. Promise перейдёт в состояние rejected только если:

* случился сбой сети,
* домен не существует,
* запрос был заблокирован.

## Использование catch для перехвата ошибок

Fetch API возвращает промис, следовательно, можно использовать then, catch и finally. Оборачивание запроса в try/catch — очень распространённый способ обработки ошибок, но не все ошибки можно перехватить.

```js
try { 
  // сервер вернёт ошибку CORS 
  const response = await fetch('https://google.com/api') 
} catch { 
  console.error('Failed') 
} 
// Вывод в консоли: Failed
```

Этот код попытается выполнить выборку и обнаружить ошибки только в том случае, если Promise в состоянии rejected

## Проверка response.ok перед обработкой данных

Другой способ обработки ошибок — проверка статуса ответа при успешном выполнении промиса.

Чтобы обработать ошибку запроса, необходимо обращать внимание на поле ok в объекте ответа Response. В случае ошибки запроса оно будет равно false.

```js
const response = await fetch('https://restcountries.com/v4.1/all') 
if (response.ok) {
   // Обработка ответа 
 } else { 
   console.error('Failed') 
 }
```

## Комбинированная обработка: response.ok + catch

try/catch и response.ok используются для обнаружения различных типов ошибок, поэтому объединение двух подходов используется для лучшей обработки ошибок:

```js
fetch('https://jsonplaceholder.typicode.com/there-is-no-such-route')
  .then((response) => {
    // Проверяем успешность запроса и выкидываем ошибку
    if (!response.ok) {
      throw new Error('Error occurred!')
    }
    
    return response.json()
   })
   // Теперь попадём сюда, так как выбросили ошибку
   .catch((err) => {
     console.log(err)
    }
)
// Error: Error occurred!
```

try/catch используется для получения ошибок, когда промис отклонён (проблемы с сетью или CORS).

response.ok используется для обработки ошибок сервера (например, 404 или 500), когда промис разрешён.

# Настройки запроса

## Метод GET по умолчанию

По умолчанию вызов fetch() делает GET-запрос по указанному адресу. Базовый вызов для получения данных можно записать таким образом:

```js
fetch('http://jsonplaceholder.typicode.com/posts')
```

Для того чтобы добавить параметры запроса в GET-запрос с помощью JavaScript, используйте объект `URLSearchParams`:

```js
const params = new URLSearchParams({ search: 'term', limit: '5' }).toString();
fetch(`https://api.example.com/items?${params}`)
  .then(res => res.json())
  .then(data => console.log(data));
```

Этот код позволяет быстро сформировать строку запроса с нужными параметрами и осуществить запрос.

## Отправка данных с POST и пример отправки JSON-данных

Для отправки POST-запроса или запроса с другим методом, нам необходимо использовать fetch параметры:

* method – HTTP метод, например POST,
* body – тело запроса, одно из списка:
* строка (например, в формате JSON),
* объект FormData для отправки данных как form/multipart,
* Blob/BufferSource для отправки бинарных данных,
* URLSearchParams для отправки данных в кодировке x-www-form-urlencoded, используется редко.

Чаще всего используется JSON.

Например, этот код отправляет объект user как JSON:

```js
let user = {

  name: 'John',

  surname: 'Smith'

};

let response = await fetch('/article/fetch/post/user', {

  method: 'POST',

  headers: {

    'Content-Type': 'application/json;charset=utf-8'

  },

  body: JSON.stringify(user)

});

let result = await response.json();

alert(result.message);
```

Заметим, что так как тело запроса body – строка, то заголовок Content-Type по умолчанию будет text/plain;charset=UTF-8.

Но, так как мы посылаем JSON, то используем параметр headers для отправки вместо этого application/json, правильный Content-Type для JSON.

## Настройки заголовков через headers

Заголовки ответа

Заголовки ответа хранятся в похожем на Map объекте response.headers.

Это не совсем Map, но мы можем использовать такие же методы, как с Map, чтобы получить заголовок по его имени или перебрать заголовки в цикле:

```js
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// получить один заголовок

alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// перебрать все заголовки

for (let [key, value] of response.headers) {

  alert(`${key} = ${value}`);

}
```

Заголовки запроса

Для установки заголовка запроса в fetch мы можем использовать опцию headers. Она содержит объект с исходящими заголовками, например:

```js
let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});
```

Есть список запрещённых HTTP-заголовков, которые мы не можем установить:

* Accept-Charset, Accept-Encoding
* Access-Control-Request-Headers
* Access-Control-Request-Method
* Connection
* Content-Length
* Cookie, Cookie2
* Date
* DNT
* Expect
* Host
* Keep-Alive
* Origin
* Referer
* TE
* Trailer
* Transfer-Encoding
* Upgrade
* Via
* Proxy-*
* Sec-*

Эти заголовки обеспечивают достоверность данных и корректную работу протокола HTTP, поэтому они контролируются исключительно браузером.

# Асинхронный fetch с async/await

## async/await

Существует специальный синтаксис для работы с промисами, который называется «async/await».

Начнём с ключевого слова async. Оно ставится перед функцией, вот так:

```js
async function f() {
  return 1;
}
```

У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.

Например, эта функция возвратит выполненный промис с результатом 1:

```js
async function f() {
  return 1;
}
f().then(alert); // 1
```

Можно и явно вернуть промис, результат будет одинаковым:

```js
async function f() {
  return Promise.resolve(1);
}
f().then(alert); // 1
```

Так что ключевое слово async перед функцией гарантирует, что эта функция в любом случае вернёт промис. Согласитесь, достаточно просто? Но это ещё не всё. Есть другое ключевое слово – await, которое можно использовать только внутри async-функций.

Await

Синтаксис:

```js
// работает только внутри async–функций
let value = await promise;
```

Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.

В этом примере промис успешно выполнится через 1 секунду:

```js
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });
  let result = await promise; // будет ждать, пока промис не выполнится (*)
  alert(result); // "готово!"
}
f();
```

В данном примере выполнение функции остановится на строке (*) до тех пор, пока промис не выполнится. Это произойдёт через секунду после запуска функции. После чего в переменную result будет записан результат выполнения промиса, и браузер отобразит alert-окно «готово!».

Обратите внимание, хотя await и заставляет JavaScript дожидаться выполнения промиса, это не отнимает ресурсов процессора. Пока промис не выполнится, JS-движок может заниматься другими задачами: выполнять прочие скрипты, обрабатывать события и т.п.

Пример функции showAvatar() с async/await:

```js
async function showAvatar() {

  // запрашиваем JSON с данными пользователя

  let response = await fetch('/article/promise-chaining/user.json');

  let user = await response.json();

  // запрашиваем информацию об этом пользователе из github

  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);

  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя

  let img = document.createElement('img');

  img.src = githubUser.avatar_url;

  img.className = "promise-avatar-example";

  document.body.append(img);

  // ждём 3 секунды и затем скрываем аватар

  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
```

## Обработка ошибок с try/catch

Когда промис завершается успешно, await promise возвращает результат. Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение throw.

Такой код:

```js
 async function f() {
  await Promise.reject(new Error("Упс!"));
}
```

Делает то же самое, что и такой:

```js
async function f() {
  throw new Error("Упс!");
}
```

Но есть отличие: на практике промис может завершиться с ошибкой не сразу, а через некоторое время. В этом случае будет задержка, а затем await выбросит исключение.

Такие ошибки можно ловить, используя try..catch, как с обычным throw:

```js
async function f() {
  try {
    let response = await fetch('http://no-such-url')
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}
f();
```

В случае ошибки выполнение try прерывается и управление прыгает в начало блока catch. Блоком try можно обернуть несколько строк:

```js
async function f() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // перехватит любую ошибку в блоке try: и в fetch, и в response.json
    alert(err);
  }
}
f();
```

Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected). В этом случае мы можем использовать метод .catch промиса, чтобы обработать ошибку:

```js
async function f() {
  let response = await fetch('http://no-such-url');
}
// f() вернёт промис в состоянии rejected
f().catch(alert); // TypeError: failed to fetch // (*)
```

Если забыть добавить .catch, то будет сгенерирована ошибка «Uncaught promise error» и информация об этом будет выведена в консоль. Такие ошибки можно поймать глобальным обработчиком.

## Когда использовать await fetch()

Ключевое слово async перед объявлением функции:

1. Обязывает её всегда возвращать промис.
2. Позволяет использовать await в теле этой функции.

Ключевое слово await перед промисом заставит JavaScript дождаться его выполнения, после чего:

1. Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw.
2. Иначе вернётся результат промиса.

Вместе они предоставляют отличный каркас для написания асинхронного кода. Такой код легко и писать, и читать.

Хотя при работе с async/await можно обходиться без promise.then/catch, иногда всё-таки приходится использовать эти методы (на верхнем уровне вложенности, например). Также await отлично работает в сочетании с Promise.all, если необходимо выполнить несколько задач параллельно.

# Работа с несколькими запросами

## Как запрашивать данные параллельно с Promise.all

Метод all() — это один из статических методов объекта Promise. Метод all() используют, когда нужно запустить несколько промисов параллельно и дождаться их выполнения.

Promise.all() принимает итерируемую коллекцию промисов (чаще всего — массив) и возвращает новый промис, который будет выполнен, когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонён, если хотя бы один из переданных промисов завершится с ошибкой.

Метод Promise.all() возвращает массив значений всех переданных промисов, при этом сохраняя порядок оригинального (переданного) массива, но не порядок выполнения.

Создадим несколько промисов:

```js
const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 5000))

const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000))

const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 1000))
```

Передадим массив из созданных промисов в Promise.all():

```js
Promise.all([promise1, promise2, promise3])
  .then(([response1, response2, response3]) => {
    console.log(response1)
    // 1
    
    console.log(response2)
    // 2

    console.log(response3)
    // 3

  })
```

Если передать пустой массив, то Promise.all() будет выполнен немедленно.

Если хотя бы один промис из переданного массива завершится с ошибкой, то Promise.all() тоже завершится с этой ошибкой. Метод уже не будет следить за выполнением оставшихся промисов, которые рано или поздно все-таки выполнятся, и их результаты будут просто проигнорированы.

В примере ниже, промис promise2 завершается с ошибкой:

```js
const promise1 = new Promise(
  resolve => setTimeout(() => resolve(1), 5000)
)

const promise2 = new Promise(
  (resolve, reject) => setTimeout(() => reject('error'), 2000)
)

const promise3 = new Promise(
  resolve => setTimeout(() => resolve(3), 1000)

)

Promise.all([promise1, promise2, promise3])
  .then(([response1, response2, response3 ]) => {
    console.log(response1)
    console.log(response2)
    console.log(response3)
  })

  .catch(error => {
    console.error(error)
    // error
  })

```

В итоге обработчик then()будет проигнорирован, и будет выполняться код из обработчика ошибок catch().

## Пример загрузки нескольких API одновременно

В веб-разработке часто возникает задача: получить данные сразу с нескольких внешних источников - API. Чтобы ускорить выполнение и не блокировать интерфейс, лучше загружать эти данные параллельно.

Параллельные запросы позволяют уменьшить общее время ожидания ответа, не блокировать интерфейс пользователя и рационально использовать возможности сети.

Пример кода:

```js
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/users/1"
];

async function loadData() {
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(r => r.json()));
    console.log("Результаты:", data);
  } catch (error) {
    console.error("Ошибка при загрузке:", error);
  }
}
loadData();
```

Этот код отправляет два запросы параллельно с помощью urls.map(fetch), затем ожидает, пока оба вернут ответ (Promise.all(...)). После чего преобразует ответы в JSON формат и выведет результаты в консоль.

## Как делать последовательные запросы

Последовательные запросы - ситуация, когда второй запрос начинается только после завершения первого. Для этого в JavaScript используется await последовательно внутри async функции.

```js
async function fetchSequentially() {
  try {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data1 = await response1.json();
    console.log("Первый ответ:", data1);
    
    const response2 = await fetch("https://jsonplaceholder.typicode.com/users/" + data1.userId);
    const data2 = await response2.json();
    console.log("Второй ответ:", data2);
    
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

fetchSequentially();
```

Когда использовать последовательные запросы?

* Когда второй запрос зависит от данных первого;
* Когда нужно избегать перегрузки API;
* Когда важно соблюдать порядок операций.

# Обработка статусов ответа

## Работа с кодами ответа (200, 404, 500)

Работа с кодами ответа (200, 404, 500 и т. д.) в JavaScript делается через объект Response, который возвращает fetch. У него есть поле .status, где хранится HTTP-код.

Пример кода:

```js
async function fetchWithStatusCheck(url) {
  try {
    const response = await fetch(url);

    // Проверка кода ответа

    if (response.status === 200) {
      const data = await response.json();
      console.log("Успешно:", data);
      
    } else if (response.status === 404) {
      console.warn("Не найдено (404):", url);
      
    } else if (response.status >= 500) {
      console.error("Ошибка сервера:", response.status);
   
    } else {
      console.log("Другой статус:", response.status);
    }

  } catch (error) {
    console.error("Ошибка сети или fetch:", error);
  }
}

fetchWithStatusCheck("https://jsonplaceholder.typicode.com/posts/1"); // 200

fetchWithStatusCheck("https://jsonplaceholder.typicode.com/unknown"); // 404
```

## Как правильно обрабатывать ошибки API

Обработка ошибок нужна в следующих случаях:

* Сетевая ошибка - когда нет интернета, API-сервер недоступен, таймаут, DNS-ошибка и т.п.
* API вернул ошибку (404, 500 и др.) - запрос выполнен, но сервер сообщил об ошибке
* Ошибка парсинга JSON - сервер вернул невалидный JSON или другой тип ответа

Пример кода с обработкой ошибок и с использованием fetch

```js
async function loadData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();
    console.log("Данные:", data);
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
}
loadData();
```

# Пример использования fetch на практике

## Запрос списка пользователей с JSONPlaceholder

JSONPlaceholder — это бесплатный фейковый онлайн-API, который предоставляет данные, такие как список пользователей, посты, комментарии и другие ресурсы. Это отличный инструмент для тестирования и обучения работе с API.

Для выполнения запросов к API мы используем fetch — встроенную функцию в JavaScript для выполнения HTTP-запросов. Мы будем работать с методом GET, чтобы получить список пользователей.

```js
async function getUsers() {
  try {
    // Отправляем запрос на сервер
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Проверяем успешность ответа (код 200)
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    // Преобразуем ответ в формат JSON
    const users = await response.json();

    // Выводим список пользователей в консоль
    console.log("Список пользователей:", users);

  } catch (error) {
    // Обработка ошибок (например, нет интернета или ошибка API)
    console.error("Ошибка при загрузке пользователей:", error.message);
  }
}

// Вызываем функцию для получения данных
getUsers();
```

Когда вы вызываете fetch("<https://jsonplaceholder.typicode.com/users>"), выполняется запрос к серверу. Он будет асинхронным, то есть не заблокирует выполнение других операций в программе.

## Отправка формы через fetch

Отправка данных формы через fetch — это современный способ отправки запросов с помощью JavaScript. Он позволяет делать это асинхронно, без необходимости перезагружать страницу. Это удобно для создания динамичных веб-приложений, где форма отправляется в фоновом режиме.

Предположим, у нас есть простая форма, в которой пользователь вводит имя и email, и мы хотим отправить эти данные на сервер.

```js
document.getElementById('userForm').addEventListener('submit', async function(event) {

  event.preventDefault(); // Предотвращаем стандартную отправку формы
  // Сбор данных из формы
  const formData = new FormData(this);
  try {
    // Отправляем данные формы с помощью fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',  // Метод запроса
      body: formData   // Данные формы
    });
    
    // Проверка успешности ответа
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    
    // Получаем и выводим ответ сервера
    const data = await response.json();
    console.log('Ответ сервера:', data);
    
    // Сообщение о успешной отправке
    alert('Форма отправлена успешно!');
    
  } catch (error) {
    console.error('Ошибка при отправке формы:', error.message);
    alert('Ошибка при отправке формы');
  }
});
```

Вешаем обработчик на событие отправки формы. С помощью event.preventDefault() предотвращаем стандартное поведение формы (перезагрузку страницы). Для сбора данных используем FormData. Этот объект автоматически собирает все данные из формы, включая файлы и текстовые поля. Мы отправляем запрос с методом POST на сервер. В поле body указываем данные формы, которые автоматически сериализуются в нужный формат для отправки. После отправки мы проверяем, был ли запрос успешным, используя response.ok. Если запрос неудачный (например, сервер вернул код 404 или 500), выбрасывается ошибка. Если что-то пошло не так — мы ловим ошибку с помощью catch и выводим соответствующее сообщение.
