# 🏆 Prizeet Landing Page Redesign

Redesign of the [Prizeet](https://www.prizeet.com) landing page with a focus on clean UI/UX, responsiveness, accessibility, and developer best practices.

> 🌟 Assignment: Reimagine the current layout, improve visual design, and implement one complete version using static data.

## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (minimal usage for layout and buttons)
- **Testing**: [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/)
- **Deployment**: [Vercel](https://vercel.com/) (optional)
- **Linting/Formatting**: ESLint, Prettier

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/i-am-Shekinah/prizeet-redesign.git
cd prizeet-redesign
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser at `http://localhost:3000`

## ✅ How to Run Tests

```bash
npm run test
```

> Unit/integration tests are located in `src/tests/`

## 📱 Responsiveness

- Fully mobile-friendly
- Supports tablets and desktop layouts
- Designed with mobile-first principles

## ✨ Key Features

- Redesigned hero, features, and CTA sections
- Clear visual hierarchy and layout improvements
- Accessible navigation and ARIA labels
- Static content placeholders for scalability
- Modern animations (Framer Motion)
- Component-based architecture

## 🧠 Design Decisions

### 🧭 Navigation (Header)

- Redesigned for better interactivity and visual clarity.
- "Become a Vendor" now appears as a prominent call-to-action (CTA) button to boost user engagement.
- Restructured the nav items to highlight the active page.

### 🖼️ Hero Section

- Introduced a hero image to establish immediate visual interest and emotional connection.

### 📦 What we offer

- Adjusted the color palette for consistency with the site’s theme.
- Fixed a discrepancy in the number of steps presented for clearer communication.

### Tailored Experiences

- Restructured layout for a more intuitive flow for users
- Utilized cards for each experience to make it easier for users to consume information

### ❓ FAQs

- Enhanced visual hierarchy by vertically centering content.
- Improves readability and overall polish for a more accessible layout.
- Reduces cognitive fatigue

### Back to Top Component

- Helps users quickly return to the top without manually scrolling, especially useful on content-heavy or infinite scroll pages.
- Assists users with limited mobility or on touch devices, making navigation smoother and more user-friendly.
- Improve overall user experience on really long pages

## 📁 Folder Structure

```
src/
├── app/              ← main entry page
├── components/       ← UI sections (Hero, Header, etc.)
├── tests/            ← unit/integration tests
├── styles/           ← Tailwind config & globals
├── lib/              ← helpers/utilities
```

## 📷 Deliverables

- 🔗 Live Demo: [`vercel-deployment-link`](https://prizeet-redesignio.vercel.app/)

## 👨‍💻 Author

**Michael Olatunji Oluwayemi**
[GitHub](https://github.com/i-am-Shekinah) · [LinkedIn](https://www.linkedin.com/in/michael-olatunji-75347b247/)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
You are free to use, copy, modify, and distribute this project for personal or commercial purposes with attribution.
