# Patricia Valentine — Vibrant Data Analytics Portfolio

This is a React + Vite portfolio starter customized for Patricia Valentine. It includes a blue-first visual system, light/dark mode, animated responsive sections, project filters, interactive charts, resume access gate, recommendations, blog links, and professional contact buttons.

## 1. Install and run

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## 2. Recommended GitHub repository name

Use this repository name:

```txt
patriciavalentine.github.io
```

That creates a clean GitHub Pages user site URL:

```txt
https://patriciavalentine.github.io/
```

The current `vite.config.js` uses `base: "./"`, so it can also work if you later choose a project repo instead.

## 3. Edit your brand details

Update:

```txt
src/data/profile.js
```

Useful fields:

```js
name: "Patricia Valentine"
role: "The Analyst"
professionalTitle: "Business Intelligence Analyst"
tagline: "..."
intro: "..."
```

`role` appears in the navbar/footer. `professionalTitle` appears in the hero, about, resume, and contact areas.

## 4. Add your real photos

Place your real photos inside:

```txt
public/images/profile/
```

Then update this area in `src/data/profile.js`:

```js
photos: {
  hero: "images/profile/your-hero-photo.jpg",
  about: "images/profile/your-about-photo.jpg",
  contact: "images/profile/your-contact-photo.jpg"
}
```

Recommended image style:

- Portrait photos work best.
- Compress images before publishing.
- Suggested size: 900px wide or smaller.
- Use clear names like `patricia-hero.jpg`, `patricia-about.jpg`, and `patricia-contact.jpg`.

## 5. Resume access gate

The resume section currently uses:

```txt
public/resume-placeholder.html
```

To use your real resume:

1. Add your file here:

```txt
public/resume.pdf
```

2. Open:

```txt
src/data/profile.js
```

3. Change:

```js
file: "resume-placeholder.html"
```

to:

```js
file: "resume.pdf"
```

### Tracking who viewed the resume

Because GitHub Pages is static hosting, it cannot securely collect or store emails by itself. The portfolio has a front-end resume gate, and it can send viewer details to Formspree or another form backend.

In `src/data/profile.js`, add your Formspree endpoint:

```js
resume: {
  file: "resume.pdf",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  note: "..."
}
```

Important: no static website can truly prevent downloading or screenshots once a resume is displayed in the browser. For true private access, use a proper backend, authentication, or a document-sharing platform with access controls.

## 6. WhatsApp contact button

The site does not expose your WhatsApp number by default. It shows a “Request WhatsApp Chat” email button.

To add direct WhatsApp chat, open `src/data/profile.js` and set:

```js
whatsappNumber: "254700000000"
```

Use international format without `+`, spaces, or dashes.

Important: a WhatsApp direct link requires your number in the link, so it will be visible in the site code.

## 7. Recommendations

Edit recommendations here:

```txt
src/data/recommendations.js
```

The current recommendations are placeholders. Replace them with real recommendations from LinkedIn, clients, instructors, mentors, or teammates.

## 8. Blog links

Edit blog cards here:

```txt
src/data/blogs.js
```

Each card currently links to the original Wix blog area. When you have exact article URLs, replace each `link` field with the exact article link.

## 9. Projects

Edit projects here:

```txt
src/data/projects.js
```

Replace temporary project images inside:

```txt
public/images/projects/
```

## 10. Tool icons

Tool icons are powered by `react-icons`. The tool badges are rendered in:

```txt
src/components/ToolIcon.jsx
```

To change an icon, update the `iconMap` object in that file.

## 11. Deploy to GitHub Pages

1. Create a repository named `patriciavalentine.github.io`.
2. Push this project to GitHub.
3. Go to repository **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to the `main` branch.
6. The workflow in `.github/workflows/deploy.yml` will build and publish the site.

## 12. Good temporary image sources

- unDraw: clean SVG illustrations
- Storyset: colorful customizable illustrations
- Pexels: stock photos
- Unsplash: stock photos
- SVG Repo: icons
- LottieFiles: lightweight animations

Always check asset licenses before publishing.
