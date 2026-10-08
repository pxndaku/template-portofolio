/* ============================================================
   Portfolio Template — v1
   PENGATURAN: edit CONFIG, SKILLS, dan PROJECTS di bawah.
   ============================================================ */

const CONFIG = {
  name: "Bengil",
  email: "hello@example.com", // dipakai form kontak (mailto)
  roles: ["UI/UX Designer", "Frontend Developer", "Freelancer"], // teks animasi hero
};

/* ---------- Skills (nama + persen) ---------- */
const SKILLS = [
  { name: "Figma", level: 90 },
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "UI Design System", level: 80 },
  { name: "Responsive Design", level: 88 },
  { name: "Prototyping", level: 82 },
];

/* ---------- Projects ----------
   thumb: gradient CSS bebas (ganti warna sesukamu)
   category: harus terdaftar di FILTERS                          */
const PROJECTS = [
  {
    title: "TokoKu — E-commerce UI",
    category: "UI/UX", thumb: "linear-gradient(135deg,#6366f1,#a78bfa)",
    icon: "🛒", desc: "Complete mobile app design for a local e-commerce, 40+ screens with design system.",
    tags: ["Figma", "Design System"], demo: "#", code: "#",
  },
  {
    title: "KonterKu — Top-up Store",
    category: "Web", thumb: "linear-gradient(135deg,#0ea5e9,#22d3ee)",
    icon: "⚡", desc: "Single-page store template with WhatsApp checkout. Pure HTML/CSS/JS, no framework.",
    tags: ["HTML", "CSS", "JS"], demo: "#", code: "#",
  },
  {
    title: "FinTrack Dashboard",
    category: "UI/UX", thumb: "linear-gradient(135deg,#8b5cf6,#ec4899)",
    icon: "📊", desc: "Finance analytics dashboard with dark mode and interactive charts.",
    tags: ["Figma", "Dashboard"], demo: "#", code: "#",
  },
  {
    title: "Portfolio v1",
    category: "Web", thumb: "linear-gradient(135deg,#f59e0b,#ef4444)",
    icon: "🎨", desc: "This very template — responsive portfolio with dark mode toggle.",
    tags: ["HTML", "CSS", "JS"], demo: "#", code: "#",
  },
  {
    title: "Mabar App Concept",
    category: "Mobile", thumb: "linear-gradient(135deg,#10b981,#84cc16)",
    icon: "🎮", desc: "Gaming buddy finder app concept — matchmaking UI for mobile gamers.",
    tags: ["Figma", "Mobile"], demo: "#", code: "#",
  },
  {
    title: "KulinerKu Landing Page",
    category: "Web", thumb: "linear-gradient(135deg,#f43f5e,#fb923c)",
    icon: "🍜", desc: "High-converting landing page for a local food brand.",
    tags: ["HTML", "CSS"], demo: "#", code: "#",
  },
];

const FILTERS = ["All", "UI/UX", "Web", "Mobile"];
let activeFilter = "All";

/* ---------- Render skills ---------- */
document.getElementById("skillsGrid").innerHTML = SKILLS.map(
  (s) => `<div class="card"><div class="skill-top"><span>${s.name}</span><span>${s.level}%</span></div>
          <div class="bar"><i style="width:${s.level}%"></i></div></div>`
).join("");

/* ---------- Render filter + projects ---------- */
function renderFilters() {
  document.getElementById("projectFilters").innerHTML = FILTERS.map(
    (f) => `<button class="chip ${f === activeFilter ? "active" : ""}" data-f="${f}">${f}</button>`
  ).join("");
  document.querySelectorAll("#projectFilters .chip").forEach((c) => {
    c.onclick = () => { activeFilter = c.dataset.f; renderFilters(); renderProjects(); };
  });
}
function renderProjects() {
  const list = PROJECTS.filter((p) => activeFilter === "All" || p.category === activeFilter);
  document.getElementById("projectsGrid").innerHTML = list.map(
    (p) => `<div class="card project-card">
      <div class="project-thumb" style="background:${p.thumb}">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="project-links"><a href="${p.demo}" target="_blank" rel="noopener">Live Demo →</a><a href="${p.code}" target="_blank" rel="noopener">Code →</a></div>
    </div>`
  ).join("");
}
renderFilters();
renderProjects();

/* ---------- Efek ketik di hero ---------- */
(function typeRoles() {
  const el = document.getElementById("typedRole");
  const roles = CONFIG.roles;
  let ri = 0, ci = 0, deleting = false;
  (function tick() {
    const word = roles[ri];
    el.textContent = word.slice(0, ci);
    let delay = deleting ? 40 : 90;
    if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 400; }
    ci += deleting ? -1 : 1;
    setTimeout(tick, delay);
  })();
})();

/* ---------- Dark / light mode ---------- */
const themeToggle = document.getElementById("themeToggle");
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  themeToggle.textContent = t === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("pf-theme", t); } catch (e) {}
}
let savedTheme = "light";
try { savedTheme = localStorage.getItem("pf-theme") || "light"; } catch (e) {}
setTheme(savedTheme);
themeToggle.onclick = () =>
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");

/* ---------- Menu mobile ---------- */
document.getElementById("menuToggle").onclick = () =>
  document.getElementById("navLinks").classList.toggle("open");
document.querySelectorAll("#navLinks a").forEach((a) =>
  a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"))
);

/* ---------- Form kontak → email ---------- */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const n = document.getElementById("cfName").value.trim();
  const em = document.getElementById("cfEmail").value.trim();
  const m = document.getElementById("cfMsg").value.trim();
  const subject = encodeURIComponent(`Portfolio inquiry from ${n}`);
  const body = encodeURIComponent(`${m}\n\n— ${n} (${em})`);
  window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
});

/* ---------- Tahun footer ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
