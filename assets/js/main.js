/* Renders the page from window.SITE (data/content.js).
   You normally don't need to edit this file. */
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = 'target="_blank" rel="noopener"';

  const icons = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/></svg>'
  };
  const tags = (list, cls = "") =>
    list && list.length ? `<div class="tags">${list.map((t) => `<span class="tag ${cls}">${esc(t)}</span>`).join("")}</div>` : "";
  const hideIfEmpty = (sectionId, list) => { if (!list || !list.length) $(sectionId).remove(); };

  /* ----- Simple text fields ----- */
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const v = S[el.dataset.bind];
    if (v) el.textContent = v; else el.remove();
  });
  document.title = `${S.name} · Portfolio`;

  const photo = $("photo");
  if (S.photo) { photo.src = S.photo; photo.alt = `Photo of ${S.name}`; } else photo.remove();

  /* ----- Hero buttons ----- */
  const L = S.links || {};
  const primaryEmail = (L.emails || [])[0];
  $("heroLinks").innerHTML = [
    L.github && `<a class="btn primary" href="${esc(L.github)}" ${ext}>${icons.github}GitHub</a>`,
    L.linkedin && `<a class="btn" href="${esc(L.linkedin)}" ${ext}>${icons.linkedin}LinkedIn</a>`,
    L.resume && `<a class="btn" href="${esc(L.resume)}" ${ext}>${icons.file}Résumé</a>`,
    primaryEmail && `<a class="btn" href="mailto:${esc(primaryEmail.address)}">${icons.mail}Email</a>`
  ].filter(Boolean).join("");

  /* ----- About + stats ----- */
  $("aboutText").innerHTML = (S.about || []).map((p) => `<p>${esc(p)}</p>`).join("");
  if (S.stats && S.stats.length) {
    $("stats").innerHTML = S.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
  } else $("stats").remove();
  hideIfEmpty("about", S.about);

  /* ----- Experience ----- */
  hideIfEmpty("experience", S.experience);
  $("experienceList").innerHTML = (S.experience || []).map((j) => `
    <li class="job reveal">
      <div class="job-head">
        <div>
          <h3>${esc(j.role)}</h3>
          <div class="company"><strong>${esc(j.company)}</strong>${j.location ? ` · ${esc(j.location)}` : ""}</div>
        </div>
        <span class="period">${esc(j.period)}</span>
      </div>
      ${j.points && j.points.length ? `<ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
      ${tags(j.tags, "accent")}
    </li>`).join("");

  /* ----- Projects ----- */
  $("projectList").innerHTML = (S.projects || []).map((p) => `
    <article class="card reveal">
      <h3>${esc(p.title)}</h3>
      ${p.subtitle ? `<div class="sub">${esc(p.subtitle)}</div>` : ""}
      <p>${esc(p.description)}</p>
      ${tags(p.tags, "accent")}
      ${p.repo || p.demo ? `<div class="card-links">
        ${p.repo ? `<a href="${esc(p.repo)}" ${ext}>View code →</a>` : ""}
        ${p.demo ? `<a href="${esc(p.demo)}" ${ext}>Live demo →</a>` : ""}
      </div>` : ""}
    </article>`).join("");

  if (S.showGithubRepos && S.githubUser) {
    const featured = new Set((S.projects || []).map((p) => (p.repo || "").toLowerCase().replace(/\/$/, "")));
    fetch(`https://api.github.com/users/${encodeURIComponent(S.githubUser)}/repos?per_page=100&sort=pushed`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((repos) => {
        const list = repos
          .filter((r) => !r.fork && !r.archived && !featured.has(r.html_url.toLowerCase())
            && r.name.toLowerCase() !== `${S.githubUser}.github.io`.toLowerCase())
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, S.maxGithubRepos || 6);
        if (!list.length) return;
        $("githubList").innerHTML = list.map((r) => `
          <article class="card">
            <h3><a href="${esc(r.html_url)}" ${ext}>${esc(r.name)}</a></h3>
            <p>${esc(r.description || "")}</p>
            <div class="meta">
              ${r.language ? `<span>● ${esc(r.language)}</span>` : ""}
              ${r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : ""}
              <span>Updated ${new Date(r.pushed_at).toLocaleDateString(undefined, { month: "short", year: "numeric" })}</span>
            </div>
          </article>`).join("");
        $("githubBlock").hidden = false;
      })
      .catch(() => {}); // offline or rate-limited: just skip this block
  }

  /* ----- Skills ----- */
  hideIfEmpty("skills", S.skills);
  $("skillList").innerHTML = (S.skills || []).map((g) => `
    <div class="skill-row reveal"><h3>${esc(g.group)}</h3>${tags(g.items)}</div>`).join("");

  /* ----- Education ----- */
  hideIfEmpty("education", S.education);
  $("educationList").innerHTML = (S.education || []).map((e) => `
    <div class="edu-item reveal">
      <h3>${esc(e.degree)}</h3>
      <div class="school">${esc(e.school)}</div>
      ${e.location ? `<div class="loc">${esc(e.location)}</div>` : ""}
      <span class="period">${esc(e.period)}</span>
      ${e.details ? `<div class="details">${esc(e.details)}</div>` : ""}
    </div>`).join("");

  /* ----- Contact ----- */
  const handle = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  $("contactList").innerHTML = [
    ...(L.emails || []).map((e) => `<a class="contact-item" href="mailto:${esc(e.address)}">${icons.mail}<div><small>${esc(e.label)} email</small><span>${esc(e.address)}</span></div></a>`),
    L.linkedin && `<a class="contact-item" href="${esc(L.linkedin)}" ${ext}>${icons.linkedin}<div><small>LinkedIn</small><span>${esc(handle(L.linkedin))}</span></div></a>`,
    L.github && `<a class="contact-item" href="${esc(L.github)}" ${ext}>${icons.github}<div><small>GitHub</small><span>${esc(handle(L.github))}</span></div></a>`,
    L.resume && `<a class="contact-item" href="${esc(L.resume)}" ${ext}>${icons.file}<div><small>Résumé</small><span>Download PDF</span></div></a>`
  ].filter(Boolean).join("");

  $("footer").textContent = `© ${new Date().getFullYear()} ${S.name}`;

  /* ----- Theme toggle ----- */
  const root = document.documentElement;
  $("themeBtn").addEventListener("click", () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  /* ----- Reveal-on-scroll + active nav link ----- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const navLinks = [...document.querySelectorAll(".nav-links a")];
    const spy = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
    }), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section").forEach((s) => spy.observe(s));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }
})();
