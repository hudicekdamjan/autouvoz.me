/* =========================================================
   AUTOUVOZ.me – podešavanja
   Ovdje mijenjate kontakt podatke i način slanja formi.
   ========================================================= */
const CONFIG = {
  phone: "+38267491509",            // broj za poziv, WhatsApp i Viber (međunarodni format)
  phoneDisplay: "+382 67 491 509",  // kako se broj prikazuje na sajtu
  email: "",        // npr. "info@autouvoz.me" – prazno = sakriveno na sajtu
  instagram: "",    // npr. "autouvoz.me" (bez @) – prazno = sakriveno na sajtu
  // Opciono: endpoint za slanje formi na email (npr. https://formspree.io/f/xxxxxx).
  // Ako je prazno, forme otvaraju WhatsApp sa već popunjenom porukom.
  formEndpoint: ""
};

// Vozila u sekciji "Naši uvozi" su u fajlu vozila.js

const MODELS = {
  "Abarth": [
  "500",
  "595",
  "695",
  "124 Spider",
  "500e",
  "600e"
  ],
  "Aiways": [
  "U5",
  "U6"
  ],
  "Alfa Romeo": [
  "Giulietta",
  "Giulia",
  "Stelvio",
  "Tonale",
  "Junior",
  "MiTo",
  "159",
  "4C"
  ],
  "Alpina": [
  "B3",
  "B4",
  "B5",
  "B7",
  "D3",
  "D5",
  "XD3",
  "XB7"
  ],
  "Alpine": [
  "A110",
  "A290"
  ],
  "Aston Martin": [
  "DB11",
  "DB12",
  "DBX",
  "Vantage",
  "DBS"
  ],
  "Audi": [
  "A1",
  "A3",
  "A4",
  "A4 Allroad",
  "A5",
  "A6",
  "A6 Allroad",
  "A7",
  "A8",
  "Q2",
  "Q3",
  "Q3 Sportback",
  "Q4 e-tron",
  "Q5",
  "Q5 Sportback",
  "Q6 e-tron",
  "Q7",
  "Q8",
  "Q8 e-tron",
  "e-tron GT",
  "TT",
  "R8",
  "S3",
  "S4",
  "S5",
  "S6",
  "S7",
  "S8",
  "SQ5",
  "SQ7",
  "SQ8",
  "RS3",
  "RS4",
  "RS5",
  "RS6",
  "RS7",
  "RS Q3",
  "RS Q8"
  ],
  "Bentley": [
  "Bentayga",
  "Continental GT",
  "Flying Spur"
  ],
  "BMW": [
  "Serija 1",
  "Serija 2",
  "Serija 2 Active Tourer",
  "Serija 2 Gran Coupé",
  "Serija 3",
  "Serija 4",
  "Serija 5",
  "Serija 6",
  "Serija 7",
  "Serija 8",
  "X1",
  "X2",
  "X3",
  "X4",
  "X5",
  "X6",
  "X7",
  "XM",
  "Z4",
  "i3",
  "i4",
  "i5",
  "i7",
  "iX",
  "iX1",
  "iX3",
  "M2",
  "M3",
  "M4",
  "M5",
  "M8"
  ],
  "BYD": [
  "Atto 2",
  "Atto 3",
  "Dolphin",
  "Dolphin Surf",
  "Seal",
  "Seal U",
  "Sealion 7",
  "Han",
  "Tang"
  ],
  "Cadillac": [
  "Escalade",
  "CT5",
  "XT4",
  "XT5",
  "Lyriq"
  ],
  "Chevrolet": [
  "Camaro",
  "Corvette",
  "Captiva",
  "Cruze",
  "Spark",
  "Aveo",
  "Trax",
  "Tahoe",
  "Silverado"
  ],
  "Chrysler": [
  "300C",
  "Pacifica",
  "Voyager"
  ],
  "Citroën": [
  "C1",
  "C3",
  "C3 Aircross",
  "C4",
  "C4 X",
  "C5 Aircross",
  "C5 X",
  "Berlingo",
  "SpaceTourer",
  "Jumpy",
  "Jumper",
  "ë-C3",
  "ë-C4",
  "DS3",
  "DS4",
  "DS5"
  ],
  "Cupra": [
  "Born",
  "Formentor",
  "Leon",
  "Ateca",
  "Tavascan",
  "Terramar"
  ],
  "Dacia": [
  "Sandero",
  "Sandero Stepway",
  "Logan",
  "Duster",
  "Jogger",
  "Spring",
  "Bigster",
  "Lodgy",
  "Dokker"
  ],
  "Daihatsu": [
  "Terios",
  "Sirion",
  "Cuore",
  "Materia"
  ],
  "Dodge": [
  "Challenger",
  "Charger",
  "Durango",
  "RAM"
  ],
  "DS Automobiles": [
  "DS 3",
  "DS 4",
  "DS 7",
  "DS 9"
  ],
  "Ferrari": [
  "296",
  "488",
  "812",
  "F8",
  "Roma",
  "Portofino",
  "SF90",
  "Purosangue"
  ],
  "Fiat": [
  "500",
  "500X",
  "500L",
  "500e",
  "600",
  "Panda",
  "Tipo",
  "Punto",
  "Doblo",
  "Ducato",
  "Fiorino",
  "Talento",
  "Scudo",
  "Qubo"
  ],
  "Ford": [
  "Fiesta",
  "Focus",
  "Mondeo",
  "Puma",
  "Kuga",
  "EcoSport",
  "Edge",
  "Explorer",
  "Mustang",
  "Mustang Mach-E",
  "S-Max",
  "Galaxy",
  "C-Max",
  "B-Max",
  "Ka",
  "Ranger",
  "Transit",
  "Transit Custom",
  "Transit Connect",
  "Tourneo Custom",
  "Tourneo Connect"
  ],
  "Genesis": [
  "G70",
  "G80",
  "GV60",
  "GV70",
  "GV80"
  ],
  "Honda": [
  "Civic",
  "Jazz",
  "HR-V",
  "CR-V",
  "ZR-V",
  "e:Ny1",
  "Accord",
  "e"
  ],
  "Hummer": [
  "H2",
  "H3"
  ],
  "Hyundai": [
  "i10",
  "i20",
  "i30",
  "i40",
  "Bayon",
  "Kona",
  "Tucson",
  "Santa Fe",
  "Ioniq",
  "Ioniq 5",
  "Ioniq 6",
  "ix35",
  "Staria"
  ],
  "Ineos": [
  "Grenadier"
  ],
  "Infiniti": [
  "Q30",
  "Q50",
  "QX30",
  "QX70"
  ],
  "Isuzu": [
  "D-Max"
  ],
  "Iveco": [
  "Daily"
  ],
  "Jaguar": [
  "E-Pace",
  "F-Pace",
  "I-Pace",
  "XE",
  "XF",
  "XJ",
  "F-Type"
  ],
  "Jeep": [
  "Avenger",
  "Renegade",
  "Compass",
  "Cherokee",
  "Grand Cherokee",
  "Wrangler",
  "Gladiator"
  ],
  "Kia": [
  "Picanto",
  "Rio",
  "Ceed",
  "ProCeed",
  "XCeed",
  "Stonic",
  "Niro",
  "Sportage",
  "Sorento",
  "EV3",
  "EV6",
  "EV9",
  "Stinger",
  "Soul",
  "Carens"
  ],
  "KGM / SsangYong": [
  "Tivoli",
  "Korando",
  "Rexton",
  "Torres",
  "Musso"
  ],
  "Lada": [
  "Niva",
  "Vesta"
  ],
  "Lamborghini": [
  "Huracán",
  "Urus",
  "Revuelto",
  "Aventador"
  ],
  "Lancia": [
  "Ypsilon",
  "Delta"
  ],
  "Land Rover": [
  "Defender",
  "Discovery",
  "Discovery Sport",
  "Range Rover",
  "Range Rover Sport",
  "Range Rover Velar",
  "Range Rover Evoque",
  "Freelander"
  ],
  "Leapmotor": [
  "T03",
  "C10"
  ],
  "Lexus": [
  "CT",
  "IS",
  "ES",
  "LS",
  "UX",
  "NX",
  "RX",
  "LBX",
  "RZ",
  "LC"
  ],
  "Lotus": [
  "Emira",
  "Eletre",
  "Evora"
  ],
  "Lynk & Co": [
  "01",
  "02"
  ],
  "Maserati": [
  "Ghibli",
  "Levante",
  "Quattroporte",
  "Grecale",
  "GranTurismo",
  "MC20"
  ],
  "Maxus": [
  "Deliver 9",
  "eDeliver 3",
  "T90"
  ],
  "Mazda": [
  "2",
  "3",
  "6",
  "CX-3",
  "CX-30",
  "CX-5",
  "CX-60",
  "CX-80",
  "MX-5",
  "MX-30"
  ],
  "McLaren": [
  "570S",
  "720S",
  "Artura",
  "GT"
  ],
  "Mercedes-Benz": [
  "A-Klasa",
  "B-Klasa",
  "C-Klasa",
  "E-Klasa",
  "S-Klasa",
  "CLA",
  "CLS",
  "GLA",
  "GLB",
  "GLC",
  "GLC Coupé",
  "GLE",
  "GLE Coupé",
  "GLS",
  "G-Klasa",
  "EQA",
  "EQB",
  "EQC",
  "EQE",
  "EQS",
  "SL",
  "AMG GT",
  "V-Klasa",
  "Vito",
  "Sprinter",
  "Citan",
  "X-Klasa"
  ],
  "MG": [
  "MG3",
  "MG4",
  "MG5",
  "ZS",
  "HS",
  "Marvel R",
  "Cyberster"
  ],
  "MINI": [
  "One",
  "Cooper",
  "Cooper S",
  "John Cooper Works",
  "Clubman",
  "Countryman",
  "Paceman",
  "Aceman",
  "Cabrio"
  ],
  "Mitsubishi": [
  "Space Star",
  "Colt",
  "ASX",
  "Eclipse Cross",
  "Outlander",
  "L200",
  "Pajero"
  ],
  "Morgan": [
  "Plus Four",
  "Plus Six"
  ],
  "NIO": [
  "ET5",
  "ET7",
  "EL6"
  ],
  "Nissan": [
  "Micra",
  "Note",
  "Juke",
  "Qashqai",
  "X-Trail",
  "Ariya",
  "Leaf",
  "Navara",
  "Pathfinder",
  "370Z",
  "GT-R",
  "Townstar",
  "Primastar"
  ],
  "Opel": [
  "Corsa",
  "Astra",
  "Insignia",
  "Mokka",
  "Crossland",
  "Grandland",
  "Frontera",
  "Zafira",
  "Meriva",
  "Adam",
  "Karl",
  "Combo",
  "Vivaro",
  "Movano"
  ],
  "Peugeot": [
  "108",
  "208",
  "308",
  "408",
  "508",
  "2008",
  "3008",
  "5008",
  "Rifter",
  "Partner",
  "Expert",
  "Traveller",
  "Boxer",
  "e-208",
  "e-2008"
  ],
  "Polestar": [
  "2",
  "3",
  "4"
  ],
  "Porsche": [
  "911",
  "718 Boxster",
  "718 Cayman",
  "Cayenne",
  "Cayenne Coupé",
  "Macan",
  "Panamera",
  "Taycan"
  ],
  "RAM": [
  "1500",
  "2500"
  ],
  "Renault": [
  "Clio",
  "Captur",
  "Megane",
  "Megane E-Tech",
  "Arkana",
  "Austral",
  "Espace",
  "Rafale",
  "Scenic",
  "Kadjar",
  "Koleos",
  "Talisman",
  "Twingo",
  "Zoe",
  "Symbioz",
  "Kangoo",
  "Trafic",
  "Master",
  "R5"
  ],
  "Rolls-Royce": [
  "Cullinan",
  "Ghost",
  "Phantom",
  "Wraith",
  "Spectre"
  ],
  "Saab": [
  "9-3",
  "9-5"
  ],
  "Seat": [
  "Ibiza",
  "Arona",
  "Leon",
  "Ateca",
  "Tarraco",
  "Alhambra",
  "Mii",
  "Toledo"
  ],
  "Škoda": [
  "Fabia",
  "Scala",
  "Octavia",
  "Superb",
  "Kamiq",
  "Karoq",
  "Kodiaq",
  "Enyaq",
  "Elroq",
  "Rapid",
  "Citigo",
  "Yeti"
  ],
  "Smart": [
  "ForTwo",
  "ForFour",
  "#1",
  "#3"
  ],
  "Subaru": [
  "Impreza",
  "XV",
  "Crosstrek",
  "Forester",
  "Outback",
  "Solterra",
  "BRZ",
  "Levorg"
  ],
  "Suzuki": [
  "Swift",
  "Ignis",
  "Vitara",
  "S-Cross",
  "Jimny",
  "Across",
  "Swace",
  "Baleno",
  "SX4"
  ],
  "Tesla": [
  "Model 3",
  "Model Y",
  "Model S",
  "Model X"
  ],
  "Toyota": [
  "Aygo",
  "Aygo X",
  "Yaris",
  "Yaris Cross",
  "Corolla",
  "Corolla Cross",
  "C-HR",
  "RAV4",
  "Camry",
  "Prius",
  "bZ4X",
  "Land Cruiser",
  "Hilux",
  "GR86",
  "Supra",
  "Proace",
  "Proace City",
  "Auris",
  "Avensis"
  ],
  "Volkswagen": [
  "up!",
  "Polo",
  "Golf",
  "Golf Variant",
  "Golf Plus",
  "T-Cross",
  "T-Roc",
  "Taigo",
  "Tiguan",
  "Tiguan Allspace",
  "Touareg",
  "Passat",
  "Passat Variant",
  "Arteon",
  "Jetta",
  "Scirocco",
  "Touran",
  "Sharan",
  "ID.3",
  "ID.4",
  "ID.5",
  "ID.7",
  "ID. Buzz",
  "Caddy",
  "Transporter",
  "Multivan",
  "California",
  "Crafter",
  "Amarok"
  ],
  "Volvo": [
  "V40",
  "V60",
  "V90",
  "S60",
  "S90",
  "XC40",
  "XC60",
  "XC90",
  "EX30",
  "EX40",
  "EC40",
  "EX90"
  ],
  "XPeng": [
  "G6",
  "G9",
  "P7"
  ],
  "Zeekr": [
  "001",
  "7X",
  "X"
  ]
  };
