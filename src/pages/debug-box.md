---
layout: "../layouts/BaseLayout.astro"
title: "Отладка блоков"
tag: "Полезное"
---

## "Console.log" для верстки

Самый простой вариант это добавить обводку для всех элементов на странице.

```css
* {
  outline: 1px solid red;
}
```

Можно добавить к этому добавить фон.

```css
* {
  outline: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
```

Так как у универсального селектора `*` низкая специфичность, то для того чтобы сойвство точно изменило свое значение применятеся `!important`.

```css
* {
  outline: 1px solid red !important;
  background: rgba(255, 0, 0, 0.1) !important;
}
```

Следующий вариант это переназначить всем элементам разный цвет фона с прозрачностью.

```css
* {
  color: #0f0 !important;
  outline: solid #f00 1px !important;
  background-color: rgba(255, 0, 0, 0.2) !important;
}
* * {
  background-color: rgba(0, 255, 0, 0.2) !important;
}
* * * {
  background-color: rgba(0, 0, 255, 0.2) !important;
}
* * * * {
  background-color: rgba(255, 0, 255, 0.2) !important;
}
* * * * * {
  background-color: rgba(0, 255, 255, 0.2) !important;
}
* * * * * * {
  background-color: rgba(255, 255, 0, 0.2) !important;
}
* * * * * * * {
  background-color: rgba(255, 0, 0, 0.2) !important;
}
* * * * * * * * {
  background-color: rgba(0, 255, 0, 0.2) !important;
}
* * * * * * * * * {
  background-color: rgba(0, 0, 255, 0.2) !important;
}
```

### Источник

- [Kevin Powell - The console.log() of css](https://youtu.be/ii-lSK2_Nu4)
- [My favorite CSS hack](https://dev.to/gajus/my-favorite-css-hack-32g3)
