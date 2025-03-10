---
number: "4"
title: "Валидация данных в форме"
type: "labs"
---

# Валидация данных в формах

**Цель:** изучить работу с формами и их событиями, познакомиться с Constraint Validation API.

## Порядок выполнения лабораторной работы:

1. Изучить:
   - изучение фаз жизненного цикла события:
     - погружения (capturing phase),
     - цели (target phase),
     - всплытия (bubbling stage).
   - добавление обработки событий addEventListener,
   - работа с объектом event,
   - прекращение всплытия stopPropagation(),
   - отмена действия браузера preventDefault().
   - атрибуты полей форм:
     - required
     - minlength и maxlength
     - min и max
     - pattern
   - использование Constraint Validation API.
1. Для выполнения работы необходимо:

   - Переключить на ветку main, создать ветку lab4 и работать на ней.
   - Из макета прошлого семестра скопировать шапку со стилями и в нее добавить кнопку регистрации или если такая уже была, то использовать ее.
   - Нажатие на эту кнопку открывает showModal() модальное окно созданное с помощью элемента dialog.
   - В модальном окне должна быть корректная форма с полями для ввода имени, почты и пароля и три кнопки: для отправки формы, показа пароля и закрытия модального окна.
   - Все поля обязательны к заполнению. Пароль не может быть короче 6 символов. Эти требования реализовать с помощью атрибутов полей формы.
   - Добавить стили с помощью псевдоклассов :user-valid, :user-invalid.
   - Чтобы избежать конфликта с вашими проверками форме требуется задать атрибут novalidate.
   - В label добавить указание об обязательности заполнения, но не звездочку.
   - В разметку формы сразу добавьте элементы для вывода сообщения об ошибке с минимальной высотой в одну строку и свяжите его с input через атрибут aria-describedby.
   - Пока сообщений об ошибках нет, элемент может быть скрыт с помощью атрибута hidden.
   - Как только поле теряет фокус (blur), с помощью JS проводится валидация этого поля через свойство validity, которое возвращает объект описывающий состояние корректности, и если есть несоответствие то добавляется aria-invalid="true" к input, сообщение об ошибке добавляется в созданный элемент и с него снимается атрибут hidden. Если ошибка исправлена, то все возвращается в исходное состояние.
   - Отследить на форме событие submit, если все корректно, то собрать данные через FormData() и вывести их в консоль, в противном случае поставить фокус на первое неверное поле. Перезагрузку страницы предотвратить с помощью preventDefault().
   - При нажатии вне модального окна или на кнопку закрытия, оно должно закрываться.
   - Пока нажата кнопка показа пароля меняется тип поля с `password` на `text`, как только кнопка отпущена - тип меняется обратно. События: pointerdown и pointerup.

1. Провести ручное тестирование в браузере.
1. Отформатировать документы.
1. Убедиться, что нет замечаний от ESLint.
1. Зафиксировать результаты работы с помощью системы контроля версий git и отправить ветку lab4 в репозиторий на github.
1. Загрузить проект на Render через ручную загрузку (manual deploy).

**Способы обозначения ошибки:**

- Отображение сообщений или маркеров красного цвета рядом с каждым некорректным полем.
- Изменение цвета фона или границы неверных полей на красный.
- Изменение цвета label'а.

## Требования к JS:

- HTML код валиден.
- Отсутствуют ошибки ESLint в панели Problems в VS Code.
- Отсутствуют ошибки в консоли браузера при работе с веб-страницей.
- Отсутствуют ошибки в wave.webaim.org и lighthouse по критерию доступности.

## Результаты выполнения лабораторной работы:

Результаты работы _проверены наставником_.

Статическая веб-страница на хостинге, со структурой и оформлением, которая соответствует требованиям и сохранена в системе контроля версий.

## Источники

- [Элемент диалог](https://doka.guide/html/dialog/)
- [Атрибут novalidate](https://doka.guide/html/novalidate/)
- [Доступные формы - doka.guide](https://doka.guide/a11y/accessible-forms/)
- [Form Validation web.dev](https://web.dev/learn/forms/validation?hl=ru)
- [Form Validation MDN](https://developer.mozilla.org/ru/docs/Learn/Forms/Form_validation)
- [Progressively Enhanced Form Validation, Part 1: HTML and CSS](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-1-html-and-css/)
- [Progressively Enhanced Form Validation, Part 2: Layering in JavaScript](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-2-layering-in-javascript/)
- [«Современный учебник JavaScript»](https://learn.javascript.ru/)
- [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/)

## Вопросы для защиты

1. Какие преимущества дает использование элемента dialog?
1. Отличие showModal() от show() для открытия dialog.
1. Назовите фазы жизненного цикла события.
1. На какой фазе изначально срабатывают обработчики событий?
1. Всплывают ли события blur и focus?
1. Для чего нужен preventDefault()?
1. Какие атрибуты полей форм можно использовать для добавления ограничений?
1. Почему требуется проверять данные на стороне клиента?
1. Чем отличаются методы reportValidity() и checkValidity()?
1. Что делает атрибут novalidate для формы?
1. Какие псевдоклассы могут использоваться для изменения стилей для некорректных полей формы? В чем их разница.
