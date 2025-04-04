---
number: "5"
title: "Promise"
type: "labs"
---

# Promise

**Цель:** получить представление об асинхронности и цикле событий (Event Loop), научиться пользоваться функциями обратного вызова, объектом Promise и его методами.

## Порядок выполнения лабораторной работы

1. Изучить теорию связанную с асинхронностью, циклом событий, функциями обратного вызова, объектом Promise и его методами (.then() .catch() .finally() .all(), .any()). Таймеры: setTimeout, setInterval, clearInterval, замыкания и принцип их работы.

1. Для выполнения работы необходимо:

   - От ветки main создать ветку lab5.
   - Создать документ html с H1 заголовком «ФИО - Лабораторная работа №5».
   - Решить предложенные задачи используя JS.
   - Подключить решения к созданной странице.
   - Элементы интерфейса для задач разместить в отдельных секциях с соответствующими подзаголовками.

1. Провести ручное тестирование в браузере.
1. Отформатировать документы.
1. Убедиться, что нет замечаний от ESLint.
1. Зафиксировать результаты работы с помощью системы контроля версий git и отправить ветку lab5 в репозиторий на github.
1. Загрузить проект на Render через ручную загрузку (manual deploy).

## Требования к JS:

- HTML код валиден.
- Отсутствуют ошибки ESLint в панели Problems в VS Code.
- Отсутствуют ошибки в консоли браузера при работе с веб-страницей.

## Результаты выполнения лабораторной работы:

Результаты работы _проверены наставником_.

Статическая веб-страница на хостинге, со структурой и оформлением, которая соответствует требованиям и сохранена в системе контроля версий.

## Источники

- [Асинхронное программирование в однопоточных средах JavaScript](https://habr.com/ru/articles/651037/)
- [Асинхронность](https://doka.guide/js/async-in-js/)
- [MDN: Асинхронность](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous)
- [Функции обратного вызова](https://learn.javascript.ru/callbacks)
- [Демо Event Loop](http://latentflip.com/loupe/)
- [Запись выступления про Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [Промисы](https://doka.guide/js/promise/)
- [Использование промисов](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises)
- [Объект Promise и его методы: then, catch, finally](https://learn.javascript.ru/promise-basics)
- [Ад обратного вызова](http://callbackhell.com/)

## Задачи

### Resolve

В интерфейсе добавить кнопку, при нажатии на которую вызывается функция job. Эта функция возвращает объект promise. Promise должен разрешиться через 2 секунды после вызова функции job и представляет строку "работа сделана" в данных, и эта же строка отображается в виде текста в интерфейсе под кнопкой.

### Случайные данные и ошибки

Напишите функцию getData, которая в качестве аргумента принимает вероятность появления ошибки (значение по умолчанию 0.5) и строку с данными, в локальной области видимости к переданной строке в начало добавляет "Синтетические данные: ", а возвращает функцию.
Возвращаемая функция в качестве аргумента принимает число, проверяет что аргумент является числом (не забыть про NaN) и с указанной долей вероятности возвращает либо данные, либо null.

### promisify

Реализуйте функцию promisify, которая превращает функцию, использующую шаблон обратного вызова, в функцию, возвращающую Promise. В интерфейс добавить кнопку для получения данных и вывести данные или ошибку в виде текста в интерфейс с цветовой индикацией.

```js
function fetchProduct(productId, callbck) {
    const product = getData(productId)
    if (!product) {
      // Вызываем callback с ошибкой
      callbck(error, null)
    } else {
      // Можно что-то сделать с данными и вызвать функцию обратного вызова
      callbck(null, data)
    }
}

function promisify() {
   // Ваш код
}

const fetchProductAsPromise = promisify(fetchProduct);

fetchProductAsPromise(productId)
    .then((data) => {})
    .catch((error) => {});
```

### Заказ пиццы

Интерфейс: форма с текстовым полем и кнопками "добавить в заказ", "заказать n пицц", где n это количество добавленных в заказ пицц. Под формой выводится список добавленных в заказ пицц. В текстовое поле пользователь через запятую вводит ингредиенты для пиццы.

Логика задачи: когда пользователь нажал кнопку "добавить в заказ", вы создаете список из строки, а разделителем является запятая, затем проверяете что список не пустой, что каждое значение является строкой и его нельзя преобразовать к числу. После проверки либо сообщаете пользователю об ошибке, либо добавляете в список и выводите новый элемент списка на экран, обновив и число в кнопке "заказать n пицц".

Для создания пицц потребуется функция makePizza, которая принимает в качестве аргумента принимает список ингредиентов. Эта функция возвращает Promise, который дает результат в виде строки "Пицца с ...список ингредиентов готова!" через интервал времени равный количество ингредиентов умноженное на 1 секунду.

Когда пользователь нажал "заказать n пицц" с помощью функции makePizza вы запускаете готовку. На время готовки в кнопке "заказать n пицц" вы текст меняете на "заказ в работе" и при повторной попытке нажать кнопку, ничего не выполняете. Когда все пиццы готовы (Promise.all()), очистите список пицц, а пользователю покажите сообщение о том что все готово.

Если есть желание усложнить задачу, в функцию makePizza добавьте вероятность, что в 10% случаях выдается ошибка "Пицца сгорела!" и в этом случае требуется повторно запускать пиццу в готовку.

## Вопросы для защиты

1. Что такое стек вызовов (call stack)?
1. Для чего используются функции обратного вызова (callback)?
1. Как можно создавать и очищать таймеры в JS?
1. Что такое замыкание?
1. Что такое асинхронность и почему приходится ее использовать в JS?
1. Общий принцип работы event loop.
1. Promise и его состояния.
1. Методы объекта Promise. Примеры их использования.
