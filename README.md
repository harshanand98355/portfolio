# Neon Developer Universe Portfolio

A responsive personal portfolio built with HTML5, CSS3, and vanilla JavaScript ES modules. No frontend framework or build step is required.

## Run locally
Because the JavaScript uses ES modules, run the project through a local HTTP server rather than opening `index.html` with `file://`.

**VS Code:** install the Live Server extension, right-click `index.html`, then choose **Open with Live Server**.

**Python:** from this directory run `python -m http.server 8000`, then visit `http://localhost:8000`.

## Customize
1. Edit `js/config.js` and set your name, email, location, focus, role strings, GitHub, and LinkedIn.
2. Replace `assets/images/profile/profile-placeholder.svg` with your own portrait file, or update the image `src` paths in `index.html`.
3. Replace the example project data in `js/projects.js` with real project descriptions, screenshots, repositories, and demos.
4. Edit the skill list and example levels in `js/skills.js`. Levels are illustrative, not measured.
5. Replace the timeline text in `index.html` with real education and experience.
6. Replace the resume placeholder with your PDF and update its download link.
7. Update the social URLs in `js/config.js`.

## Contact form
The contact form validates fields and prepares a `mailto:` draft. It does not send mail directly. For reliable form delivery, integrate a backend or a form provider such as Formspree. Never put secret API keys in frontend JavaScript.

## Deploy to GitHub Pages
1. Create a GitHub repository and push the contents of this folder.
2. In repository **Settings → Pages**, select deployment from the `main` branch and `/ (root)`.
3. Save and wait for the published URL.
4. Keep asset paths relative so the project works under a repository subpath.
5. Test all links and images on the deployed URL.

## Notes
- Example projects, skills, stats, and journey entries are placeholders. Replace them before publishing.
- Google Fonts are optional; system fallbacks are provided.
- Check accessibility and browser behavior on real devices before relying on the site professionally.
