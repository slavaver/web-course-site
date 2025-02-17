---
number: "2"
title: "DOM и события"
type: "labs"
---

# JavaScript: DOM и события

**Цель:** изучить DOM, события и их обработку, взаимосвязь и способы манипуляций с объектами дерева.

## Порядок выполнения лабораторной работы:

1. Изучить:

   - объектную модель документа DOM;
   - способы получения элементов или списков элементов из дерева;
   - работу со свойствами и методами элементов дерева;
   - создание, добавление, удаление элементов дерева;
   - редактирование текстового содержимого объектов;
   - управление стилями элементов и классами;
   - события и объект `event`;
   - добавление обработчиков событий и работа с объектом `event`;

1. Перед выполнением самой лабораторной работы:

   - Установить node.js четной версии.
   - Переключиться на ветку main.
   - Инициализировать пакет с помощью команды `npm init -y`.
   - Установить ESLint с помощью `npm init @eslint/config`. Подсказки как отвечать на вопросы при установке:
     1. How would you like to use ESLint - **To check syntax and find problems**
     1. What type of modules does your project use? - **JavaScript modules (import/export)**
     1. Which framework does your project use? - **None of these**
     1. Does your project use TypeScript? - **No**
     1. Where does your code run? - **Browser**
     1. How would you like to define a style for your project? - **Use a popular style guide**
     1. Which style guide do you want to follow? - **Standard**
     1. What format do you want your config file to be in? - **JSON**
     1. Would you like to install them now? - **Yes**
     1. Which package manager do you want to use? - **npm**
   - В файл `eslint.config.mjs` добавить правила приведенные ниже. Пример организации конфигурационного файла смотрите в [документации ESLint](https://eslint.org/docs/latest/use/getting-started#configuration).
   - Установить расширение ESLint в VS Code или аналогичное для вашего редактора.
   - Добавить в проект файл `.gitignore`. В него добавить `node_modules/`.
   - Создать коммит на ветке main со всеми новыми файлами. Убедитесь, что папка node_modules и ее содержимое не попадают в коммит.

Правила для ESLint в конфигурацию eslint.config.mjs

```js
{
   rules: {
      // Possible Problems
      "no-template-curly-in-string": "error",
      "no-use-before-define": ["error", { functions: false }],
      "no-useless-assignment": "error",
      // Suggestions
      "accessor-pairs": "error",
      "arrow-body-style": ["error", "as-needed"],
      camelcase: "error",
      curly: "error",
      eqeqeq: ["error", "always"],
      "no-alert": "error",
      "no-console": "error",
      "no-nested-ternary": "error",
      "no-return-assign": "error",
      "no-shadow": ["error", { hoist: "all" }],
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      radix: "error",
    },
}
```

1. Для выполнения работы необходимо:

   - Создать ветку lab2.
   - Создать документ html с H1 заголовком «ФИО - Лабораторная работа №2» в header.
   - Решить предложенные задачи используя JS.
   - Подключить решения к созданной странице.
   - Элементы интерфейса для задач разместить в отдельных секциях с соответствующими подзаголовками.

1. Провести ручное тестирование в браузере.
1. Отформатировать документы.
1. Убедиться, что нет замечаний от ESLint.
1. Зафиксировать результаты работы с помощью системы контроля версий git и отправить ветку lab2 в репозиторий на github.
1. Загрузить проект на Render через ручную загрузку (manual deploy).

## Требования к JS:

- Все задачи имеют решение и требуемый в них вывод.
- Отсутствуют ошибки ESLint.
- Отсутствуют ошибки в консоли браузера при работе с веб-страницей.
- Отсутствуют анонимные функции при использовании метода .addEventListener().

## Результаты выполнения лабораторной работы:

Результаты работы _проверены наставником_.

Статическая веб-страница на хостинге, со структурой и оформлением, которая соответствует требованиям и сохранена в системе контроля версий.

## Источники

- [Классы DOM-узлов](https://learn.javascript.ru/basic-dom-node-properties#klassy-dom-uzlov)
- [«Современный учебник JavaScript»](https://learn.javascript.ru/)
- [doka.guide](https://doka.guide/js/)
- [Руководство по JavaScript на русском](https://developer.mozilla.org/ru/docs/Web/JavaScript)
- [Марейн Хавербек «Выразительный Javascript»](https://karmazzin.gitbook.io/eloquentjavascript_ru/)
- [UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent)

## Задачи

### Like

Реализовать кнопку с иконкой пальца вверх или сердечка (не забывайте про доступность и текст). При нажатии на эту кнопку она помечается как активированная. При повторном нажатии она становится деактивированной.

### Like / Dislike

Повторите кнопку из прошлого задания, но добавьте вторую с иконкой пальца вниз или разбитого сердечка. Теперь при нажатии на одну из них она помечается как активированная, при повторном - деактивированной. Но они не могут быть активны одновременно. По-прежнему не забывайте про доступность и текст.

### Корзина

Сделайте несколько простых карточек с изображением, описанием и кнопкой "в корзину". Также добавьте иконку корзины со счетчиком товаров (span) в header. Счетчик должен быть размещен в правом верхнем углу иконки. При нажатии на кнопку "в корзину" счетчик корзины увеличивается на 1.

### Сортировка

Добавьте три кнопки для сортировки по возрастанию, убыванию и возврату к исходному варианту. В js создайте массив со случайными числами (можно использовать функции из прошлой работы). Список (`<ul>, <li>`) для отображения чисел должен создаваться с помощью js (не использовать innerHTML). При нажатии на одну из кнопок сортировки на страницы обновляется отображение списка.

### Координаты

При любом нажатии указателем (pointer) выводить на экран координаты этого нажатия относительно viewport и на каком элементе это произошло. Например X: 102, Y: 73 - h1.

## Вопросы для защиты

1. Назначение .gitignore и ESLint
1. window, dom, bom.
1. DOM-дерево, навигация и поиск.
1. Классы DOM-узлов.
1. Изменение документа.
1. События и их обработчики.
1. Простые события пользовательского интерфейса (UIEvent).
1. Примеры свойств в объекте `MouseEvent`.
