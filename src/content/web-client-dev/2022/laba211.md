---
number: "11"
title: "Vue.js: основы"
type: "labs"
---

# Vue.js

**Цель:** изучить идеи виртуального DOM, реактивности, фреймворка, освоить на практике основы работы с Vue.js.

## Содержание и порядок выполнения лабораторной работы:

1. Изучить основные идеи заложенные в фреймворк Vue. Изучить синтаксис используемый в шаблонах (текстовой интерполяции, v-if, v-show, v-for и key, v-on, v-bind, v-model) и используемые сокращения директив.
1. Создать новую страницу vue.html в проекте из предыдущих лабораторных работ. Добавить ссылку на эту страницу в меню макета.
1. К созданной странице подключить Vue с CDN и файл для вашего кода.
1. В html добавить элемент, к которому будет подключен экземпляр Vue-приложения.
1. В созданный элемент добавить форму с текстовым полем для создания записей с кнопкой о добавлении новой записи и секцию для добавленных записей.

<figure style="border: 1px solid grey; border-radius: 10px; padding: 1em; width: 60%; margin-inline: auto;">
<img src="/web-course-site/step_1.jpg" alt="пример экрана" style="margin: 0 auto;">
<figcaption style="text-align: center">Начальный пример экрана</figcaption>
</figure>

<figure style="border: 1px solid grey; border-radius: 10px; padding: 1em; width: 60%; margin-inline: auto;">
<img src="/web-course-site/step_2.jpg" alt="пример заполнения поля" style="margin: 0 auto;">
<figcaption style="text-align: center">Пример заполнения формы</figcaption>
</figure>

<figure style="border: 1px solid grey; border-radius: 10px; padding: 1em; width: 60%; margin-inline: auto;">
<img src="/web-course-site/step_3.jpg" alt="пример заполнения поля" style="margin: 0 auto;">
<figcaption style="text-align: center">Пример добавления 2-й записи</figcaption>
</figure>

### Логика работы элементов

1. Пока поле в форме пустое кнопка заблокирована и это показано в том числе стилями (v-bind).
1. Когда в поле появляется текст, то разблокируется кнопка и появляется счетчик до максимального числа символов (v-show + computed).
1. Если символов больше заданного максимума, то показывается негативное значение и текст выделяется красным (v-bind).
1. Если остается доступными от 0 до 10 символов, то счетчик желтый.
1. При нажатии (v-on) кнопки добавить запись добавляется ниже (methods), а поле очищается.
1. В объект записи добавить время с помощью `Date.now()`. Для нормального отображения времени использовать API интернационализации - `new Intl.DateTimeFormat('ru', {year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric"}).format(date)`.
1. Если нет записей то текст "Нет записей", если всего одна - "Запись", если больше - "Записи" (v-if) и добавляется счетчик записей (v-show + computed).
1. Отрисовать все добавленные записи (v-for и key).

### Результаты выполнения лабораторной работы:

Результаты работы _проверены наставником_.

Статическая веб-страница на хостинге проверенная, со структурой и оформлением, которая соответствует требованиям и сохранена в системе контроля версий.

## Источники

- [Doka: React и альтернативы](https://doka.guide/tools/react-and-alternatives/)
- [Официальное руководство Vue на русском](https://v3.ru.vuejs.org/ru/guide/introduction.html)
- [MDN: Intl](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Doka: Date + Intl](https://doka.guide/js/date/)

## Вопросы для защиты

1. В чем заключается идея реактивности?
1. Что подразумевается под прогрессивным фреймворком?
1. Чем библиотека отличается от фреймворка?
1. Зачем в принципе использовать фреймворки Vue/Angular?
1. Для чего используется виртуальный DOM в react/vue?
1. Назовите основные директивы во Vue.
1. Двустороннее и одностороннее связывание.
1. Методы и вычисляемые значения.
1. Разница между v-if и v-show.
1. Какие есть возможности у API интернационализации Intl?