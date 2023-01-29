---
layout: "../../layouts/BaseLayout.astro"
title: "Лабораторная работа №10"
tag: "Лабораторные"
---

## JavaScript: функции, массивы, объекты

**Цель:** изучить основы языка программирования JavaScript: функции, массивы, объекты. Приобрести навыки написания кода, работы с инструментами разработчика и консолью браузера, отладки кода с помощью IDE.

### Порядок выполнения лабораторной работы:

1. Изучить:
   - синтаксис создания функций (объявление функции, функциональное выражение, стрелочные функции), параметры/аргументы, возврат значения;
   - массивы (методы pop/push, shift/unshift, перебор for .. of, метод forEach);
   - объекты (ключ: значение, перебор for .. in, методы delete, keys, values, entries);
   - объект Math, его свойства и методы.
1. Для выполнения работы необходимо:
   - Создать документ html с H1 заголовком «ФИО - Лабораторная работа №10».
   - Решить предложенные задачи используя JS.
   - Подключить решения к созданной странице.
1. Проверить код с помощью ES Lint и исправить ошибки.
1. Зафиксировать результаты работы с помощью системы контроля версий git и отправить репозиторий на github.
1. Загрузить проект на сервер через sftp или используя ssh.

#### Требования к JS:

- Все задачи имеют решение и требуемый в них вывод.
- Отсутствуют ошибки от ESLint.
- Отсутствуют ошибки в консоли браузера при работе с веб-страницей.

### Результаты выполнения лабораторной работы:

Результаты работы **проверены наставником**.

Статическая веб-страница, сгенерированная с помощью команды `npm run build`, на хостинге проверенная, со структурой и оформлением, которая соответствует требованиям и сохранена в системе контроля версий.

### Источники

- [«Современный учебник JavaScript»](https://learn.javascript.ru/)
- [doka.guide](https://doka.guide/js/)
- [Руководство по JavaScript на русском](https://developer.mozilla.org/ru/docs/Web/JavaScript)
- [Марейн Хавербек «Выразительный Javascript»](https://karmazzin.gitbook.io/eloquentjavascript_ru/)

## Задачи

### Задача №1 Функция конвертации скоростей

Код из первой задачи прошлой лабораторной работы переработать в функцию convertSpeed, которая принимает два параметра: значение скорости и направление преобразования. Функция возвращает в виде строки скорость в других единицах измерения.

#### Пример вывода:

```
convertSpeed(36, 'toMS') -> '10 м/с'
convertSpeed(36, 'toKMH') -> '72 км/ч'
```

### Задача №2 Абсолютное значение

Напишите функцию absValue без Math.abs(x), которая в качестве параметра принимает число и возвращает его абсолютное значение (по модулю).

#### Пример вывода:

```
absValue(-2) -> 2
absValue(100) -> 100
absValue(0) -> 0
```

### Задача №3 Работа с объектом

Напишите код, который создает объект, выводит список этих свойств и сообщение вида "Студент _Имя_ _Фамилия_ учится в _номер_ группе".

#### Пример объекта:

```
let student = {
group: 201,
last_name: "Иванов",
first_name: "Иван"
};
```

#### Пример вывода:

```
> Список свойств: group, last_name, first_name
> Студент Иван Иванов учится в 201 группе
```

### Задача №4 Случайные числа

Используя методы объекта Math создать функцию, которая возвращает целое случайно сгенерированное число в диапазоне от min до max.

```
randomNumber(0, 10) -> 3
randomNumber(-10, 10) -> -4
```

### Задача №5 Значения из массива

Используя функцию из прошлой задачи, реализовать функцию, которая возвращает случайные значения из массива в заданном количестве в виде нового массива.

```
sampleArray([1,2,3,4], 2) -> [3, 4]
randomNumber([1,2,3,4], 3) -> [2, 2, 1]
```

## Вопросы для защиты

1. Как создаются функции?
1. Как хранятся данные в массиве?
1. Какие методы массивов вы знаете?
1. Как обратиться к элементу массива?
1. Как можно перебирать элементы массива?
1. Что такое объект?
1. Как получить значение из свойства объекта?
1. Для чего используется объект Math?
1. Приведите примеры свойств и методов в Math.