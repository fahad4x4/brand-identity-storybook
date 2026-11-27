# 🎨 Brand Identity Storybook

> An interactive Storybook for a brand identity and UI style guide: colors, typography, and a button component, with English and Arabic (RTL) samples.

![Storybook](https://img.shields.io/badge/Storybook-8-FF4785?logo=storybook&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

**[English](#english) | [العربية](#arabic)**

---

<a id="english"></a>

## English

### Overview

This project documents a brand's visual identity as live, interactive Storybook pages. The design tokens (colors, spacing, corner radius, and type sizes) are defined once as CSS custom properties in `src/styles/globals.css`, and every story reads from them, so the style guide always reflects the real values.

It runs on **Storybook 8** with the **`@storybook/react-vite`** framework (React 18 + Vite 5).

### Features

- **Colors**: a palette of 12 swatches (primary, primary dark/light, background, surface, text, border, and the success / warning / error / info states), each labeled with its CSS token.
- **Typography**: the type scale (H1, H2, H3, Body, Caption), each shown in English and in Arabic (right-to-left).
- **Button**: a component with `primary` and `secondary` variants, a disabled state, and an Arabic label example, adjustable from the Controls panel.
- **Design tokens** in one place: colors, spacing (`--space-1` to `--space-8`), radius (card, button, input, badge, thumbnail), and type sizes.
- **Arabic-ready fonts**: Inter, Cairo, and Tajawal, loaded from Google Fonts.
- **Viewport presets**: Mobile (375×667), Tablet (768×1024), and Desktop (1440×900).
- **Accessibility checks** through `@storybook/addon-a11y`.
- **Auto-generated docs pages** for stories tagged `autodocs`, through `@storybook/addon-essentials`.

### Requirements

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/fahad4x4/brand-identity-storybook.git
cd brand-identity-storybook
npm install
```

### Usage

Start Storybook in development mode:

```bash
npm run storybook
```

Then open <http://localhost:6006>.

Build a static version of the style guide:

```bash
npm run build-storybook
```

The output is written to `storybook-static/` (ignored by git), which you can host on any static web server.

#### Stories

| Story | Path in Storybook | File |
|-------|-------------------|------|
| Colors | Brand → Colors → Palette | `src/stories/Colors.stories.jsx` |
| Typography | Brand → Typography → Scale | `src/stories/Typography.stories.jsx` |
| Button | Components → Button (Primary, Secondary, Arabic, Disabled) | `src/stories/Button.stories.jsx` |

To change a brand value, edit its token in `src/styles/globals.css`; every story picks it up. New stories are found automatically by the pattern `src/**/*.stories.@(js|jsx)`.

### Project structure

```
brand-identity-storybook/
├── .storybook/
│   ├── main.js              ← Storybook config (stories, addons, react-vite framework)
│   └── preview.jsx          ← global CSS, viewport presets, page decorator
├── src/
│   ├── stories/
│   │   ├── Button.stories.jsx
│   │   ├── Colors.stories.jsx
│   │   └── Typography.stories.jsx
│   └── styles/
│       └── globals.css      ← design tokens and base styles
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### License

Released under the [MIT License](LICENSE). Copyright © 2026 Fahad ALGhathbar (فهد الغثبر).

### Author

**Fahad ALGhathbar**: [@fahad4x4](https://github.com/fahad4x4)

---

<a id="arabic"></a>

<div dir="rtl">

## العربية

### نظرة عامة

يوثّق هذا المشروع الهوية البصرية لعلامة تجارية في صورة صفحات تفاعلية حيّة على Storybook. تُعرَّف عناصر التصميم الأساسية (Design Tokens)، وهي الألوان والمسافات وانحناء الزوايا وأحجام الخطوط، مرة واحدة كمتغيرات CSS في الملف `src/styles/globals.css`، وتقرأ منها جميع القصص، فيعكس دليل الهوية القيم الفعلية دائمًا.

يعمل المشروع على **Storybook 8** بإطار **`@storybook/react-vite`** (React 18 مع Vite 5).

### المزايا

- **الألوان**: لوحة من 12 لونًا (الأساسي، والأساسي الداكن والفاتح، والخلفية، والسطح، وألوان النص، والحدود، وحالات النجاح والتحذير والخطأ والمعلومات)، ولكل لون اسم متغيّره في CSS.
- **الطباعة**: سلّم أحجام الخطوط (H1 وH2 وH3 والنص الأساسي والتعليق)، ويُعرض كل حجم بالإنجليزية وبالعربية من اليمين إلى اليسار.
- **الزر**: مكوّن بنمطين `primary` و`secondary`، وحالة التعطيل، ومثال بنص عربي، ويمكن تعديله من لوحة Controls.
- **عناصر التصميم في مكان واحد**: الألوان، والمسافات (من `--space-1` إلى `--space-8`)، وانحناء الزوايا (البطاقة، والزر، وحقل الإدخال، والشارة، والصورة المصغّرة)، وأحجام الخطوط.
- **خطوط تدعم العربية**: Inter وCairo وTajawal، تُحمَّل من Google Fonts.
- **مقاسات شاشات جاهزة**: جوال (375×667)، وجهاز لوحي (768×1024)، وسطح مكتب (1440×900).
- **فحص إمكانية الوصول** عبر الإضافة `@storybook/addon-a11y`.
- **صفحات توثيق تلقائية** للقصص الموسومة بـ `autodocs` عبر `@storybook/addon-essentials`.

### المتطلبات

- [Node.js](https://nodejs.org/) الإصدار 18 أو أحدث
- npm (يأتي مع Node.js)

### التثبيت

<div dir="ltr">

```bash
git clone https://github.com/fahad4x4/brand-identity-storybook.git
cd brand-identity-storybook
npm install
```

</div>

### الاستخدام

تشغيل Storybook في وضع التطوير:

<div dir="ltr">

```bash
npm run storybook
```

</div>

ثم افتح <http://localhost:6006>.

بناء نسخة ثابتة من دليل الهوية:

<div dir="ltr">

```bash
npm run build-storybook
```

</div>

تُحفظ المخرجات في المجلد `storybook-static/` (مستثنى من git)، ويمكن استضافتها على أي خادم ويب للملفات الثابتة.

#### القصص

| القصة | مكانها في Storybook | الملف |
|-------|---------------------|-------|
| الألوان | Brand ← Colors ← Palette | `src/stories/Colors.stories.jsx` |
| الطباعة | Brand ← Typography ← Scale | `src/stories/Typography.stories.jsx` |
| الزر | Components ← Button (Primary وSecondary وArabic وDisabled) | `src/stories/Button.stories.jsx` |

لتغيير أي قيمة في الهوية، عدّل متغيّرها في `src/styles/globals.css` فتنعكس على جميع القصص. وتُكتشف القصص الجديدة تلقائيًا وفق النمط `src/**/*.stories.@(js|jsx)`.

### هيكل المشروع

<div dir="ltr">

```
brand-identity-storybook/
├── .storybook/
│   ├── main.js              ← Storybook config (stories, addons, react-vite framework)
│   └── preview.jsx          ← global CSS, viewport presets, page decorator
├── src/
│   ├── stories/
│   │   ├── Button.stories.jsx
│   │   ├── Colors.stories.jsx
│   │   └── Typography.stories.jsx
│   └── styles/
│       └── globals.css      ← design tokens and base styles
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

</div>

- `.storybook/main.js`: إعدادات Storybook (مسارات القصص، والإضافات، وإطار react-vite).
- `.storybook/preview.jsx`: تحميل ملف CSS العام، ومقاسات الشاشات، وإطار الصفحة.
- `src/stories/`: قصص الألوان والطباعة والزر.
- `src/styles/globals.css`: عناصر التصميم والأنماط الأساسية.

### الرخصة

المشروع منشور برخصة [MIT](LICENSE). حقوق النشر © 2026 فهد الغثبر (Fahad ALGhathbar).

### المؤلف

**فهد الغثبر (Fahad ALGhathbar)**: [@fahad4x4](https://github.com/fahad4x4)

</div>
