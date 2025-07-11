# No longer using Lovable

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/3a685498-6f59-41fa-aaab-69789ed23c29

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3a685498-6f59-41fa-aaab-69789ed23c29) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Here's how to set it up:

1. **Enable GitHub Pages**:

   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch and "/ (root)" folder
   - Click "Save"

2. **Automatic Deployment**:

   - The GitHub Actions workflow will automatically deploy when you push to the main branch
   - Your site will be available at: `https://yourusername.github.io/personal-website/`

3. **Manual Deployment**:
   ```bash
   npm run deploy
   ```

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Can I connect a custom domain to my GitHub Pages site?

Yes, you can!

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Custom domain", enter your domain name
4. Click "Save"
5. Add a CNAME record in your domain's DNS settings pointing to `yourusername.github.io`

## Migration from Lovable

This project has been migrated from Lovable to GitHub Pages. The following changes were made:

- Updated Vite configuration for GitHub Pages base path
- Changed from BrowserRouter to HashRouter for better GitHub Pages compatibility
- Added GitHub Actions workflow for automatic deployment
- Added 404.html and SPA routing scripts for proper navigation

---

Absolutely! Here’s a step-by-step guide to **build and deploy your Vite React site to the root of your GitHub Pages**:

---

## 1. Build Your Project

Open your terminal in your project directory and run:

```sh
npm run build
```

This will generate a `dist/` folder containing your production-ready site.

---

## 2. Deploy to GitHub Pages

You already have the `gh-pages` package installed and a deploy script in your `package.json`:

```json
<code_block_to_apply_changes_from>
```

To deploy, simply run:

```sh
npm run deploy
```

This will:

- Build your project (again, just to be sure)
- Push the contents of `dist/` to the `gh-pages` branch of your repository

---

## 3. Configure GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** in the sidebar.
3. Under **Source**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
4. Click **Save**.

---

## 4. Wait for Deployment

- It may take a minute or two for GitHub Pages to update.
- Visit: [https://fiazmushfeq.github.io/](https://fiazmushfeq.github.io/)

---

## 5. (Optional) Clean Up

- If you previously had a `404.html` or `CNAME` file for a subfolder, you can remove or update them as needed.

---

### **Summary Table**

| Step | Command/Action                     | Purpose                |
| ---- | ---------------------------------- | ---------------------- |
| 1    | `npm run build`                    | Build production files |
| 2    | `npm run deploy`                   | Deploy to GitHub Pages |
| 3    | Set Pages source to `gh-pages`/`/` | Serve from root        |
| 4    | Visit your site                    | Check deployment       |

---

If you want, I can run the build and deploy commands for you right now. Would you like me to proceed?
