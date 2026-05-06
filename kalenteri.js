


// Kesäviikkojen tiedot
const viikot = [
  {
    numero: 21,
    paivamaarat: "18.5.–24.5.2026",
    kuva: "./Kuvat/CarParade.webp",
    otsikko: "Classic Car Parade",
    kuvaus: "Classic Car Parade kokoaa historiallisia ajoneuvoja Senaatintorille lauantaina 23.5. Tapahtumassa pääsee ihailemaan klassisia autoja kesäisen Helsingin ytimessä, kauniin Helsingin tuomiokirkon edustalla! Tapahtuma on maksuton ja sopii hyvin perheen pienimmillekin.",
    kartta: "https://maps.google.com/maps?q=Classic+Car+Parade+Helsinki&output=embed",
    karttateksti: "Classic Car Parade kartalla",
    suosittelija: "Suosittelee: Kalle Kivioja"
  },
  {
    numero: 22,
    paivamaarat: "25.5.–31.5.2026",
    kuva: "./Kuvat/Suomenlinna.webp",
    otsikko: "Suomenlinna",
    kuvaus: "Suomenlinna on kesä-Helsingin must visit –kohde! Suomenlinnassa pääset kulkemaan historiallisten linnoitusten läpi tunneleita pitkin (muistakaa pakata taskulamput!), sekä nauttimaan merellisistä saaristomaisemista. Suomenlinnasta löytyy uimarantaa ja leikkipuistoa, mutta myös paljon museoita ja muuta tekemistä sisätiloissa, mikäli kesäsade yllättää.",
    kartta: "https://maps.google.com/maps?q=Suomenlinna+Helsinki&output=embed",
    karttateksti: "Suomenlinna kartalla",
    suosittelija: "Suosittelee: Kira Lindqvist"
  },
  {
    numero: 23,
    paivamaarat: "1.6.–7.6.2026",
    kuva: "./Kuvat/BjornBorgMarathon.webp",
    otsikko: "Björn Borg Helsinki Half Marathon",
    kuvaus: "Juoksusta innostuneiden mahdollisuus pistää oma kunto koetukselle! Helsinki Half Marathon järjestetään lauantaina 6.6. ja se kulkee Helsingin keskustaa ja sen rantaviivaa pitkin, joten juoksun aikana pääsee nauttimaan kesä-Helsingin maisemista parhaimmillaan. Juoksutapahtuman huumaan voi tietysti osallistua myös juoksijoita sivusta kannustaen.",
    kartta: "https://maps.google.com/maps?q=Helsinki+Half+Marathon&output=embed",
    karttateksti: "Björn Borg Helsinki Half Marathon kartalla",
    suosittelija: "Suosittelee: Jony Katajainen"
  },
  {
    numero: 24,
    paivamaarat: "8.6.–14.6.2026",
    kuva: "./Kuvat/HelsinkiPaiva.webp",
    otsikko: "Helsinki-päivä",
    kuvaus: "Helsingin syntymäpäivää juhlitaan perjantaina 12.6. Silloin kaupunki täyttyy erilaisista kulttuuritapahtumista, ja monet kaupungin palvelutahot järjestävät opastuskierroksia ja avoimia ovia.",
    kartta: "https://maps.google.com/maps?q=Espan+lava+Helsinki&output=embed",
    karttateksti: "Helsinki-päivä kartalla",
    suosittelija: "Suosittelee: Kasper Jantunen"
  },
  {
    numero: 25,
    paivamaarat: "15.6.–21.6.2026",
    kuva: "./Kuvat/Juhannus.webp",
    otsikko: "Juhannuskokkojuhlat Seurasaaressa",
    kuvaus: "Juhannus on keskikesän juhla, johon kuuluu yötön yö, hyvä ruoka ja juhannuskokko! Helsingissä kokkoja pääsee ihailemaan mm. Seurasaaren idyllisissä ja perinteikkäissä maisemissa juhannusaattona perjantaina 19.6.",
    kartta: "https://maps.google.com/maps?q=Seurasaari+Helsinki&output=embed",
    karttateksti: "Seurasaari kartalla",
    suosittelija: "Suosittelee: Kalle Kivioja"
  },
  {
    numero: 26,
    paivamaarat: "22.6.–28.6.2026",
    kuva: "./Kuvat/HelsinkiPride.webp",
    otsikko: "Pride-viikko",
    kuvaus: "Pride-viikkoa vietetään 22.–28.6., ja silloin Helsingin valtaavat sateenkaaren värit! Viikko huipentuu lauantaina 27.6. järjestettävään Pride-kulkueeseen. Kulkueeseen on kuka tahansa tervetullut osallistumaan juuri omana itsenään. Nappaa mukaan sateenkaarilippu ja lähde kiertämään Helsingin keskustaa tärkeän sanoman puolesta!",
    kartta: "https://maps.google.com/maps?q=Senaatintori+Helsinki&output=embed",
    karttateksti: "Pride-kulkue kartalla",
    suosittelija: "Suosittelee: Kira Lindqvist"
  },
  {
    numero: 27,
    paivamaarat: "29.6.–5.7.2026",
    kuva: "./Kuvat/Korkeasaari.webp",
    otsikko: "Korkeasaari",
    kuvaus: "Korkeasaari on täydellinen kesäretkikohde koko perheelle! Saareen pääsee kätevästi julkisella liikenteellä, esimerkiksi raitiovaunulla. Korkeasaaressa kierrellessä pääsee tutustumaan monenlaisiin eläimiin, ja nälän yllättäessä saaren monet ravintolat ja kahvilat palvelevat.",
    kartta: "https://maps.google.com/maps?q=Korkeasaari+Helsinki&output=embed",
    karttateksti: "Korkeasaari kartalla",
    suosittelija: "Suosittelee: Jony Katajainen"
  },
  {
    numero: 28,
    paivamaarat: "6.7.–12.7.2026",
    kuva: "./Kuvat/HelsinkiCup.webp",
    otsikko: "HesaCup",
    kuvaus: "HesaCup kokoaa Helsinkiin vuosittain tuhansia junioreiden jalkapallojoukkueita ympäri maailmalta. Tänä vuonna HesaCup järjestetään 6.–11.7. Otteluita pelataan ympäri Helsinkiä, ja niihin on maksuton pääsy.",
    kartta: "https://maps.google.com/maps?q=Käpylän+liikuntapuisto+Helsinki&output=embed",
    karttateksti: "Käpylän liikuntapuisto kartalla",
    suosittelija: "Suosittelee: Kasper Jantunen"
  },
  {
    numero: 29,
    paivamaarat: "13.7.–19.7.2026",
    kuva: "./Kuvat/HietaniemenRanta.webp",
    otsikko: "Rantapäivä Hietaniemessä",
    kuvaus: "Välillä lomalla pitää myös loikoilla hyvässä seurassa, ja siihen sopii päivä esimerkiksi Hietaniemen uimarannalla! Hietsussa pääsee uimaan meressä ja makoilemaan auringossa, mutta myös aktiviteetteja kaipaaville löytyy tekemistä: rantalentopalloa, ulkokuntosalia, padelia ja muuta hauskaa.",
    kartta: "https://maps.google.com/maps?q=Hietaniemen+uimaranta+Helsinki&output=embed",
    karttateksti: "Hietaniemen ranta kartalla",
    suosittelija: "Suosittelee: Kalle Kivioja"
  },
  {
    numero: 30,
    paivamaarat: "20.7.–26.7.2026",
    kuva: "./Kuvat/SuuretOluet.webp",
    otsikko: "Suuret oluet, pienet panimot",
    kuvaus: "Janottaako? Suuret oluet, pienet panimot –festivaali kerää kotimaiset pienpanimot Helsingin keskustaan Rautatientorille 22.–25.7. Täällä pääset tutustumaan uusiin makumaailmoihin, tai nauttimaan tuttua suosikkioluttasi, muiden olutintoilijoiden keskuudessa.",
    kartta: "https://maps.google.com/maps?q=Rautatientori+Helsinki&output=embed",
    karttateksti: "Rautatientori kartalla",
    suosittelija: "Suosittelee: Kira Lindqvist"
  },
  {
    numero: 31,
    paivamaarat: "27.7.–2.8.2026",
    kuva: "./Kuvat/Weekend.webp",
    otsikko: "Weekend-festivaali",
    kuvaus: "Weekend –festivaali on elektronisen musiikin ystävien kesän kohokohta! Tänä vuonna Weekend järjestetään pe-la 31.7.–1.8. Espoon Vermossa, ja esiintyjälistalta löytyy esimerkiksi Martin Garrix.",
    kartta: "https://maps.google.com/maps?q=Vermon+tapahtumapuisto+Helsinki&output=embed",
    karttateksti: "Vermon tapahtumapuisto kartalla",
    suosittelija: "Suosittelee: Jony Katajainen"
  },
  {
    numero: 32,
    paivamaarat: "3.8.–9.8.2026",
    kuva: "./Kuvat/Haltiala.webp",
    otsikko: "Haltialan kotieläintarha",
    kuvaus: "Haltialan kotieläintarha on täydellinen kesäretkikohde etenkin lapsiperheille. Tilalla pääsee katsomaan lehmiä, lampaita ja muita kotieläimiä, ja nauttimaan maatilan kodikkaasta tunnelmasta. Tilan lähipelloille pääsee myös poimimaan herneitä ja kukkia.",
    kartta: "https://maps.google.com/maps?q=Haltialan+kotieläintarha+Helsinki&output=embed",
    karttateksti: "Haltialan kotieläintarha kartalla",
    suosittelija: "Suosittelee: Kalle Kivioja"
  },
  {
    numero: 33,
    paivamaarat: "10.8.–16.8.2026",
    kuva: "./Kuvat/Flow.webp",
    otsikko: "Flow-festivaali",
    kuvaus: "Flow-festivaali on yksi Helsingin kulttitapahtumista! Maailmankuulu musiikin ja taiteen festivaali kerää Suvilahteen vuosittain lähes 100 000 kävijää. Tänä vuonna festivaali järjestetään pe-su 14.–16.8. - täydellinen kesäloman huipennus!",
    kartta: "https://maps.google.com/maps?q=Suvilahti+Helsinki&output=embed",
    karttateksti: "Suvilahti kartalla",
    suosittelija: "Suosittelee: Kira Lindqvist"
  }
];

