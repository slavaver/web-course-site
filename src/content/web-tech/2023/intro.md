---
number: "1"
title: "Вводное занятие"
type: "labs"
---

## Социальные сети

- [Cайт факультета](//fit.mospolytech.ru)
- vk:
  - [Закрытая группа - FITmospolytech](//vk.com/fitmospolytech.team)
  - [Открытая группа - ИТ-факультет Московского Политеха](//vk.com/fit.mospolytech)
- telegram:
  - [Официальная группа потока](//t.me/+KOo1mwORG5UyYTNi)
  - [Общая группа профиля Веб](//t.me/+50W-nlZa-s8xODEy)
- discord:
  - [Работа с наставниками](//discord.gg/YZy7CF37gN)

## Регистрации

1. [Github](//github.com)
1. [Figma](//figma.com)
1. [Netlify](//www.netlify.com)

## Установка ПО

1. VS Code или альтернатива
   1. Расширение к VSCode - Live Server
1. Git
1. Terminal

## Базовые команды

Команды git:

```
git add
git commit
git init
git status
git log
```

Команды терминала

```
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

### Netlify

1. Создать новый сайт
1. Связать репозиторий и нужную ветку на github с netlify
1. Дождаться выгрузки страницы

### Результат работы

Страница на Netlify. Репозиторий с несколькими коммитами. index.html проходит валидацию, код в нем отформатирован.
