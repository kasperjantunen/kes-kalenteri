// ── DATA: 13 kesäviikkoa ──
const weeks = [
  {
    num: 21, dates: "18.5.–24.5.2026",
    <a href="./Kuvat/CarParade.webp">,
    title: "Classic Car Parade",
    desc: "Classic Car Parade kokoaa historiallisia ajoneuvoja Senaatintorille lauantaina 23.5. Tapahtumassa pääsee ihailemaan klassisia autoja kesäisen Helsingin ytimessä, kauniin Helsingin tuomiokirkon edustalla! Tapahtuma on maksuton ja sopii hyvin perheen pienimmillekin.",
    map: "https://maps.google.com/maps?q=Classic+Car+Parade+Helsinki&output=embed",
    mapLabel: "Classic Car Parade kartalla",
    recommender: "Suosittelee: Kalle Kivioja"
  },
  {
    num: 22, dates: "25.5.–31.5.2026",
    title: "Suomenlinna",
    desc: "Suomenlinna on kesä-Helsingin must visit –kohde! Suomenlinnassa pääset kulkemaan historiallisten linnoitusten läpi tunneleita pitkin (muistakaa pakata taskulamput!), sekä nauttimaan merellisistä saaristomaisemista. Suomenlinnasta löytyy uimarantaa ja leikkipuistoa, mutta myös paljon museoita ja muuta tekemistä sisätiloissa, mikäli kesäsade yllättää.",
    map: "https://maps.google.com/maps?q=Suomenlinna+Helsinki&output=embed",
    mapLabel: "Suomenlinna kartalla",
    recommender: "Suosittelee: Kira Lindqvist"
  },
  {
    num: 23, dates: "1.6.–7.6.2026",
    title: "Björn Borg Helsinki Half Marathon",
    desc: "Juoksusta innostuneiden mahdollisuus pistää oma kunto koetukselle! Helsinki Half Marathon järjestetään lauantaina 6.6. ja se kulkee Helsingin keskustaa ja sen rantaviivaa pitkin, joten juoksun aikana pääsee nauttimaan kesä-Helsingin maisemista parhaimmillaan. Juoksutapahtuman huumaan voi tietysti osallistua myös juoksijoita sivusta kannustaen.",
    map: "https://maps.google.com/maps?q=Helsinki+Half+Marathon&output=embed",
    mapLabel: "Björng Borg Helsinki Half Marathon kartalla",
    recommender: "Suosittelee: Jony Katajainen"
  },
  {
    num: 24, dates: "8.6.–14.6.2026",
    title: "Helsinki-päivä",
    desc: "Helsingin syntymäpäivää juhlitaan perjantaina 12.6. Silloin kaupunki täyttyy erilaisista kulttuuritapahtumista, ja monet kaupungin palvelutahot järjestävät opastuskierroksia ja avoimia ovia.",
    map: "https://maps.google.com/maps?q=Espan+lava+Helsinki&output=embed",
    mapLabel: "Helsinki-päivä kartalla",
    recommender: "Suosittelee: Kasper Jantunen"
  },
  {
    num: 25, dates: "15.6.–21.6.2026",
    title: "Juhannuskokkojuhlat Seurasaaressa",
    desc: "Juhannus on keskikesän juhla, johon kuuluu yötön yö, hyvä ruoka ja juhannuskokko! Helsingissä kokkoja pääsee ihailemaan mm. Seurasaaren idyllisissä ja perinteikkäissä maisemissa juhannusaattona perjantaina 19.6.",
    map: "https://maps.google.com/maps?q=Seurasaari+Helsinki&output=embed",
    mapLabel: "Seurasaari kartalla",
    recommender: "Suosittelee: Kalle Kivioja"
  },
  {
    num: 26, dates: "22.6.–28.6.2026",
    title: "Pride-viikko",
    desc: "Pride-viikkoa vietetään 22.–28.6., ja silloin Helsingin valtaavat sateenkaaren värit! Viikko huipentuu lauantaina 27.6. järjestettävään Pride-kulkueeseen. Kulkueeseen on kuka tahansa tervetullut osallistumaan juuri omana itsenään. Nappaa mukaan sateenkaarilippu ja lähde kiertämään Helsingin keskustaa tärkeän sanoman puolesta!",
    map: "https://maps.google.com/maps?q=Senaatintori+Helsinki&output=embed",
    mapLabel: "Vanhankaupunginlahti kartalla",
    recommender: "Suosittelee: Kira Lindqvist"
  },
  {
    num: 27, dates: "29.6.–5.7.2026",
    title: "Korkeasaari",
    desc: "Korkeasaari on täydellinen kesäretkikohde koko perheelle! Saareen pääsee kätevästi julkisella liikenteellä, esimerkiksi raitiovaunulla. Korkeasaaressa kierrellessä pääsee tutustumaan monenlaisiin eläimiin, ja nälän yllättäessä saaren monet ravintolat ja kahvilat palvelevat.",
    map: "https://maps.google.com/maps?q=Korkeasaari+Helsinki&output=embed",
    mapLabel: "Esplanadi kartalla",
    recommender: "Suosittelee: Jony Katajainen"
  },
  {
    num: 28, dates: "6.7.–12.7.2026",
    title: "HesaCup",
    desc: "HesaCup kokoaa Helsinkiin vuosittain tuhansia junioreiden jalkapallojoukkueita ympäri maailmalta. Tänä vuonna HesaCup järjestetään 6.–11.7. Otteluita pelataan ympäri Helsinkiä, ja niihin on maksuton pääsy.",
    map: "https://maps.google.com/maps?q=Käpylän+liikuntapuisto+Helsinki&output=embed",
    mapLabel: "Käpylän liikuntapuisto kartalla",
    recommender: "Suosittelee: Kasper Jantunen"
  },
  {
    num: 29, dates: "13.7.–19.7.2026",
    title: "Rantapäivä Hietaniemessä",
    desc: "Välillä lomalla pitää myös loikoilla hyvässä seurassa, ja siihen sopii päivä esimerkiksi Hietaniemen uimarannalla! Hietsussa pääsee uimaan meressä ja makoilemaan auringossa, mutta myös aktiviteetteja kaipaaville löytyy tekemistä: rantalentopalloa, ulkokuntosalia, padelia ja muuta hauskaa.",
    map: "https://maps.google.com/maps?q=Hietaniemen+uimaranta+Helsinki&output=embed",
    mapLabel: "Hietaniemen ranta kartalla",
    recommender: "Suosittelee: Kalle Kivioja"
  },
  {
    num: 30, dates: "20.7.–26.7.2026",
    title: "Suuret oluet, pienet panimot",
    desc: "Janottaako? Suuret oluet, pienet panimot –festivaali kerää kotimaiset pienpanimot Helsingin keskustaan Rautatientorille 22.–25.7.Täällä pääset tutustumaan uusiin makumaailmoihin, tai nauttimaan tuttua suosikkioluttasi, muiden olutintoilijoiden keskuudessa.",
    map: "https://maps.google.com/maps?q=Rautatientori+Helsinki&output=embed",
    mapLabel: "Suuret oluet, pienet panimot kartalla",
    recommender: "Suosittelee: Kira Lindqvist"
  },
  {
    num: 31, dates: "27.7.–2.8.2026",
    title: "Weekend-festivaali",
    desc: "Weekend –festivaali on elektronisen musiikin ystävien kesän kohokohta! Tänä vuonna Weekend järjestetään pe-la 31.7.–1.8. Espoon Vermossa, ja esiintyjälistalta löytyy esimerkiksi Martin Garrix.",
    map: "https://maps.google.com/maps?q=Vermon+tapahtumapuisto+Helsinki&output=embed",
    mapLabel: "Weekend-festivaali kartalla",
    recommender: "Suosittelee: Jony Katajainen"
  },
  {
    num: 32, dates: "3.8.–9.8.2026",
    title: "Haltialan kotieläintarha",
    desc: "Haltialan kotieläintarha on täydellinen kesäretkikohde etenkin lapsiperheille. Tilalla pääsee katsomaan lehmiä, lampaita ja muita kotieläimiä, ja nauttimaan maatilan kodikkaasta tunnelmasta. Tilan lähipelloille pääsee myös poimimaan herneitä ja kukkia.",
    map: "https://maps.google.com/maps?q=Haltialan+kotieläintarha+Helsinki&output=embed",
    mapLabel: "Haltialan kotieläintarha kartalla",
    recommender: "Suosittelee: Kalle Kivioja"
  },
  {
    num: 33, dates: "10.8.–16.8.2026",
    title: "Flow-festivaali",
    desc: "Flow-festivaali on yksi Helsingin kulttitapahtumista! Maailmankuulu musiikin ja taiteen festivaali kerää Suvilahteen vuosittain lähes 100 000 kävijää. Tänä vuonna festivaali järjestetään pe-su 14.–16.8. - täydellinen kesäloman huipennus!",
    map: "https://maps.google.com/maps?q=Suvilahti+Helsinki&output=embed",
    mapLabel: "Flow-festivaali kartalla",
    recommender: "Suosittelee: Kira Lindqvist"
  }
];