// Nykyinen viikkonumero, vaihda tätä kun kalenteri etenee const nykyinenViikko = getISOWeek(new Date()); const nykyinenViikko = 35;
const nykyinenViikko = 35;

// Tehdään yksi luukkukortti
function luoLuukku(viikko) {
  const onLukittu = viikko.numero > nykyinenViikko;
  const onAvattu = !onLukittu && localStorage.getItem("luukku_" + viikko.numero) === "auki";

  const luukku = document.createElement("div");
  luukku.className = "door" + (onLukittu ? " locked" : "") + (onAvattu ? " opened" : "");

  const alkupaiva = viikko.paivamaarat.split("–")[0];
  const kuvake = onLukittu ? "🔒" : (onAvattu ? "" : "🌞");

  luukku.innerHTML =
    '<span class="open-star">★</span>' +
    '<span class="week-num">' + viikko.numero + "</span>" +
    '<span class="door-label">' + alkupaiva + "</span>" +
    '<span class="lock-icon">' + kuvake + "</span>";

  luukku.addEventListener("click", function () {
    avaaIkkuna(viikko, onLukittu);
  });

  return luukku;
}

// Piirretään kaikki luukut ruudukkoon
function piirraKalenteri() {
  const rivi1 = document.getElementById("row1");
  const rivi2 = document.getElementById("row2");
  const rivi3 = document.getElementById("row3");

  rivi1.innerHTML = "";
  rivi2.innerHTML = "";
  rivi3.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    rivi1.appendChild(luoLuukku(viikot[i]));
  }
  for (let i = 5; i < 10; i++) {
    rivi2.appendChild(luoLuukku(viikot[i]));
  }
  for (let i = 10; i < 13; i++) {
    rivi3.appendChild(luoLuukku(viikot[i]));
  }
}