const POPULAR_MAKES = ["Audi", "BMW", "Mercedes-Benz", "Volkswagen", "Škoda", "Opel", "Ford", "Renault", "Peugeot", "Toyota", "Porsche", "Volvo"];

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const fmt = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
const eur = n => fmt.format(Math.round(n)) + " €";
const waUrl = text => `https://wa.me/${CONFIG.phone.replace(/\D/g, "")}${text ? "?text=" + encodeURIComponent(text) : ""}`;

document.documentElement.classList.add("js");

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => (t.hidden = true), 4500);
}

function openExternal(url) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* ---------- Kontakt linkovi ---------- */
function initContacts() {
  $$("[data-tel]").forEach(a => (a.href = "tel:" + CONFIG.phone));
  $$("[data-wa]").forEach(a => {
    a.href = waUrl("Pozdrav, zanima me uvoz automobila.");
    a.target = "_blank";
    a.rel = "noopener";
  });
  $$("[data-mail]").forEach(a => { a.hidden = !CONFIG.email; if (CONFIG.email) a.href = "mailto:" + CONFIG.email; });
  $$("[data-insta]").forEach(a => { a.hidden = !CONFIG.instagram; if (CONFIG.instagram) a.href = "https://instagram.com/" + CONFIG.instagram; });
  $$("[data-phone-text]").forEach(el => (el.textContent = CONFIG.phoneDisplay));
  $$("[data-mail-text]").forEach(el => (el.textContent = CONFIG.email));
  $$("[data-insta-text]").forEach(el => (el.textContent = "@" + CONFIG.instagram));
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ---------- Header, meni, aktivni link ---------- */
function initNav() {
  const header = $(".header");
  const burger = $("#burger");
  const nav = $("#nav");
  const setOpen = open => {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Zatvori meni" : "Otvori meni");
  };
  burger.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });

  // Logo i "Početna" uvijek vraćaju na sam vrh stranice
  $$('a[href="#top"]').forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    setOpen(false);
    const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
    try { history.replaceState(null, "", location.pathname + location.search); } catch (_) {}
  }));

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const links = $$(".nav a[href^='#']:not(.btn)");
  const map = { top: "#top", usluga: "#usluga", kako: "#kako", uvozi: "#uvozi", cjenovnik: "#cjenovnik", zasto: "#zasto", kontakt: "#kontakt" };
  const sections = ["usluga", "kako", "posalji-link", "pronadji", "uvozi", "cjenovnik", "kalkulator", "zasto", "pitanja", "kontakt"]
    .map(id => document.getElementById(id)).filter(Boolean);
  const parentOf = { "posalji-link": "kako", pronadji: "kako", kalkulator: "cjenovnik", pitanja: "zasto" };
  const update = () => {
    const y = window.scrollY + window.innerHeight * 0.35;
    let current = "top";
    sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
    current = parentOf[current] || current;
    links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === map[current]));
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* ---------- Animacija pojavljivanja ---------- */
function initReveal() {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const els = $$(".reveal").filter(el => el.getBoundingClientRect().top > window.innerHeight);
  els.forEach(el => el.classList.add("pre"));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.remove("pre"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  els.forEach(el => io.observe(el));
}

/* ---------- Naši uvozi (podaci iz vozila.js) ---------- */
function renderCars() {
  const box = $("#cars");
  const list = (typeof VOZILA !== "undefined" && Array.isArray(VOZILA)) ? VOZILA : [];
  const esc = t => String(t == null ? "" : t).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  if (!list.length) {
    $("#uvozi").hidden = true;
    $$('a[href="#uvozi"]').forEach(a => (a.hidden = true));
    return;
  }
  const hasDemo = list.some(c => c.demo);
  $$("[data-demo-note]").forEach(el => (el.hidden = !hasDemo));
  box.innerHTML = list.map(c => {
    const name = `${c.marka} ${c.model}`;
    const gen = z => !z ? "Evrope" : /a$/.test(z) ? z.slice(0, -1) + "e" : z + "a"; // Njemačka -> Njemačke
    const alt = `${name}${c.godiste ? ", " + c.godiste + "." : ""} uvezen iz ${gen(c.porijeklo)} u Crnu Goru`;
    const media = c.slika
      ? `<img src="${esc(c.slika)}" alt="${esc(alt)}" loading="lazy" decoding="async" width="1200" height="900">`
      : `<svg aria-hidden="true"><use href="#car"/></svg>`;
    return `
    <article class="carcard reveal${c.slika ? " carcard--photo" : ""}">
      <div class="carcard__img">
        ${media}
        ${c.demo ? '<span class="carcard__tag">Demo primjer</span>' : ""}
        ${c.porijeklo ? `<span class="carcard__flag">${esc(c.porijeklo)}</span>` : ""}
      </div>
      <div class="carcard__body">
        <p class="carcard__make">${esc(c.marka)}</p>
        <h3 class="carcard__model">${esc(c.model)}</h3>
        <dl class="specs">
          <div><dt>Godište</dt><dd>${c.godiste ? esc(c.godiste) + "." : "–"}</dd></div>
          <div><dt>Kilometraža</dt><dd>${c.km || c.km === 0 ? fmt.format(+c.km) + " km" : "–"}</dd></div>
          <div><dt>Porijeklo</dt><dd>${esc(c.porijeklo || "–")}</dd></div>
        </dl>
      </div>
    </article>`;
  }).join("");
}

/* ---------- Slanje upita ---------- */
async function sendInquiry(subject, lines, data) {
  const text = [subject, "", ...lines].join("\n");
  if (CONFIG.formEndpoint) {
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: subject, ...data, poruka: text })
      });
      if (res.ok) return "sent";
    } catch (_) { /* pada na WhatsApp ispod */ }
  }
  openExternal(waUrl(text));
  return "whatsapp";
}

