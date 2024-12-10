---
number: "8"
title: "Unit Tests"
type: "labs"
---

# Unit-тестирование

Цель: изучить основы написание юнит-тестов и научиться писать тесты для логики и компонентов Vue с помощью vitest и Vue Test Utils.

## Порядок выполнения лабораторной работы

Вам предстоит написать как модульные тесты для предметной области, так и тесты для vue компонентов. Цель Тестирования - это не достижение 100-процентного покрытия, а обеспечение работы критических путей вашего приложения и поддержание качества кода.

### Подготовка

Изучите основные функции фреймворка для тестирования [vitest](https://vitest.dev/) и работу с [vue test utils](https://test-utils.vuejs.org/guide/essentials/a-crash-course.html).

Продолжите работу в репозитории прошлой работы, все необходимое для выполнения этой работы у вас уже установлено и настроено.

### Основная задача

#### Предметная область

1.  Тесты класса принтера

    - Протестируйте метод запуска печати

      - Убедитесь, что статус принтера меняется на «печать»
      - Убедитесь, что метод выбрасывает ошибку, если не назначена модель
      - Убедитесь, что он выдает ошибку, если не установлена катушка

    - Протестируйте методы установки и снятия катушки

      - Убедитесь, что катушка устанавливается
      - Убедитесь, что нельзя установить вторую катушку
      - Убедитесь, что нельзя снять катушку при запущенной печати

2.  Тесты класса модели

    - Проверьте правильность инициализации модели со всеми необходимыми полями

3.  Тесты катушек с наполнителем

    - Убедитесь в правильной инициализации длины
    - Проверьте расчет оставшейся длины

#### Компоненты

Изучите структуру каждого компонента, уделяя особое внимание свойствам (props), испускаемым событиям (emit) и вычисляемым свойствам (computed).

При тестировании отрисовки компонентов, проверяйте, что они выводят правильные результаты на основе переданных значений в свойства (props), они правильно реагирует на взаимодействие пользователя (например, на нажатие кнопки), они передают правильные события своим родительским компонентам.

1. Компонента списка модели или пластика

   - Протестируйте отрисовку списка (список и сообщение о пустоте)
   - Проверьте функциональность сортировки
   - Проверьте отображение информации
   - Проверьте удаление из списка

1. На главном экране

   - Проверьте отрисовку принтеров, очередей
   - Проверьте отображение %
   - Проверьте отображение ошибок

### Требования к тестам

- Все тесты должны быть одной директории
- Тесты предметной области должны находиться в каталоге директории unit, а тесты компонентов в components
- Соблюдайте соглашение об именовании тестов \[name\].spec.js
- Пишите понятные описания тестов
- Следуйте шаблону Arrange-Act-Assert
- Используйте значимые утверждения (assertions)
- Учитывайте граничные случаи
- Комментируйте сложные тестовые сценарии

### Github

Зафиксируйте результаты работы с помощью системы контроля версий git в репозиторий на github. Отправьте коммиты на ваш репозиторий в Classroom.

## Результат выполнения

Полностью работающее приложение, удовлетворяющее требованиям, проходящее тесты, сохраненное в коммитах, по которым можно увидеть работу и прогресс по заданию на удаленном репозитории.

## Источники

- [Vitest](https://vitest.dev/)
- [Vue Test Utils - Crash Course](https://test-utils.vuejs.org/guide/essentials/a-crash-course.html)
- [Тестирование - Официальное руководство Vue на русском](https://v3.ru.vuejs.org/ru/guide/testing.html)
- [Vue.js testing handbook](https://lmiller1990.github.io/vue-testing-handbook/v3/)

## Вопросы для защиты

1. Тестирование и верификация
1. Классификация тестирования
1. Виды тестов и пирамида тестирования
1. Цель тестирования
1. Юнит тест. Определение, характеристики
1. Струкрута юнит теста. AAA
1. Идея TDD