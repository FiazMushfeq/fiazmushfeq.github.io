# Personal Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, skills, and projects.

## Credits

This project was initially created using [Lovable.dev](https://lovable.dev), an AI-powered web development platform that helped generate the initial codebase and design.

## Image Disclaimer

⚠️ **Important Notice**: I do not own the rights to any of the background images or visual assets used in this portfolio. These images are used for demonstration purposes only. If you are the copyright owner of any image used in this project and would like it removed, please contact me.

## Technologies Used

- **Vite** – Fast build tool and development server
- **TypeScript** – Type-safe JavaScript
- **React** – UI library
- **shadcn/ui** – Modern UI components
- **Tailwind CSS** – Utility-first CSS framework
- **Lucide React** – Beautiful icons

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed:  
[Install Node.js with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```bash
git clone <YOUR_GIT_URL>
cd personal-website
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

1. **Manual Deployment**

   ```bash
   npm run deploy
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── sections/       # Page sections (Hero, Certifications, Education, Projects, Experience, Skills, Hobbies)
│   └── ui/             # Reusable UI components
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Page components
```

## Features

- 🎨 Modern, responsive design
- 🌙 Professional dark theme
- 📱 Mobile-first approach
- ⚡ Fast loading with Vite
- 🎯 SEO optimized
- 🚀 GitHub Pages deployment ready
- 💫 Smooth animations and transitions

## Recent Changes

- **Projects section** now appears above Experience
- **Navigation** order updated to reflect Projects before Experience
- **Education section** lists relevant coursework under Rutgers University
- **Contact button** in Hero section uses a mailto link
- General content and structure cleanup

## Development Notes

- Uses HashRouter for GitHub Pages compatibility
- Configured with proper base path for deployment
- Includes 404 handling for SPA routing
- Optimized build process with automatic deployment

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

**Email:** [fiazmushfeq01@gmail.com](mailto:fiazmushfeq01@gmail.com)