/* ---------- Forma: link oglasa ---------- */
function initLinkForm() {
  const form = $("#linkForm");
  const ok = $(".form__ok", form);
  const rules = {
    name: v => v.trim().length >= 2,
    phone: v => v.replace(/[^\d]/g, "").length >= 8,
    link: v => /^https?:\/\/[^\s.]+\.[^\s]{2,}/i.test(v.trim())
  };
  const check = input => {
    const rule = rules[input.name];
    if (!rule) return true;
    const valid = rule(input.value);
    input.closest(".field").classList.toggle("invalid", !valid);
    input.setAttribute("aria-invalid", String(!valid));
    return valid;
  };
  $$("input", form).forEach(i => {
    i.addEventListener("blur", () => i.value && check(i));
    i.addEventListener("input", () => i.closest(".field").classList.contains("invalid") && check(i));
  });

  // Sačuvaj nacrt (samo u ovom pregledaču)
  const KEY = "autouvoz-link-draft";
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || "{}");
    Object.entries(d).forEach(([k, v]) => { if (form.elements[k] && !form.elements[k].value) form.elements[k].value = v; });
  } catch (_) {}
  form.addEventListener("input", () => {
    try { localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(new FormData(form)))); } catch (_) {}
  });

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const inputs = $$("input[required]", form);
    const results = inputs.map(check);
    if (results.includes(false)) {
      inputs[results.indexOf(false)].focus();
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const btn = $("button[type=submit]", form);
    btn.disabled = true;
    const how = await sendInquiry("Zahtjev za procjenu uvoza – Autouvoz.me", [
      `Ime i prezime: ${d.name}`,
      `Telefon: ${d.phone}`,
      `Link oglasa: ${d.link}`,
      d.message ? `Dodatne informacije: ${d.message}` : ""
    ].filter(Boolean), d);
    btn.disabled = false;
    ok.hidden = false;
    ok.textContent = how === "sent"
      ? "Hvala! Zahtjev je poslat – javićemo vam se uskoro sa procjenom troškova."
      : "Otvorili smo WhatsApp sa vašim zahtjevom – samo pritisnite „Pošalji”. Ako se nije otvorio, pišite nam na " + CONFIG.phoneDisplay + ".";
    if (how === "sent") {
      form.reset();
      try { localStorage.removeItem(KEY); } catch (_) {}
    }
  });
}

