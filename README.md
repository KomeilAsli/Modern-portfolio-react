# Modern Portfolio React

A modern, responsive portfolio website built with **React** and **Vite**.

## Features

- Modern React + Vite setup
- Fully responsive layout
- Mobile hamburger navigation
- Light/dark theme toggle
- Project filtering functionality
- Contact form UI with submit feedback
- Copy-email interaction
- Reusable component structure
- Centralized content data file
- Smooth scrolling navigation
- Clean CSS architecture with custom properties
- GitHub-ready documentation

## Tech Stack

- React
- Vite
- JavaScript
- HTML5
- CSS3
- ESLint

## Project Structure

```txt
modern-portfolio-react
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Process.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── data
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Sections

### Hero

The opening section introduces the portfolio with a creative headline, short description, CTA buttons, and a visual profile card.

### Services

A three-card section for presenting design, frontend, and brand/UI capabilities. The current content uses Lorem Ipsum placeholders so the project can stay generic and reusable.

### Projects

A selected concepts section with project cards, short labels, tags, and a filter interaction. The cards use creative placeholder names instead of real project names.

### Skills

A compact skill cloud showing the main tools and areas used in the project.

### Process

A simple workflow section with four steps: Plan, Design, Build, and Refine.

### About

A short personal-style section for describing the portfolio owner in a professional way.

### Contact

A contact section with:

- Name field
- Email field
- Message field
- Submit feedback
- Copy email button
- Social links

The form is currently frontend-only. To make it send real messages, connect it to a service such as EmailJS, Formspree, Netlify Forms, or a custom backend API.

## Getting Started

### 1. Install Node.js

Install the LTS version of Node.js from the official Node.js website.

Check your installation:

```bash
node -v
npm -v
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal. It is usually:

```txt
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## Customization Guide

### Change personal information

Edit this file:

```txt
src/data/portfolioData.js
```

Update:

```js
export const profile = {
  name: 'Komeil Asli',
  initials: 'KA',
  role: 'UX/UI Designer & Frontend Developer',
  location: 'Sweden',
  email: 'hello@example.com',
}
```

### Change social links

In the same file, update:

```js
socials: [
  { label: 'GitHub', href: 'https://github.com/KomeilAsli' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/komeilasli/' },
  { label: 'Website', href: 'https://komeilasli.se' },
]
```

### Change project cards

Edit the `projects` array in:

```txt
src/data/portfolioData.js
```

Each project uses this structure:

```js
{
  title: 'Creative Grid',
  category: 'UI Concept',
  description: 'Lorem ipsum...',
  stack: ['React', 'CSS', 'UI'],
  highlight: 'Visual layout',
  type: 'Design',
  link: '#',
}
```

The `type` value controls the filter. Current options are:

```txt
Design
Frontend
```

### Change colors

Edit CSS variables at the top of:

```txt
src/styles.css
```

Example:

```css
:root {
  --accent: #7c3aed;
  --accent-two: #06b6d4;
}
```

### Connect the contact form

The contact form is currently a frontend demo. To make it send real messages, update the `handleSubmit` function in:

```txt
src/components/Contact.jsx
```

Suggested options:

- EmailJS
- Formspree
- Netlify Forms
- Custom Node/Express API
- Serverless function

## Available Scripts

### Development

```bash
npm run dev
```

Starts the local development server.

### Production build

```bash
npm run build
```

Creates a production-ready `dist` folder.

### Preview build

```bash
npm run preview
```

Runs a local preview of the production build.

### Lint

```bash
npm run lint
```

Checks the code with ESLint.

## GitHub Upload Steps

Create a new GitHub repository named:

```txt
modern-portfolio-react
```

Then run:

```bash
git init
git add .
git commit -m "Initial commit: modern React portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/modern-portfolio-react.git
git push -u origin main
```

## Deployment Options

Good free deployment options:

- Vercel
- Netlify
- GitHub Pages

For Vercel or Netlify, the usual settings are:

```txt
Build command: npm run build
Output folder: dist
```

## Notes

This project is intentionally built with a clean, simple stack so it is easy to read, run, edit, and publish. The focus is on showing practical frontend structure, responsive design, and professional presentation for a public GitHub portfolio.

## Author

**Komeil Asli**

UX/UI Designer & Web Developer