// Haetaan modal-elementit sivulta
const peite = document.getElementById("modalOverlay");
const suljeNappi = document.getElementById("modalClose");
const sisalto = document.getElementById("modalContent");

// Avataan modal-ikkuna
function avaaIkkuna(viikko, onLukittu) {
  if (onLukittu) {
    sisalto.innerHTML =
      '<div class="modal-locked-msg">' +
      '<span class="lock-big">🔒</span>' +
      '<div class="modal-week-badge">Viikko ' + viikko.numero + "</div>" +
      '<p style="margin-top:14px">Tämä luukku aukeaa viikolla <strong style="color:var(--accent)">' + viikko.numero + "</strong>.<br>Pidätä malttisi – jotain kivaa on tulossa! 🌞</p>" +
      "</div>";
  } else {
    localStorage.setItem("luukku_" + viikko.numero, "auki");

    let kuvaHtml = "";
    if (viikko.kuva) {
      kuvaHtml = '<img src="' + viikko.kuva + '" alt="' + viikko.otsikko + '" style="width:100%;border-radius:12px;margin-bottom:14px;object-fit:cover;max-height:200px;">';
    }

    sisalto.innerHTML =
      '<div class="modal-week-badge">Viikko ' + viikko.numero + " · " + viikko.paivamaarat + "</div>" +
      kuvaHtml +
      '<div class="modal-title">' + viikko.otsikko + "</div>" +
      '<div class="modal-desc">' + viikko.kuvaus + "</div>" +
      '<div class="modal-map-label">🗺️ ' + viikko.karttateksti + "</div>" +
      '<iframe src="' + viikko.kartta + '" width="100%" height="200" style="border:0;border-radius:12px;margin-top:8px;display:block;" allowfullscreen="" loading="lazy"></iframe>' +
      '<div class="modal-recommender">' + viikko.suosittelija + "</div>";

    piirraKalenteri();
  }

  peite.classList.add("active");
}

// Suljetaan modal-ikkuna
function suljeIkkuna() {
  peite.classList.remove("active");
}

suljeNappi.addEventListener("click", suljeIkkuna);
peite.addEventListener("click", function (tapahtuma) {
  if (tapahtuma.target === peite) suljeIkkuna();
});
document.addEventListener("keydown", function (tapahtuma) {
  if (tapahtuma.key === "Escape") suljeIkkuna();
});

// Käynnistetään kalenteri
piirraKalenteri();
