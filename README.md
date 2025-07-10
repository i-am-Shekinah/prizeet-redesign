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

- **Header:** restructured the nav items to showcase the active page, and also make the nav items more interactive and user-friendly. The 'Become a vendor' tab was made into a CTA button to draw user attention while following modern best practices.

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

- 🔗 Live Demo: [`vercel-deployment-link`](https://prizeet-redesign.vercel.app/)

## 👨‍💻 Author

**Michael Olatunji Oluwayemi**
[GitHub](https://github.com/i-am-Shekinah) · [LinkedIn](https://www.linkedin.com/in/michael-olatunji-75347b247/)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
You are free to use, copy, modify, and distribute this project for personal or commercial purposes with attribution.
