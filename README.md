# Zyvane Technologies — Official Website

> **Engineering Intelligence. Delivering Scale.**

The official website for [Zyvane Technologies](https://zyvane.com) — a premium AI software engineering firm building enterprise-grade systems for ambitious organizations.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| UI Primitives | shadcn/ui |
| Icons | Lucide React |
| Deployment | Docker / Vercel |

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── blog/
│   ├── careers/
│   ├── contact/
│   ├── portfolio/
│   ├── pricing/
│   ├── services/
│   │   ├── ai-engineering/
│   │   ├── custom-software/
│   │   ├── devops/
│   │   ├── erp/
│   │   ├── healthcare/
│   │   └── workflow-automation/
│   └── layout.tsx
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, Services, etc.)
│   ├── seo/                # JSON-LD, metadata helpers
│   └── ui/                 # shadcn/ui + custom components
└── lib/                    # Utility functions
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
http://localhost:3000
```

---

## 🐳 Docker Deployment (Self-Hosted)

```bash
# Build and run with Docker Compose
docker compose up -d --build

# App runs on port 3000
```

Refer to `nginx.conf.example` for setting up a reverse proxy with SSL.

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your production domain | Yes |
| `RESEND_API_KEY` | Email API for contact form | Optional |
| `CONTACT_FORM_TO_EMAIL` | Email where form submissions go | Optional |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID | Optional |

---

## 📬 Contact

**Zyvane Technologies**  
Email: [contact@zyvanetechnologies.com](mailto:contact@zyvanetechnologies.com)  
Website: [zyvanetechnologies.com](https://www.zyvanetechnologies.com)

---

*Built with precision. Owned entirely by you.*
