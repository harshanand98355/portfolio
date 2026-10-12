# Beginner customization guide

## Personal details
Open `js/config.js`. Update `name`, `email`, `location`, `focus`, `roles`, and the social profile URLs. These values are reused across the page.

## Photos
The starter uses a local SVG placeholder. Add your portrait to `assets/images/profile/`, then update the image `src` values in `index.html`. Use a clear image, crop it intentionally, and compress large files. The hero portrait uses `object-fit: cover`.

## Projects
Edit the `projects` array in `js/projects.js`. Each object supports `name`, `type`, `description`, `tags`, `mark`, `image`, `repo`, and `demo`. Valid types are `Websites`, `Applications`, and `Experiments`. Use real links before publishing.

## Skills
Edit the `skills` array in `js/skills.js`. Category values are `Frontend`, `Languages`, `Tools`, and `Backend`. Levels are illustrative percentage bars; use honest values or remove them.

## Resume
Put your PDF in `assets/resume/` and change the download link in `index.html` to that file.

## Timeline and services
Edit the matching HTML sections in `index.html`. Do not publish invented education, employment, client work, or statistics.

## Contact
The form opens an email draft to the configured email. It is not a backend submission service.
