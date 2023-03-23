---
layout: "../../layouts/BaseLayout.astro"
title: "Лабораторная работа №8"
tag: "Основы web"
---

## Фон, градиент, тени, переходы, преобразования, анимации

**Цель:** изучить свойства css для создания фонов, градиентов, теней, переходов, преобразований и анимаций, овладеть навыками создания на странице анимаций (animation), переходов (transition) и преобразований (transform).

### Порядок выполнения лабораторной работы:

1. Изучить:
   - background:
     - background-attachment;
     - background-clip;
     - background-color;
     - background-image;
     - background-position;
     - background-repeat;
     - background-size;
   - gradient:
     - linear;
     - radial;
     - conic;
   - shadow:
     - text;
     - box;
   - transform;
   - transition;
   - animation и keyframes;
   - и примеры их использования.
1. Для выполнения работы необходимо:
   - для элементов, у которых есть фоновые изображения добавить и цвет (background-color) и изображения;
   - для элементов, у которых заданы стили с псевдоклассом :hover добавить плавное изменение свойств через transition;
   - в макет на главной странице (index.html) в любую секцию с карточками, добавить новую дополнительную карточку. Сначала в карточке должен отображаться анимированный указатель загрузки (loader), который спустя несколько секунд становится прозрачным и после отображается содержимое карточки. Для скрытия элемента с анимацией используйте `visibility: hidden;` Идеи для лоадеров в видео ниже.
     <video src="/web-course-site/loaders.mp4" controls>
   - на странице с формой добавить использование теней;
   - создать третью страницу (demo.html) на которую добавить примеры:
     - Линейный, радиальный, конический градиенты (по 1 примеру) для фона в тексте, для границы элемента и фона самого элемента;
     - 2D-преобразования (2 примера);
     - 3D-преобразования (2 примера) с видимым эффектом перспективы;
     - Переходы transition (2 примера).
1. Зафиксировать результаты работы с помощью системы контроля версий git и отправить репозиторий на github.
1. Загрузить проект на сервер через sftp или используя ssh.

#### Требования к html и css:

- Удобочитаемый код (Руководство по оформлению HTML/CSS кода от Google);
- Код отформатирован;
- Корректное использование тегов;
- Отсутствие ошибок на валидаторе для html и css.

## Результаты выполнения лабораторной работы:

Результаты работы **проверены наставником**.

Статическая веб-страница, сгенерированная с помощью команды `npm run build`, на хостинге проверенная, со структурой и оформлением, которая соответствует требованиям и сохранена в системе контроля версий.

## Источники

- [doka.guide](https://doka.guide/css/)

### Фоны

- [Background](https://www.freecodecamp.org/news/learn-css-background-properties/)

### Градиенты

- [Все о градиентах](https://css-tricks.com/css3-gradients/)
- [MDN: linear-gradient()](<https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient()>)
- [MDN: radial-gradient()](<https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient()>)

### Тени

- [Создание теней](https://keyframes.app/shadows/)

### Переходы

- [CSS transitions](https://www.joshwcomeau.com/animation/css-transitions/)

### Анимации

- [Doka](https://doka.guide/css/animation/)
- [MDN](https://developer.mozilla.org/ru/docs/Web/CSS/animation)
- [Создание ключевых кадров](https://keyframes.app/animate/)

### Дополнительные

- [5 Awesome CSS Animation Resources for All Web Developers](https://blog.devgenius.io/5-awesome-css-animation-resources-for-all-web-developers-70bca71a5e1e)
- [Пример карточек](https://codepen.io/Jhonierpc/pen/MWgBJpy)

### Вопросы для защиты

1. Чем отличается box shadow от text shadow?
1. Какие есть свойства можно задать для перехода?
1. Какие есть свойства можно задать для анимации?
1. Что обязательно требуется для анимации?
1. Какие градиенты существуют и какими параметрами можно управлять?
1. Как выбирается элемент, для которого указывает свойство transform?
1. Примеры преобразований
1. Какие свойства подходят для анимаций и переходов?
1. Какие свойства содержит в себе `background`?
