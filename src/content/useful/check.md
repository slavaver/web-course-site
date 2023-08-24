---
title: "Сверка верстки"
description: "Рецепт, который упростит вам процесс верстки по макету."
---

# Как найти визуальные отличия

Из figma экспортируем весь макет одним изображением в формате png и добаввляем его последним дочерним элементом в `body`.

```html
<body>
  <!-- Контент страницы -->
  <img class="pixel-perfect-image" src="pixel-perfect.png" alt="" />
</body>
```

В css для класса в добавленном изображении меняем позиционирование и смещаем на центр. Прозрачность можно регулировать для достижения оптимального просмотра.

```css
.pixel-perfect-image {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.5;
}
```

Главное перед сборкой проекта не забыть удалить это изображение из html.

## Источник

[Подход «Pixel Perfect» - doka.guide](https://doka.guide/css/pixel-perfect/#primer)
