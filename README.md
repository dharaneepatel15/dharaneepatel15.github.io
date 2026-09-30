# Dharanee Patel: Portfolio

Personal portfolio website, hosted free on GitHub Pages.
Live at **https://dharaneepatel15.github.io** (after publishing).

## How to edit

**All content lives in one file: [`data/content.js`](data/content.js).**
Open it on GitHub (click the ✏️ pencil icon) or in any text editor, change the text, and save / commit.
The site updates within about a minute.

| I want to… | Do this in `data/content.js` |
|---|---|
| Change my intro / headline | Edit `headline`, `intro`, or `about` |
| Add a new job | Copy one `{ role: ..., company: ... }` block in `experience`, paste it at the top, and edit |
| Add a project | Copy a block in `projects` and edit it. Add `repo` / `demo` links if you have them |
| Add a skill | Add `"SkillName"` to the relevant `items: [...]` list |
| Hide something | Set it to `""`, or delete its block |

Other things:

- **Update résumé:** replace `assets/Dharanee_Patel_Resume.pdf` with the new file (same name).
- **Use your own photo:** add `assets/img/profile.jpg`, then set `photo: "assets/img/profile.jpg"`.
- **Change the accent color:** edit `--accent` at the top of `assets/css/style.css`.
- **GitHub repos:** your public, non-fork repos appear automatically under "More on GitHub".
  Turn this off with `showGithubRepos: false`.

> Tip: keep the commas and quotes intact when editing. If the page goes blank after an edit,
> there's usually a missing comma or quote near the part you just changed.

## Preview locally

Just double-click `index.html` to open it in your browser.

## Publish on GitHub Pages (one-time setup)

1. On GitHub, create a new **public** repository named exactly **`dharaneepatel15.github.io`**.
2. Upload every file and folder from this folder into it (**Add file → Upload files**, drag everything in, commit).
3. Go to **Settings → Pages** → *Source:* **Deploy from a branch** → Branch **`main`**, folder **`/ (root)`** → Save.
4. Visit **https://dharaneepatel15.github.io** after 1–2 minutes.

## Files

```
index.html            page structure (rarely needs changes)
data/content.js       ← ALL your content: edit this
assets/css/style.css  colors, fonts, layout
assets/js/main.js     builds the page from content.js
assets/Dharanee_Patel_Resume.pdf
assets/img/           put your photo here
```
