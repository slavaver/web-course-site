---
number: "4"
title: "Callbacks, Predicates, Generics"
type: "labs"
---

# Функции обратного вызова, предикаты, обобщения

**Цель:** на задачах освоить типизацию функций обратного вызова, использование предикатов и познакомиться с обобщенными функциями.

## Порядок выполнения лабораторной работы:

Используйте окружение и репозиторий из прошлой работы. В этой работе предлагается реализовать частичную модель 3D-принтера и решить задачи на обобщенные функции.

### 3D-печать

Для задачи понадобятся модели для катушки пластика, фигурок на печать и самого 3D-принтера.

Катушка пластика имеет поля для материала, цвета, длины нити. Метод для изменения длины нити, но только в сторону уменьшения.

Фигурка на печать имеет поля для имени модели, длины периметра и времени создания.

3D-принтер имеет поля для марки принтера, его артикула, скорости печати, хранения одной катушки пластика и очереди моделей на печать. Методы: поставить катушку, убрать катушку, добавить модель в очередь на печать, убрать из очереди, запустить и остановить печать.

После запуска печати добавлять в очередь модели можно, убирать можно все кроме текущей. В процессе печати по setInterval выводится информация о % готовности фигурки. Метод запуска печати также принимает функцию обратного вызова с двумя параметрами: ошибкой и успехом. В качестве ошибки ожидается ваш собственный класс ошибки наследованный от базового и содержит информацию о фигурке и остатке длины до конца. В случае успеха передается инфомация о завершенной фигурке.

Напишите функцию для обработки ошибки или данных, которая в случае успешного завершения печати фигурки, добавляет ее в массив готовых и выводит весь массив в консоль. В случае ошибки выводит информацию о проблеме в понятной для человека форме.

### Задачи

#### Функция идентичности

Эта функция ничего не делает и возвращает то, что было передано, без изменений, но она должна быть обобщенной для TS.

#### Конкатенация массивов

Напишите собственную реализацию функции Array.concat в обобщенном виде. У функции два параметра и она возвращает новый массив, который включает входные данные в порядке убывания.

#### Отображение массива

Требуется функция mapArray (аналог Array.map), в вашем случае у функции два параметра: массив и функция для отображения.

### top-n

Реализуйте обобщенную функцию n-первых, которая извлекает указанное количество первых элементов массива, если элементов не хватает тогда вместо них добавляется null.

#### Множества

Реализуйте описание обобщенного типа MySet, который представляет из себя аналог множества Set из JavaScript. Тип включает в себя два метода: add() и has(). Данные внутри должны храниться в поле items.

### Проверка код

Напишите код, вызывающий написанные вами функции и классы с разными аргументами, чтобы убедиться что код работает, так как вы предполагаете. В том числе проверяйте и граничные варианты поведения.

## Github

Зафиксируйте результаты работы с помощью системы контроля версий git в репозиторий на github. Отправьте коммиты на ваш репозиторий в Classroom.

## Требования

- Реализованы все функции, классы, типы аннотированы.
- Код компилируется и нет замечаний от ESLint.

## Результат выполнения

Код удовлетворяющий требованиям, сохраненный в коммите на удаленном репозитории.

## Источники для занятия

- [Предикаты типов](https://htmlacademy.ru/blog/js/type-predicates)
- [Обобщения - дженерики](https://htmlacademy.ru/blog/js/typescript-generic)

## Основные источники по TS

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Типизация - лекция от яндекса](https://youtube.com/live/M-58whTqjgU)
- [Типизация продвинутый - лекция от яндекса](https://youtube.com/live/YOly5_M040w)
- [Справочник Typescript (не последняя версия)](https://scriptdev.ru/)
- [Серия статей Изучение TypeScript](https://habr.com/ru/articles/663964/)
- [Курс TypeScript](https://code-basics.com/ru/languages/typescript)

## Вопросы для защиты

1. Поля и свойства в объектах
1. Управление доступом к полям классов в TS
1. Аксессоры и их использование в классах и объектах
1. Абстрактные классы
1. Предикаты: определение и использование
1. Обобщенные функции: синтаксис и назначение