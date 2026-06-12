# Bootstrap 5 Transitions Codex

Каталог готовых анимаций и микровзаимодействий для интерфейсов на Bootstrap 5.

Проект помогает быстро добавить аккуратные transition-эффекты к обычным Bootstrap-компонентам: кнопкам, модальным окнам, dropdown-меню, toast-уведомлениям, формам, карточкам, таблицам, навигации, skeleton-загрузчикам и другим элементам интерфейса.

Главная идея простая: подключить CSS-файл, добавить один `bsx-*` класс к Bootstrap-разметке и получить готовый эффект без переписывания компонента.

## Для кого этот проект

Проект подходит разработчикам, которые уже используют Bootstrap 5 и хотят быстро улучшить визуальную отзывчивость интерфейса.

Можно использовать в:

- обычных HTML/PHP-проектах;
- Symfony и Laravel;
- Bitrix;
- CS-Cart;
- Bootstrap-админках;
- CRM/ERP-панелях;
- legacy-проектах на Bootstrap 5.

Эффекты состоят из CSS-классов и небольшого опционального Vanilla JS runtime для состояний, которые невозможно выразить только CSS.

## Что внутри

Каталог разделён на две части:

```text
core      — базовые эффекты для частого использования
extended  — дополнительные эффекты для более специфичных UI-сценариев
```

В каталоге есть эффекты для:

* Modal / Dialog;
* Dropdown / Menu;
* Offcanvas / Drawer;
* Toast / Notification;
* Alert / Feedback;
* Button;
* Forms / Validation;
* Cards;
* Tabs / Navs / Pills;
* Accordion / Collapse;
* Navbar / Sidebar;
* Badge / Counter;
* Tables / Lists;
* Skeleton / Loading;
* Images / Media;
* Tooltips / Popovers;
* Progress / Steps;
* Page / Layout.

## Быстрое подключение

Подключите CSS:

```html
<link rel="stylesheet" href="assets/css/bootstrap5-transitions.css">
```

Добавьте нужный класс к Bootstrap-компоненту:

```html
<button class="btn btn-primary bsx-button-press">
  Сохранить
</button>
```

Готово. Кнопка получает мягкий press-эффект без дополнительного JavaScript.

Если в каталоге для эффекта указано `Requires JS: yes`, после Bootstrap Bundle подключите runtime:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/bootstrap5-transitions.js"></script>
```

Runtime обслуживает только необходимые состояния: показ toast, loading/success кнопок, изменение строк и счётчиков, drag-состояние файла и scroll reveal. `assets/js/demo.js` нужен только странице каталога и не должен подключаться в приложении.

## Пример: модальное окно

```html
<button
  type="button"
  class="btn btn-primary bsx-button-press"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Открыть окно
</button>

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

## Пример: карточка

```html
<div class="card bsx-card-hover-lift">
  <div class="card-body">
    <h5 class="card-title">Карточка</h5>
    <p class="card-text">
      При наведении карточка слегка приподнимается.
    </p>
  </div>
</div>
```

## Пример: ошибка формы

```html
<div class="mb-3 bsx-form-invalid-shake">
  <label for="email" class="form-label">Email</label>
  <input
    type="email"
    class="form-control is-invalid"
    id="email"
    value="wrong-email"
  >
  <div class="invalid-feedback">
    Укажите корректный email.
  </div>
</div>
```

## Именование классов

Все классы проекта используют префикс `bsx-`.

Примеры:

```text
bsx-modal-scale
bsx-button-press
bsx-card-hover-lift
bsx-form-invalid-shake
bsx-skeleton-shimmer
```

Префикс нужен, чтобы эффекты не конфликтовали с Bootstrap, темой сайта или классами вашего проекта.

## Совместимость

Проект рассчитан на Bootstrap 5.3 и обычную Bootstrap-разметку.

Поддерживаются:

* Bootstrap 5.3;
* обычная HTML-разметка;
* PHP-шаблоны;
* Twig и Blade;
* Vanilla JS для эффектов, которым требуется изменение состояния.

## Важное отличие

Репозиторий не поставляет отдельные UI-компоненты и не заменяет Bootstrap API. Он добавляет CSS-классы, HTML-сниппеты и небольшой runtime для явно отмеченных интерактивных примеров.

## Codex Agent Skill

В репозитории есть Codex Agent Skill:

```text
.agents/skills/bootstrap5-transitions/SKILL.md
```

Он нужен для того, чтобы Codex мог сам выбирать подходящие Bootstrap 5 transition-паттерны при работе с проектом.

Пример задачи для Codex:

```text
Добавь мягкую анимацию открытия для Bootstrap 5 modal.
Используй bootstrap5-transitions.
Не ломай текущую разметку и data-bs-* атрибуты.
```

Codex должен подобрать подходящий класс, например:

```text
bsx-modal-scale
```

и применить его к существующей Bootstrap-разметке.

## Как использовать вручную

1. Найдите подходящий эффект в каталоге.
2. Подключите `assets/css/bootstrap5-transitions.css`.
3. Добавьте нужный `bsx-*` класс к Bootstrap-компоненту.
4. Для эффекта с `Requires JS: yes` подключите `assets/js/bootstrap5-transitions.js`.
5. Проверьте поведение, клавиатуру, ARIA и reduced motion.
6. При необходимости настройте CSS-переменные длительности и easing.

## CSS-переменные

Проект использует CSS-переменные для единых скоростей и easing:

```css
:root {
  --bsx-duration-sm: 140ms;
  --bsx-duration-md: 220ms;
  --bsx-duration-lg: 360ms;

  --bsx-ease-out: cubic-bezier(.16, 1, .3, 1);
  --bsx-ease-in-out: cubic-bezier(.65, 0, .35, 1);
}
```

Их можно переопределить в своём проекте:

```css
:root {
  --bsx-duration-md: 180ms;
}
```

## Reduced motion

Проект учитывает системную настройку уменьшения анимаций:

```css
@media (prefers-reduced-motion: reduce) {
  /* motion-safe fallback */
}
```

Если пользователь включил reduced motion, эффекты становятся минимальными и не мешают работе интерфейса.

## Структура проекта

```text
assets/
  css/
    bootstrap5-transitions.css
    core.css
    extended.css
  js/
    bootstrap5-transitions.js
    demo.js
    effects-data.js

snippets/
  core/
  extended/

references/
  catalog.md
  bootstrap5-rules.md
  usage-examples.md
  reduced-motion.md
  codex-usage.md

.agents/
  skills/
    bootstrap5-transitions/
      SKILL.md
```

## Когда использовать

Используйте этот проект, если нужно:

* быстро оживить Bootstrap-интерфейс;
* добавить feedback на действия пользователя;
* улучшить формы и валидацию;
* сделать аккуратные hover/focus/active-состояния;
* добавить skeleton/loading-состояния;
* привести UI-анимации к единому стилю;
* дать Codex готовый каталог transition-паттернов.

## Когда не подходит

Проект не заменяет полноценные animation-фреймворки.

Если нужна сложная timeline-анимация, canvas/WebGL, motion design уровня промо-сайта или сложная choreography-анимация между страницами, лучше использовать специализированные инструменты.
