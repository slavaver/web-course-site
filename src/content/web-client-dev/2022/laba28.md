---
number: "1"
title: "Anime.js"
type: "labs"
---

# Anime.js

**Цель:** познакомиться с функциями-конструкторами, ключевым словом this, добавлением анимаций с помощью библиотеки anime.js.

## Содержание и порядок выполнения лабораторной работы:

1. Изучить объекты, методы объектов, функции-конструкторы, ключевые слова new и this.
1. Создать новую страницу animation.html в проекте из предыдущих лабораторных работ. Добавить ссылку на эту страницу в меню макета.
1. К странице подключить минифицированный файл библиотеки anime.js и main.js, в котором вы будете писать ваш код.
1. Написать функцию-конструктор, которая принимает DOM-элемент и параметры анимации и добавляет метод `animate` при вызове, которого добавляется анимация со случайным свойством из transform с помощью функции anime из библиотеки. Также по завершении анимации в консоль должна выводиться информация об элементе, на котором закончилась анимация. Пример кода ниже.
1. На страницу добавить кнопку, при нажатии на которую на страницу добавляется новый элемент, для него создается новый объект с помощью функции-конструктора и вызывается метод `animate` для запуска анимации.
1. Зафиксировать результаты работы с помощью системы контроля версий git и отправить репозиторий на github.
1. Загрузить проект на сервер через sftp или используя ssh.

```js
function AnimationTarget(el, ...) {
  this.el = el;
  // другие параметры из конструктора

  this.animate = function() {
    anime({
      targets: this.el,
      // другие параметры анимации
    });
  }
}
```

#### Требования к JS:

- Все задачи имеют решение и требуемый в них вывод.
- Отсутствуют ошибки в консоли браузера при работе с веб-страницей.

### Результаты выполнения лабораторной работы:

Результаты работы _проверены наставником_.

Статическая веб-страница на хостинге проверенная, со структурой и оформлением, которая соответствует требованиям и сохранена в системе контроля версий.

## Источники

- [Методы объекта, "this"](https://learn.javascript.ru/object-methods)
- [Конструктор, оператор "new"](https://learn.javascript.ru/constructor-new)
- [anime.js](https://animejs.com/)

## Вопросы для защиты

1. Что такое метод объекта?
1. Что такое функция-конструктор?
1. Для чего используется ключевое слово new?
1. Как работает и на что указывает ключевое слово this?