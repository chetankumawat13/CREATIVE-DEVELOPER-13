# 🎨 Creative Developer Portfolio

A modern **Creative Developer** portfolio built with **React** and **SCSS**, focused on strong visual identity, clean code, and immersive UI layouts.

This project showcases a bold hero section, responsive navigation, and a dynamic grid-based background combined with sticker-style visuals to create a unique creative experience.

---

## 🚀 Live Preview
`https://creative-developer-13.onrender.com`

---

## 🧠 Concept

This portfolio is designed to reflect the mindset of a **creative frontend developer** —  
where **design meets code**, and **interaction matters**.

Key highlights:
- Large typography hero section
- Grid-based background system
- Sticker-style visual elements
- Clean, minimal dark UI
- Fully responsive layout

---

## 🛠 Tech Stack

- **React.js**
- **SCSS (Sass)**
- **CSS Grid & Flexbox**
- **Responsive Design**
- **JavaScript (ES6+)**

---

## 📁 Project Structure

src/
│── components/
│ ├── Navbar.jsx
│ └── Hero.jsx
│
│── style/
│ └── style.scss
│
│── App.jsx
│── main.jsx


---

## ✨ Features

### 🔹 Navbar
- Minimal branding
- Desktop navigation links
- Mobile-friendly hamburger menu (UI ready)

### 🔹 Hero Section
- Bold **CREATIVE DEVELOPER** heading
- Clear personal description
- Dynamic grid background generated via JavaScript
- Sticker-style floating elements
- Strong visual hierarchy

### 🔹 Responsive Design
- Desktop
- Tablet
- Mobile optimized
- Adaptive typography & layout

---

## 📐 Grid Logic

The grid background is dynamically generated using JavaScript by calculating:
- Number of rows
- Number of columns  
based on container size and block dimensions.

```js
const cols = Math.floor(board.clientWidth / blockSize);
const rows = Math.floor(board.clientHeight / blockSize);

npm install
npm run dev
