# Frontend Mentor - Interactive Card Details Form Solution

This is my solution to the **Interactive Card Details Form** challenge on Frontend Mentor. I built a responsive form with React, Tailwind CSS, and Motion. As users enter their details, the front and back of the card update in real time.

---

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Design](#design)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

---

## Overview

The page contains a form for the cardholder name, card number, expiration date, and CVC. The card preview updates as each field changes, and the card number is formatted into groups of four digits.

The form displays error messages for empty or invalid fields. After a valid submission, it shows a confirmation message and a **Continue** button that returns to the form. Subtle entrance animations are handled by Motion and respect the user's reduced-motion preference.

**Current implementation:** this is a frontend demonstration. It does not process payments, send card information to a server, or store submitted details.

---

## The challenge

Users should be able to:

- View a responsive layout on mobile and desktop screens.
- Enter card details and see the card preview update in real time.
- See validation messages and error borders when fields are invalid.
- Submit a valid form and view a confirmation message.
- Return to the form using the **Continue** button.
- See a gradient border when focusing on a valid input.

---

## Design

The images below are the supplied design references, not screenshots of the finished implementation.

### Desktop design

<img src="./design/desktop-design.jpg" alt="Desktop design reference" width="700">

### Active states

<img src="./design/active-states.jpg" alt="Input active states reference" width="700">

### Completed states

<img src="./design/complete-state-desktop.jpg" alt="Desktop completed state reference" width="700">

### Mobile design

<img src="./design/mobile-design.jpg" alt="Mobile design reference" width="250">

<img src="./design/complete-state-mobile.jpg" alt="Mobile completed state reference" width="250">

---

## Links

- Live project: [Interactive Card Form](https://mlopezl.github.io/interactive-card-form-info/)

- Repository: [Interactive Card Form on GitHub](https://github.com/mlopezl/interactive-card-form-info)

---

## My process

I split the interface into card and form components. The main application holds the form values in React state and passes them to both the inputs and the card preview.

The form uses controlled inputs. It formats the card number as the user types and checks the required values before showing the confirmation message. Error states control the validation messages and input borders.

I used Tailwind CSS for the responsive layout and custom colors. A CSS gradient creates the focused input border. Motion adds a short entrance animation to the form and confirmation message while respecting reduced-motion settings.

### Run locally

Start the development server:

```bash
pnpm run dev
```

Open the local URL printed by Vite.

### Validate and build

```bash
pnpm run lint
pnpm run build
```

Vite generates the production files in `docs`. To preview the production build locally:

```bash
pnpm run preview
```

---

## Built with

- React
- JavaScript and JSX
- Tailwind CSS v4
- CSS custom properties and gradients
- Motion for React
- Vite
- PNPM
- ESLint
- GitHub Pages

---

## What I learned

- Managing controlled form inputs with React state.
- Passing values between the form and a live card preview.
- Formatting input while the user types.
- Validating required fields and displaying field-specific errors.
- Using conditional rendering for the form and confirmation message.
- Creating a gradient input border with layered CSS backgrounds.
- Adding subtle animations that respect reduced-motion preferences.
- Building responsive layouts with Tailwind CSS.
- Configuring Vite to publish a built project from the `docs` directory on GitHub Pages.