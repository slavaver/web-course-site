---
number: "0"
title: "Вводное занятие"
type: "labs"
---

## Регистрации

1. [Github](//github.com)
1. [Figma](//figma.com)
1. [Render](//www.render.com) - лучше сделать дома

## Установка ПО

1. VS Code или любая альтернатива
    1. Расширение к VSCode - Live Server
1. Git
1. Terminal

## Базовые команды

[Гайд по Git](/web-course-site/useful/git)

Команды git:

```bash
git add
git commit
git init
git status
git log
```

Команды терминала

```bash
pwd
cd
mkdir
touch
rm
cp
```

## Проба пера

### HTML

1. Создать index.html
    1. `header`, `nav`, `main`, `footer`, `h1`, `h2`, `p`, `a`, `img`, `ul/ol`, `li`
1. Проверить на [валидаторе](https://validator.w3.org/)
1. Исправить ошибки
1. Отформатировать код
1. Сохранить изменения

### Git

1. В папке проекта инициализировать репозиторий `git init --initial-branch=main`
1. Задать имя и имейл:
    1. `git config --global user.email "Ваш имейл на github"`
    1. `git config --global user.name "Ваше имя"`
1. Добавить файл для коммита `git add index.html`
1. Создать коммит с `git commit -m "текст вашего коммита"`
1. Связать локальный репозиторий с удаленным `git remote add origin ссылка_с_github`
1. Отправить изменения на удаленный репозиторий `git push -u origin main`

### Render

1. Создать новый сайт
1. Связать репозиторий и нужную ветку на github с render
1. Дождаться выгрузки страницы

### Результат работы

Страница на Render. Репозиторий с несколькими коммитами. index.html проходит валидацию, код в нем отформатирован.
