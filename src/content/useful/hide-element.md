---
title: "Скрытие элементов"
description: "Пример класса, который помогает визуально скрыть элемент, но оставить его для доступности."
chips: ["1 сем", "CSS", "Утилиты"]
---

# Визуальное скрытие элементов

_Автор: Верещагин Владислав_

## Скрытие элемента только визуально

Используйте класс `.visuallyhidden` с псевдоклассами, чтобы визуально скрыть элемент с экрана, но не из дерева доступности.

```css
.visuallyhidden:not(:focus):not(:active) {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;

    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
}
```

## Полное скрытие элемента

Полностью скрыть элемент можно тремя способами:

- через CSS-свойство display, например, `display: none;`
- через свойство CSS visibility, например `visibility: hidden;`
- через атрибут HTML5 hidden, например, `<span hidden>`.

## Скрытие элемента только из дерева доступности

Используйте атрибут `aria-hidden`, чтобы скрыть элемент из дерева доступности.

## Дополнительные советы

Используйте `visibility: inherit;` вместо `visibility: visible;`, чтобы избежать случайного отображения содержимого.

Не прикрепляйте стили CSS к атрибуту aria-hidden.

Позаботьтесь о частично скрытом содержимом с фокусом клавиатуры, добавив `tabindex="-1"`.

## Где почитать

- https://webaim.org/techniques/css/invisiblecontent/
- https://allyjs.io/tutorials/hiding-elements.html
- https://htmlacademy.ru/blog/articles/short-12
