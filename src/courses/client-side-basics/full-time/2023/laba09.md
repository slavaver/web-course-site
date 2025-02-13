---
number: "9"
title: "Signals, SSE"
type: "labs"
---

# Signals, Server-sent Events

**Цель:** изучить технологию server-sent events, создать интерфейс используя сигналы для его реактивности.

## Содержание и порядок выполнения лабораторной работы:

1. Изучить материал в источниках.
1. Создать от ветки main ветку lab9.
1. Задачей работы является создать интерфейс для отображения счета для вариантов камень, ножницы, бумага (количество выигрышей, проигрышей и общего количества раундов).
1. Создать документ html с title «ФИО - Лабораторная работа №9».
1. Добавить кнопку "Следить за играми", при нажатии на которую создается экземпляр EventSource и начинается обработка поступающих данных. URL для EventSource - `http://194.67.93.117:80/rps/stream`. Событие: `round`, данные формата JSON `{player1: "Камень"/"Ножницы"/"Бумага", player2: "Камень"/"Ножницы"/"Бумага"}`.
1. Добавить кнопку "Остановить", которая закрывает соединение.
1. Реализовать Signal и Effect используя **классы**.
1. Реализовать класс компонента для отображения результатов (заголовок, количество выигрышей, проигрышей и общего количества раундов).
1. Создать необходимые компоненты, сигналы и эффекты для связи входящих по SSE данных и будущего отображения в интерфейсе.
1. Помните о валидности HTML.
1. Провести ручное тестирование в браузере.
1. Отформатировать документы.
1. Убедиться, что нет замечаний от ESLint.
1. Зафиксировать результаты работы с помощью системы контроля версий git и отправить ветку lab8 в репозиторий на github.
1. Загрузить проект на Render через ручную загрузку (manual deploy).

## Требования к JS:

- HTML код валиден.
- Отсутствуют ошибки ESLint в панели Problems в VS Code.
- Отсутствуют ошибки в консоли браузера при работе с веб-страницей.

### Результаты выполнения лабораторной работы:

Результаты работы _проверены наставником_.

Статическая веб-страница на хостинге, со структурой и оформлением, которая соответствует требованиям и сохранена в системе контроля версий.

## Источники

1. [Использование server-sent events](https://developer.mozilla.org/ru/docs/Web/API/Server-sent_events/Using_server-sent_events)
1. [EventSource](https://developer.mozilla.org/ru/docs/Web/API/EventSource)
1. [Наблюдатель](<https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)>)
1. [The Observer Pattern](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s05.html)
1. [Реактивность в программировании](https://doka.guide/tools/reactivity/)
1. [Patterns for Reactivity with Modern Vanilla JavaScript](https://frontendmasters.com/blog/vanilla-javascript-reactivity/)
1. [Reactive UI](https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/)
1. [Proposal Signals](https://github.com/tc39/proposal-signals)
1. [Signal](https://github.com/WebReflection/signal)
1. [Signals vs. Observables, what's all the fuss about?](https://www.builder.io/blog/signals-vs-observables)

## Вопросы для защиты

1. Принцип работы SSE?
1. Использование объекта EventSource.
1. Применение реактивности.
1. Использование состояния/state.
1. Шаблон наблюдатель (классы, поля, методы).
1. Идея Signal, его устройство.
1. Что происходит когда создается effect.
1. Отличие Signal и Observer.
1. Организация частей интерфейса в компоненты (классы).