/* ---------- Pretraga automobila ---------- */
function initFinder() {
  const make = $("#f-make"), model = $("#f-model"), year = $("#f-year"), yearTo = $("#f-year-to");
  const group = (label, list) => {
    const g = document.createElement("optgroup");
    g.label = label;
    list.forEach(m => g.appendChild(new Option(m, m)));
    make.appendChild(g);
  };
  group("Najtraženije marke", POPULAR_MAKES);
  group("Sve marke (A–Z)", Object.keys(MODELS).sort((a, b) => a.localeCompare(b, "sr")));
  make.add(new Option("Druga marka (navesti u poruci)", "Druga marka"));
  const now = new Date().getFullYear();
  for (let y = now; y >= now - 20; y--) {
    year.add(new Option(y + ".", y));
    yearTo.add(new Option(y + ".", y));
  }
  // Raspon "od – do": ako se izabere "do" manje od "od" (ili obrnuto), drugo polje se uskladi
  const pairRange = (fromEl, toEl) => {
    const fix = changed => {
      const f = parseFloat(fromEl.value), t = parseFloat(toEl.value);
      if (!isNaN(f) && !isNaN(t) && t < f) (changed === fromEl ? toEl : fromEl).value = changed.value;
    };
    const evt = fromEl.tagName === "SELECT" ? "change" : "change";
    fromEl.addEventListener(evt, () => fix(fromEl));
    toEl.addEventListener(evt, () => fix(toEl));
  };
  pairRange(year, yearTo);
  pairRange($("#f-km-from"), $("#f-km"));
  pairRange($("#f-budget-from"), $("#f-budget"));

  make.addEventListener("change", () => {
    model.innerHTML = "";
    if (!make.value) {
      model.add(new Option("Izaberite marku", ""));
      model.disabled = true;
      return;
    }
    model.add(new Option("Svi modeli", ""));
    (MODELS[make.value] || []).forEach(m => model.add(new Option(m, m)));
    model.add(new Option("Drugi model", "drugi model"));
    model.disabled = false;
  });

  const summary = () => {
    const val = id => $(id).value.trim();
    const range = (label, from, to, f) => {
      if (from === "" && to === "") return "";
      if (from !== "" && to !== "") return from === to ? `${label}: ${f(from)}` : `${label}: od ${f(from)} do ${f(to)}`;
      return from !== "" ? `${label}: od ${f(from)}` : `${label}: do ${f(to)}`;
    };
    return [
      val("#f-make") && `Marka: ${val("#f-make")}${val("#f-model") ? " " + val("#f-model") : ""}`,
      range("Godište", val("#f-year"), val("#f-year-to"), v => v + "."),
      range("Kilometraža", val("#f-km-from"), val("#f-km"), v => fmt.format(+v) + " km"),
      range("Budžet", val("#f-budget-from"), val("#f-budget"), v => eur(+v)),
      val("#f-fuel") && `Gorivo: ${val("#f-fuel")}`,
      val("#f-gear") && `Mjenjač: ${val("#f-gear")}`
    ].filter(Boolean);
  };

  $("#finder").addEventListener("submit", e => {
    e.preventDefault();
    const lines = summary();
    const text = ["Pozdrav, tražim automobil iz Evrope:", "", ...(lines.length ? lines : ["Nemam posebne zahtjeve – javite mi se sa prijedlozima."])].join("\n");
    openExternal(waUrl(text));
    toast("WhatsApp je otvoren sa vašim upitom – pritisnite „Pošalji”.");
  });

  $("#finderToForm").addEventListener("click", () => {
    const lines = summary();
    const msg = $("#lf-msg");
    if (lines.length) msg.value = "Tražim: " + lines.join(", ");
    $("#posalji-link").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => $("#lf-name").focus({ preventScroll: true }), 600);
  });
}

