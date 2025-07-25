# Personal Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, skills, and projects.

## Credits

This project was initially created using [Lovable.dev](https://lovable.dev), an AI-powered web development platform that helped generate the initial codebase and design.

## Image Disclaimer

⚠️ **Important Notice**: I do not own the rights to any of the background images or visual assets used in this portfolio. These images are used for demonstration purposes only. If you are the copyright owner of any image used in this project and would like it removed, please contact me.

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Modern UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed:

- [Install Node.js with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd personal-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**:

   - Push changes to the main branch
   - GitHub Actions will automatically build and deploy
   - Site will be available at: `https://yourusername.github.io/personal-website/`

2. **Manual Deployment**:

   ```bash
   npm run deploy
   ```

3. **Setup GitHub Pages**:
   - Go to repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder
   - Save settings

### Custom Domain (Optional)

To use a custom domain:

1. Go to repository Settings → Pages
2. Enter your domain under "Custom domain"
3. Add a CNAME record in your DNS settings pointing to `yourusername.github.io`

## Project Structure

```
src/
├── components/          # React components
│   ├── sections/       # Page sections
│   └── ui/            # Reusable UI components
├── assets/            # Images and static assets
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── pages/             # Page components
```

## Features

- 🎨 Modern, responsive design
- 🌙 Professional dark theme
- 📱 Mobile-first approach
- ⚡ Fast loading with Vite
- 🎯 SEO optimized
- 🚀 GitHub Pages deployment ready
- 💫 Smooth animations and transitions

## Development Notes

- Uses HashRouter for GitHub Pages compatibility
- Configured with proper base path for deployment
- Includes 404 handling for SPA routing
- Optimized build process with automatic deployment

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!
