# MTs Sunan Drajat Website

Website Mts Sunan Drajat  - Teladan Jayamahe

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome 6
- **Images**: Unsplash

## Features

- ✅ Responsive Design
- ✅ Modern UI/UX
- ✅ SEO Optimized
- ✅ Fast Performance
- ✅ Accessible
- ✅ Interactive Components
- ✅ Auto-rotating Carousels
- ✅ Smooth Animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── HeroSection.tsx     # Hero section with search
│   ├── AnnouncementSection.tsx  # Announcements & carousel
│   ├── NewsSection.tsx     # Latest news
│   ├── AchievementSection.tsx   # Student achievements
│   ├── ExtracurricularSection.tsx  # Extracurricular activities
│   ├── TeacherSection.tsx  # Teachers & staff
│   ├── AlumniSection.tsx   # Alumni profiles
│   └── Footer.tsx          # Footer with contact info
├── public/
│   ├── logo_putih.png      # White logo
│   ├── logo_biru.png       # Blue logo
│   ├── favicon.png         # Favicon
│   └── id.png              # Indonesian flag icon
└── README.md
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#1e40af',
    dark: '#1e3a8a',
    light: '#3b82f6',
  },
  secondary: {
    DEFAULT: '#059669',
    dark: '#047857',
    light: '#10b981',
  },
}
```

### Fonts

The website uses:
- Poppins (headings)
- Open Sans (body text)
- Roboto Condensed (special text)

## License

© 2025 SMA Negeri 1 Yogyakarta. All rights reserved.

Developed by ICT Teladan
