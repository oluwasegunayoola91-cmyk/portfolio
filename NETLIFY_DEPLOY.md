# Deploying Francis Oluwasegun's Portfolio to Netlify

This project is configured for seamless, zero-config deployment on [Netlify](https://www.netlify.com/).

---

## 🚀 Quick Deployment Options

### Option 1: Git Integration (Recommended)
1. Push your project code to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log into your [Netlify Dashboard](https://app.netlify.com/).
3. Click **"Add new site"** → **"Import an existing project"**.
4. Select your repository.
5. Netlify will **automatically detect** the included `netlify.toml` file with:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `20`
6. Click **"Deploy site"**.

---

### Option 2: Netlify CLI
If you prefer terminal deployment:

```bash
# 1. Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# 2. Build the production bundle
npm run build

# 3. Deploy directly to Netlify
netlify deploy --prod --dir=dist
```

---

### Option 3: Netlify Drop (Manual Drag-and-Drop)
1. Run `npm run build` locally in your terminal.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the browser window.

---

## ⚙️ Included Netlify Configurations

- **`netlify.toml`**: Configures the build command, static publish directory (`dist`), Node.js runtime, security headers (`X-Frame-Options`, `X-Content-Type-Options`), and cache-control rules.
- **`public/_redirects`**: Ensures single-page application (SPA) routing routes all paths (`/* -> /index.html 200`) without 404 errors on page reloads or deep links.
- **Netlify Forms Integration**: The project inquiry form in the Contact section is wired with `data-netlify="true"`, honeypot spam protection (`bot-field`), and an automatic AJAX POST handler. Submissions will automatically appear in your Netlify dashboard under **Site Configuration > Forms**.