// ── Laske ISO-viikkonumero ──
function getISOWeek(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  const week1 = new Date(d.getFullYear(), 0, 4);
  return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

const currentWeek = 35;

// ── Luo luukku-elementti ──
function makeDoor(entry) {
  const isLocked = entry.num > currentWeek;
  const isOpened = !isLocked && localStorage.getItem('door_' + entry.num) === 'open';

  const door = document.createElement('div');
  door.className = 'door' + (isLocked ? ' locked' : '') + (isOpened ? ' opened' : '');
  door.dataset.week = entry.num;

  door.innerHTML = `
    <span class="open-star">★</span>
    <span class="week-num">${entry.num}</span>
    <span class="door-label">${entry.emoji}<br>${entry.dates.split('–')[0]}</span>
    <span class="lock-icon">${isLocked ? '🔒' : (isOpened ? '' : '🌞')}</span>
  `;

  door.addEventListener('click', () => openModal(entry, isLocked));
  return door;
}

// ── Renderöi kaikki rivit ──
function render() {
  const rows = [
    { id: 'row1', slice: weeks.slice(0, 5) },
    { id: 'row2', slice: weeks.slice(5, 10) },
    { id: 'row3', slice: weeks.slice(10, 13) },
  ];
  rows.forEach(r => {
    const el = document.getElementById(r.id);
    el.innerHTML = '';
    r.slice.forEach(entry => el.appendChild(makeDoor(entry)));
  });
}

// ── Modal-logiikka ──
const overlay  = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('modalClose');
const content  = document.getElementById('modalContent');

function openModal(entry, locked) {
  if (locked) {
    content.innerHTML = `
      <div class="modal-locked-msg">
        <span class="lock-big">🔒</span>
        <div class="modal-week-badge">Viikko ${entry.num}</div>
        <p style="margin-top:14px">Tämä luukku aukeaa viikolla <strong style="color:var(--accent)">${entry.num}</strong>.<br>Pidätä malttisi – jotain kivaa on tulossa! 🌞</p>
      </div>
    `;
  } else {
    localStorage.setItem('door_' + entry.num, 'open');
    content.innerHTML = `
      <div class="modal-week-badge">Viikko ${entry.num} · ${entry.dates}</div>
      <div class="modal-title">${entry.title}</div>
      <div class="modal-desc">${entry.desc}</div>
      <a class="modal-map-btn" href="${entry.map}" target="_blank" rel="noopener">
        🗺️ ${entry.mapLabel}
      </a>
      <div class="modal-recommender">${entry.recommender}</div>
    `;
    render();
  }
  overlay.classList.add('active');
}

function closeModal() {
  overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Käynnistys ──
render();
