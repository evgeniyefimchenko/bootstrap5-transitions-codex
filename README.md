````markdown
# Bootstrap 5 Transitions Codex

Готовый каталог CSS-переходов, UI-анимаций и микровзаимодействий для Bootstrap 5 с поддержкой Codex Agent Skill.

Проект предназначен для быстрой доработки интерфейсов на Bootstrap 5 без тяжёлых frontend-фреймворков, jQuery и сторонних animation-библиотек. Все эффекты оформлены как copy-paste friendly HTML/CSS-сниппеты и могут применяться вручную или автоматически через Codex.

## Назначение

`Bootstrap 5 Transitions Codex` помогает быстро добавлять аккуратные transition-эффекты в типовые Bootstrap-компоненты:

- модальные окна;
- dropdown-меню;
- offcanvas-панели;
- toast-уведомления;
- alert-блоки;
- кнопки;
- формы и валидацию;
- карточки;
- табы и навигацию;
- accordion/collapse;
- navbar/sidebar;
- badge/counter;
- таблицы и списки;
- skeleton/loading-состояния;
- tooltip/popover;
- progress/stepper;
- page/layout transitions.

## Для каких проектов подходит

Проект рассчитан на практическую веб-разработку, где Bootstrap уже используется как основа интерфейса.

Подходит для:

- PHP-проектов;
- Symfony / Laravel;
- Bitrix;
- CS-Cart;
- Bootstrap-админок;
- статических HTML-прототипов;
- legacy-проектов без React/Vue/Svelte;
- внутренних CRM/ERP-панелей;
- быстрых UI-доработок через Codex.

## Основные принципы

- Bootstrap 5.3 compatible.
- Без jQuery.
- Без React, Vue, Svelte, Angular.
- Без GSAP, Animate.css, Framer Motion и других animation libraries.
- CSS-first подход.
- Vanilla JS только для demo-интерактивности.
- Все кастомные классы имеют префикс `bsx-`.
- Эффекты не ломают стандартное поведение Bootstrap-компонентов.
- Поддерживается `prefers-reduced-motion`.
- Используются преимущественно `transform` и `opacity`.
- Разметка остаётся доступной и Bootstrap-compatible.
- Сниппеты можно копировать напрямую в проект.

## Быстрое подключение

Подключите CSS-файл:

```html
<link rel="stylesheet" href="assets/css/bootstrap5-transitions.css">
````

Добавьте нужный класс к Bootstrap-компоненту:

```html
<button class="btn btn-primary bsx-button-press">
  Сохранить
</button>
```

Пример модального окна:

```html
<div
  class="modal fade bsx-modal-scale"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          Пример окна
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Закрыть"
        ></button>
      </div>

      <div class="modal-body">
        Мягкое появление модального окна на Bootstrap 5.
      </div>
    </div>
  </div>
</div>
```

## Codex Agent Skill

В проект встроен Codex Agent Skill:

```text
.agents/skills/bootstrap5-transitions/SKILL.md
```

Codex может использовать этот skill, чтобы автоматически подбирать и применять подходящие Bootstrap 5 transition-паттерны при задачах вроде:

* улучшить анимацию модального окна;
* добавить feedback на кнопки;
* анимировать ошибки валидации формы;
* улучшить dropdown/offcanvas;
* добавить skeleton loader;
* оживить карточки, таблицы, табы и навигацию;
* привести UI-анимации к единому стилю.

## Структура эффектов

Каталог разделён на две части:

```text
core      — базовые production-ready эффекты
extended  — дополнительные специализированные эффекты
```

Каждый эффект содержит:

* CSS-класс;
* HTML-сниппет;
* категорию;
* описание;
* рекомендации по применению;
* reduced-motion fallback;
* информацию для Codex Agent Skill.

## Пример использования с Codex

Можно дать Codex задачу:

```text
Добавь Bootstrap 5 transition для модального окна подтверждения удаления.
Используй skill bootstrap5-transitions.
Не добавляй jQuery и сторонние animation-библиотеки.
```

Codex должен выбрать подходящий эффект, например:

```text
bsx-modal-danger-confirm
```

и применить его к существующей Bootstrap-разметке без нарушения `data-bs-*` API.

## Reduced motion

Проект учитывает пользователей, у которых включено ограничение анимаций в системе.

Все эффекты должны иметь fallback через:

```css
@media (prefers-reduced-motion: reduce) {
  /* motion-safe fallback */
}
```

Цель fallback — не сломать интерфейс, а уменьшить или почти убрать движение.

## Ограничения

В проекте запрещено:

* использовать jQuery;
* добавлять React/Vue/Svelte/Angular;
* подключать animation libraries;
* переопределять Bootstrap глобально без `bsx-` scope;
* удалять Bootstrap-классы;
* ломать `data-bs-*`;
* убирать accessibility-атрибуты;
* использовать конфликтующие классы вроде `.shake`, `.fade-soft`, `.modal-scale`.

## Лицензия

MIT

```
```