/* ---------- Kalkulator ---------- */
function initCalc() {
  const n = id => Math.max(0, parseFloat($(id).value.replace?.(",", ".") ?? $(id).value) || 0);
  const country = $("#c-country"), transport = $("#c-transport");

  // Transport je fiksna cijena iz cjenovnika (1.200 €), ne zavisi od zemlje

  function calc() {
    const price = n("#c-price"), tr = n("#c-transport"), other = n("#c-other");
    const cRate = n("#c-customs"), vRate = n("#c-vat");
    const base = price + tr;                       // carinska osnovica (vrijednost + transport)
    const customs = base * cRate / 100;
    const vat = (base + customs + other) * vRate / 100;
    const duties = customs + vat;
    const extra = tr + other + duties;
    const total = price + extra;

    $("#o-price").textContent = eur(price);
    $("#o-transport").textContent = eur(tr);
    $("#o-other").textContent = eur(other);
    $("#o-duty").textContent = cRate || vRate ? eur(duties) : "nije uneseno";
    $("#o-extra").textContent = eur(extra);
    $("#o-total").textContent = eur(total);

    const pct = v => (total > 0 ? (v / total) * 100 : 0) + "%";
    $("#b-v").style.width = pct(price);
    $("#b-t").style.width = pct(tr + other);
    $("#b-d").style.width = pct(duties);
  }
  $$("#calc input").forEach(i => i.addEventListener("input", calc));
  calc();
}

/* ---------- Netlify oznaka: napravi joj mjesto da ne prekriva dugmad ---------- */
function watchNetlifyBadge() {
  const root = document.documentElement;
  const check = () => {
    const f = document.getElementById("nl-badge-frame");
    let on = false;
    if (f) {
      const cs = getComputedStyle(f), r = f.getBoundingClientRect();
      on = cs.display !== "none" && cs.visibility !== "hidden" && r.width > 0 && r.height > 0 && r.top < window.innerHeight;
      if (on) root.style.setProperty("--nf-badge-h", Math.ceil(window.innerHeight - r.top) + "px");
    }
    root.classList.toggle("has-nf-badge", on);
  };
  check();
  new MutationObserver(check).observe(document.body, { childList: true });
  window.addEventListener("resize", check);
  setInterval(check, 2000);
}

/* ---------- Start ---------- */
renderCars();
initContacts();
initNav();
initLinkForm();
initFinder();
initCalc();
initReveal();
watchNetlifyBadge();
