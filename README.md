# Prasanth Sekar — Portfolio (Netflix-Style)

## 📁 Project Structure

```
portfolio/
├── index.html              → Login + Dashboard (main entry point)
├── detail.html              → Netflix-style detail page for each project/experience/cert
├── css/
│   ├── style.css            → Styles for index.html
│   └── detail.css           → Styles for detail.html
├── js/
│   ├── main.js               → Login flow, dashboard logic, card navigation
│   └── detail.js             → Detail page rendering, PDF viewer, "More Like This"
├── assets/
│   └── prasanth.jpg          → Profile photo used throughout the site
└── certificates/
    ├── Programming_In_Java.pdf
    ├── MongoDB_Certificate.pdf
    ├── MERN_FullStack_Certificate.pdf
    ├── Java_Internship_Certificate.pdf
    ├── Mobile_App_Internship_Certificate.pdf
    └── Experience_Certificate_DiacriTech.pdf
```

## 🚀 How to Run

1. Keep **all files and folders together** exactly as structured above — nothing can be moved individually.
2. Open `index.html` in any web browser (double-click it, or right-click → Open with → Browser).
3. No server, build step, or internet connection required (except for the Google Fonts link, which is optional — the site still works offline, just with a fallback font).

## 🔑 Login Credentials

| Field    | Value                  |
|----------|------------------------|
| Email    | `guest@prasanth.dev`   |
| Password | `portfolio2025`        |

Or click **"Continue as Guest"** to skip straight to the profile picker.

## 🎬 How Navigation Works

- **Splash → Login → Profile Picker → Dashboard** on first visit.
- Clicking any **project, experience, or certification card** opens `detail.html?id=...` with a full Netflix-style detail page (hero banner, key highlights, tags, "More Like This," and certificate PDF viewer where applicable).
- Clicking **Back** on the detail page returns straight to the **Dashboard** — not the login screen — because the app passes a `?home=1` flag back to `index.html`.
- Clicking **Sign Out** on the dashboard fully resets the session; the next visit starts fresh with the splash screen and login.

## 📄 Certificates

All 6 real certificate PDFs are included in the `certificates/` folder and linked directly — no need to re-upload or re-link them. Clicking **"View PDF"** on any certification or experience card opens the actual document in a built-in viewer with a download option.

## 🌐 Publishing Online (Optional)

To publish this as a live website:

1. **Netlify** (easiest): go to [netlify.com](https://netlify.com) → drag the entire `portfolio` folder onto the dashboard → get a live link instantly.
2. **GitHub Pages**: create a repo named `yourusername.github.io`, upload all files/folders preserving structure, enable Pages in Settings.
3. **Vercel**: `vercel deploy` from inside the project folder, or drag-and-drop via the web dashboard.

In all cases, keep the folder structure exactly as-is — relative paths depend on it.

---
*Built for Prasanth Sekar · prasanthsekar3794@gmail.com · Chennai, India*
