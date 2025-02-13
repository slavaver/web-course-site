---
number: "1"
title: "JS: начало"
type: "labs"
---

# JavaScript: типы данных, операторы, переменные, условное и циклическое выполнение

**Цель:** познакомиться с базовым синтаксисом языка программирования JavaScript. Приобрести навыки написания кода и работы с инструментами разработчика и консолью браузера. Познакомиться с концепцией ветвей в git и работе с ними.

## Порядок выполнения лабораторной работы:

1. Изучить:
   - изучение основ языка программирования JavaScript:
     - Основные типы данных
     - Операторы
     - Динамическая типизация и приведение типов данных.
     - Объявление переменных и присваивание значений.
     - Допустимые имена переменных.
   - конструкции:
     - условные:
       - if...else
       - switch
     - циклические:
       - for
       - while
       - do-while
1. Для выполнения работы необходимо:
   - Создать документ html с H1 заголовком «ФИО - Лабораторная работа №1».
   - Решить предложенные задачи используя JS.
   - Подключить решения к созданной странице.
1. Зафиксировать результаты работы с помощью системы контроля версий git и отправить ветку lab1 в репозиторий на github.
1. Загрузить проект на Render.

## Требования к JS:

- Все задачи имеют решение и требуемый в них вывод.
- Отсутствуют ошибки в консоли браузера при работе с веб-страницей.

## Результаты выполнения лабораторной работы:

Результаты работы _проверены наставником_.

Статическая веб-страница на хостинге, со структурой и оформлением, которая соответствует требованиям и сохранена в системе контроля версий.

## Источники

- [«Современный учебник JavaScript»](https://learn.javascript.ru/)
- [doka.guide](https://doka.guide/js/)
- [Руководство по JavaScript на русском](https://developer.mozilla.org/ru/docs/Web/JavaScript)
- [Марейн Хавербек «Выразительный Javascript»](https://karmazzin.gitbook.io/eloquentjavascript_ru/)

## Задачи

### Задача №1 Конвертация температуры

Создать две переменные для температуры в градусах Цельсия и Фаренгейта. Произвести пересчет в обе стороны и вывести информацию в консоль с помощью шаблонных литералов и подстановки.

**Пример вывода:**

```
> 10 по Цельсию равно 50 по Фаренгейту
> 32 по Фаренгейту равно 0 по Цельсию
```

### Задача №2 Прямоугольник

По трем сторонам треугольника проверить возможность его существования, если такой треугольник возможен, то рассчитать его периметр, площадь и отношение периметра к площади. Для решения задачи вам нужна формула Герона и метод `Math.sqrt()`, который возвращает квадратный корень числа.

В консоль требуется вывести существует ли треугольник и результаты расчетов с их обозначением

**Примеры вывода:**

```
> треугольник существует
> периметр = __
> Площадь = __
> Соотношение = __
```

```
> треугольника не существует
```

### Задача №3 Fizz-Buzz

Создайте переменную с целым числом и напишите цикл, который проходит от 0 до указанного в переменной значения и если текущее значение четно, то в консоль выводится buzz, если нечетно fizz, если число делится на 5 - fizz buzz.

**Пример вывода:**

```
> "0 buzz"
> "1 fizz"
> "2 buzz"
> "3 fizz"
> "4 buzz"
> "5 fizz buzz"
...
```

### Задача №4 Елка

Напишите программу, которая создает **одну** строку, представляющую елку, используя для разделения строк символы новой строки. Высота елки задается через переменную. В слоях елки чередуются "\*" и "#" и на каждой строке символов больше на один, а в последнем ствол из символов `||`.

**Пример вывода:**

```
>
*
##
***
####
*****
######
*******
########
*********
##########
***********
############
||
```

### Задача №5 Деление

Напишите код, который проверяет, делится ли нацело число `n` на два числа `x` **И** `y`. Все входные данные - положительные ненулевые числа и хранятся в переменных.

**Пример вывода:**

```
> n =   3, x = 1, y = 3 =>  true
> n =  12, x = 2, y = 6 =>  true
> n = 100, x = 5, y = 3 => false
> n =  12, x = 7, y = 5 => false
```

### Задача №6 Кварталы

Задав месяц как целое число от 1 до 12, выведите, к какому кварталу года он относится как целое число.

Например: месяц 2 (февраль) относится к первому кварталу; месяц 6 (июнь) относится ко второму кварталу; месяц 11 (ноябрь) относится к четвертому кварталу.

**Пример вывода:**

```
> месяц 2 => 1 квартал
> месяц 11 => 4 квартал
```

### Задача №7 Два в степени

Создайте переменную с целым числом - n. Выведите в консоль строку со всеми значениями 2 в степени от 0 до n включительно через запятую.

**Пример вывода:**

```
> 1        // [2^0]
> 1, 2     // [2^0, 2^1]
> 1, 2, 4  // [2^0, 2^1, 2^2]
```

## Вопросы для защиты

1. Что значит "JS слабо типизированный язык"?
1. Что значит "JS язык с динамической типизацией"?
1. Какие типы значений есть в JS?
1. Какой оператор позволяет определить тип значения?
1. Чем отличаются строки "", '' и ``?
1. Что такое операнд и оператор?
1. Какие операторы есть в JS?
1. Как проверяются условия в JS?
1. Что такое истинные и ложные значения?
1. Какие есть циклы в JS?
1. Назовите команды git, позволяющие работать с ветками?
