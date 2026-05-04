
Claude finished the response
You said: const weeks = [
const weeks = [
  {
    num: 21, dates: "18.5.–24.5.2026",
    img: "Kuvat./CarParade.webp",
    title: "Classic Car Parade",
    desc: "Classic Car Parade kokoaa historiallisia ajoneuvoja Senaatintorille lauantaina 23.5. Tapahtumassa pääsee ihailemaan klassisia autoja kesäisen Helsingin ytimessä, kauniin Helsingin tuomiokirkon edustalla! Tapahtuma on maksuton ja sopii hyvin perheen pienimmillekin.",
    map: "https://maps.google.com/maps?q=Classic+Car+Parade+Helsinki&output=embed",
    mapLabel: "Classic Car Parade kartalla",
    recommender: "Suosittelee: Kalle Kivioja"
  }

miksi kuva ei näy

Show more
09:11
Claude responded: Voisitko jakaa enemmän kontekstia?
Voisitko jakaa enemmän kontekstia? Tarvitsen nähdäkseni:

Missä tämä koodi on käytössä? (React-komponentti, HTML, jokin muu?)
Miten kuva renderöidään? Eli se kohta koodissa, jossa img-kenttää käytetään, esim. <img src={week.img} />.
Yleisimmät syyt miksi kuva ei näy tällaisessa rakenteessa:

Polku on väärin – "Kuvat./CarParade.webp" sisältää pisteen (Kuvat.) joka voi olla kirjoitusvirhe. Pitäisikö se olla "Kuvat/CarParade.webp"?
Tiedosto puuttuu – kuvatiedosto ei ole oikeassa paikassa suhteessa projektin juureen
Iso/pieni kirjain – tiedostonimet ovat merkkikokoriippuvaisia Linuxilla (esim. carparade.webp ≠ CarParade.webp)
Tuon pisteen Kuvat./ kohdalla – onko se tarkoituksellinen vai kirjoitusvirhe?

You said: tuo on githubissa repositoryssä
tuo on githubissa repositoryssä

09:11
Claude responded: Ahh, eli kyse on GitHub Pages tai vastaavasta staattisesta sivusta.
Ahh, eli kyse on GitHub Pages tai vastaavasta staattisesta sivusta. Suurin todennäköinen syy on tuo polku:

js
img: "Kuvat./CarParade.webp"
Tuo piste Kuvat./ on todennäköisesti ongelma. Polun pitäisi olla joko:

"Kuvat/CarParade.webp" – jos Kuvat-kansio on projektin juuressa
"./Kuvat/CarParade.webp" – suhteellinen polku
Tarkista myös GitHubista:

Onko repositoryssä kansio nimeltä Kuvat (iso K)?
Onko tiedosto nimeltä CarParade.webp (isot kirjaimet täsmäävät)?
Onko tiedosto oikeasti commitattu – eli näkyykö se GitHubissa kansiossa?
GitHub on Linux-pohjainen, joten kuvat/carparade.webp ja Kuvat/CarParade.webp ovat eri tiedostoja. Paikallisella Windows-koneella ne saattavat toimia, mutta GitHubissa ei.

You said: miten lisään kuvan githubissa javascript const objektiin?
miten lisään kuvan githubissa javascript const objektiin?

09:19
Claude responded: Githubissa JavaScriptin const-objektiin kuva lisätään base64-muodossa tai URL-linkkinä.
Githubissa JavaScriptin const-objektiin kuva lisätään base64-muodossa tai URL-linkkinä.

Vaihtoehto 1: GitHub raw URL (suositeltava)
Lisää kuva repositoryyn ja käytä suoraa GitHub raw -linkkiä:

js
img: "https://raw.githubusercontent.com/KÄYTTÄJÄNIMI/REPO/main/Kuvat/CarParade.webp"
Löydät oikean URL:n kun menet GitHubissa kuvatiedostoon → klikkaat "Raw" → kopioit osoitepalkin URL:n.

Vaihtoehto 2: Suhteellinen polku (jos GitHub Pages)
Jos sivu toimii GitHub Pagesissa ja kuva on samassa repossa:

js
img: "./Kuvat/CarParade.webp"
Varmista että kansiorakenne on oikein repossa.

Vaihtoehto 3: Base64 (kuva suoraan koodissa)
Pienille kuville voit enkoodata kuvan base64:ksi ja upottaa sen suoraan:

js
img: "data:image/webp;base64,AAECAw..."
Tämä ei ole suositeltavaa isoille kuville koska se paisuttaa kooditiedoston.

Suosittelen Vaihtoehto 1:stä – se on selkein ja toimii varmasti. Mikä on repositorysi nimi ja käyttäjänimesi GitHubissa, niin voin antaa tarkan URL:n?

You said: ei toimi mikään
ei toimi mikään

09:22
Claude responded: Jaetaanpa tämä selvitykseen.
Jaetaanpa tämä selvitykseen. Vastatko muutamaan kysymykseen:

You said: Q: Miten sivu on julkaistu?
Q: Miten sivu on julkaistu?
A: GitHub Pages

Q: Millä tavalla käytät img-kenttää koodissa?
A: Jotenkin muuten / en tiedä

09:22
Claude responded: Okei!
Okei! Jaa koko se kohta koodista missä viikko-objektia käytetään ja kuva näytetään – eli se HTML/JSX-pätkä jossa img tai week.img esiintyy.

Esimerkiksi jotain tällaista etsitään:

html
<img src="...">
tai

js
document.getElementById(...).src = ...
Kun näen sen, pystyn sanomaan tarkalleen mikä on pielessä! 🙂

You said: const weeks = [
const weeks = [
  {
    num: 21, dates: "18.5.–24.5.2026",
    img: "./Kuvat/CarParade.webp",
    title: "Classic Car Parade",
    desc: "Classic Car Parade kokoaa historiallisia ajoneuvoja Senaatintorille lauantaina 23.5. Tapahtumassa pääsee ihailemaan klassisia autoja kesäisen Helsingin ytimessä, kauniin Helsingin tuomiokirkon edustalla! Tapahtuma on maksuton ja sopii hyvin perheen pienimmillekin.",
    map: "https://maps.google.com/maps?q=Classic+Car+Parade+Helsinki&output=embed",
    mapLabel: "Classic Car Parade kartalla",
    recommender: "Suosittelee: Kalle Kivioja"
  }

Show more
09:23
Claude responded: Tässä näkyy vain data, ei se miten kuvaa käytetään.
Tässä näkyy vain data, ei se miten kuvaa käytetään. Jaa myös se kohta koodista missä img renderöidään – etsi tiedostostasi jotain tällaista:

html
<img src="...">
tai jos JavaScript:

js
element.src = ...
element.innerHTML = ...
Tai jaa koko HTML/JS-tiedosto niin näen kerralla koko tilanteen. Voit kopioida sen tähän tai jakaa GitHub-repositorysi linkin. 🙂

You said: <!

// ── DATA: 13 kesäviikkoa ── const weeks = [ { num: 21, dates: "18.5.–24.5.2026", img: "./Kuvat/CarParade.webp", title: "Classic Car Parade", desc: "Classic Car Parade kokoaa historiallisia ajoneuvoja Senaatintorille lauantaina 23.5. Tapahtumassa pääsee ihailemaan klassisia autoja

pasted


:root { --bg: rgb(33, 35, 39); --card: rgb(66, 45, 129); --accent: rgb(157, 139, 229); --header-bg: #3a8fd4; --footer-bg: #5bbde4; --text-dark: #111; --text-light: #fff; } *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } body { font-family:

pasted

<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TRATIn Kesäkalenteri 2026</title>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="kalenteri.css">
</head>
<body>
  <!-- HEADER -->
  <header>
    <h1>TRATIn Kesäkalenteri</h1>
  </header>
  <!-- CALENDAR -->
  <div class="calendar-wrap">
    <div class="week-label">Viikot 21–25 · Toukokuu &amp; Kesäkuu</div>
    <div class="grid-row five" id="row1"></div>
    <div class="week-label">Viikot 26–30 · Kesä &amp; Heinäkuu</div>
    <div class="grid-row five" id="row2"></div>
    <div class="week-label">Viikot 31–33 · Heinä &amp; Elokuu</div>
    <div class="grid-row three" id="row3"></div>
  </div>
  <!-- INFO STRIP -->
  <div class="info-strip">
    <div class="info-block">
      <h3>🗓️ TRATIn kesäloma 2026</h3>
      <p>Tikolaisen kesäloma kestää 13 viikkoa: 18.5.–16.8.2026. Jokaiselle viikolle on oma luukkunsa – avaa se viikon alkaessa!</p>
    </div>
    <div class="info-block">
      <h3>🎯 Kohderyhmä</h3>
      <p>Kalenteri on tehty TRATIlaisille, mutta sopii koko perheelle. Vinkit kattavat konsertit, luontokohteet, liikuntahaasteet ja ilmaistapahtumat Helsingissä.</p>
    </div>
    <div class="info-block">
      <h3>📍 Helsinki &amp; ympäristö</h3>
      <p>Tapahtumapaikkana pääasiassa Helsinki ja lähiympäristö. Karttalinkit vievät suoraan Google Mapsiin – helppo navigoida perille.</p>
    </div>
    <div class="info-block">
      <h3>👥 Tekijät</h3>
      <p>Handmade by Team JKKK 2026. Suositukset tulevat tiimin jäseniltä – jokainen luukku kantaa suosittelijan nimen.</p>
    </div>
  </div>
  <!-- MODAL -->
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal-box" id="modalBox">
      <button class="modal-close" id="modalClose">✕</button>
      <div id="modalContent"></div>
    </div>
  </div>
  <script src="kalenteri.js"></script>
</body>
</html>

Show more
09:24
Claude responded: Nyt näen koko koodin!
Nyt näen koko koodin! Ongelma on selvä: modaalissa ei näytetä kuvaa ollenkaan. Katsotaan openModal-funktiota – siellä ei ole <img>-tagia missään!

Lisäksi kuvapolku ./Kuvat/CarParade.webp toimii GitHub Pagesissa, jos tiedosto on oikeasti commitattu repositoryyn.

Korjaus kalenteri.js-tiedostoon
Etsi openModal-funktiosta tämä kohta:

js
content.innerHTML = `
  <div class="modal-week-badge">Viikko ${entry.num} · ${entry.dates}</div>
  <div class="modal-title">${entry.title}</div>
  <div class="modal-desc">${entry.desc}</div>
Muuta se näin:

js
content.innerHTML = `
  <div class="modal-week-badge">Viikko ${entry.num} · ${entry.dates}</div>
  ${entry.img ? `<img src="${entry.img}" alt="${entry.title}" style="width:100%;border-radius:12px;margin-bottom:14px;object-fit:cover;max-height:200px;">` : ''}
  <div class="modal-title">${entry.title}</div>
  <div class="modal-desc">${entry.desc}</div>
Tuo entry.img ? ... : '' tarkoittaa että kuva näkyy vain jos img-kenttä on määritelty – muille viikoille joilla ei ole kuvaa, ei tule virhettä.

Tarkista myös GitHubista
Varmista että repositoryssäsi on kansio Kuvat ja siellä CarParade.webp – muuten kuva ei lataudu vaikka koodi olisi oikein. Voit tarkistaa tämän menemällä repositorysi sivulle GitHubissa ja katsomalla näkyykö kansio siellä.

You said: voitko muokata tuon tuohon javascript tiedostoon
voitko muokata tuon tuohon javascript tiedostoon

09:26
Claude responded: Sinulla ei ole ladattua tiedostoa – kopioit koodin tekstinä.

Reading the JS file content
Reading the JS file content
Sinulla ei ole ladattua tiedostoa – kopioit koodin tekstinä. Ei hätää, teen muutoksen suoraan tähän!


Created a file, read a file
Created a file, read a file
Tässä on muokattu tiedosto! Ainoa muutos on modaalin kuvaosa – lisäsin tämän rivin modal-week-badge-divin jälkeen:

js
${entry.img ? `<img src="${entry.img}" alt="${entry.title}" style="width:100%;border-radius:12px;margin-bottom:14px;object-fit:cover;max-height:200px;">` : ''}
Korvaa vanha kalenteri.js tällä GitHubissa, ja muista varmistaa että Kuvat/CarParade.webp löytyy repositorystä! 🙂


Kalenteri
JS 
You said: <!

// ── DATA: 13 kesäviikkoa ── const weeks = [ { num: 21, dates: "18.5.–24.5.2026", img: "./Kuvat/CarParade.webp", title: "Classic Car Parade", desc: "Classic Car Parade kokoaa historiallisia ajoneuvoja Senaatintorille lauantaina 23.5. Tapahtumassa pääsee ihailemaan klassisia autoja

pasted


:root { --bg: rgb(33, 35, 39); --card: rgb(66, 45, 129); --accent: rgb(157, 139, 229); --header-bg: #3a8fd4; --footer-bg: #5bbde4; --text-dark: #111; --text-light: #fff; } *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } body { font-family:

pasted

<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TRATIn Kesäkalenteri 2026</title>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="kalenteri.css">
</head>
<body>
  <!-- HEADER -->
  <header>
    <h1>TRATIn Kesäkalenteri</h1>
  </header>
  <!-- CALENDAR -->
  <div class="calendar-wrap">
    <div class="week-label">Viikot 21–25 · Toukokuu &amp; Kesäkuu</div>
    <div class="grid-row five" id="row1"></div>
    <div class="week-label">Viikot 26–30 · Kesä &amp; Heinäkuu</div>
    <div class="grid-row five" id="row2"></div>
    <div class="week-label">Viikot 31–33 · Heinä &amp; Elokuu</div>
    <div class="grid-row three" id="row3"></div>
  </div>
  <!-- INFO STRIP -->
  <div class="info-strip">
    <div class="info-block">
      <h3>🗓️ TRATIn kesäloma 2026</h3>
      <p>Tikolaisen kesäloma kestää 13 viikkoa: 18.5.–16.8.2026. Jokaiselle viikolle on oma luukkunsa – avaa se viikon alkaessa!</p>
    </div>
    <div class="info-block">
      <h3>🎯 Kohderyhmä</h3>
      <p>Kalenteri on tehty TRATIlaisille, mutta sopii koko perheelle. Vinkit kattavat konsertit, luontokohteet, liikuntahaasteet ja ilmaistapahtumat Helsingissä.</p>
    </div>
    <div class="info-block">
      <h3>📍 Helsinki &amp; ympäristö</h3>
      <p>Tapahtumapaikkana pääasiassa Helsinki ja lähiympäristö. Karttalinkit vievät suoraan Google Mapsiin – helppo navigoida perille.</p>
    </div>
    <div class="info-block">
      <h3>👥 Tekijät</h3>
      <p>Handmade by Team JKKK 2026. Suositukset tulevat tiimin jäseniltä – jokainen luukku kantaa suosittelijan nimen.</p>
    </div>
  </div>
  <!-- MODAL -->
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal-box" id="modalBox">
      <button class="modal-close" id="modalClose">✕</button>
      <div id="modalContent"></div>
    </div>
  </div>
  <script src="kalenteri.js"></script>
</body>
</html>

voitko laittaa vielä niin että sijainti näkyy modalissa suoraan google maps osiossa, ei niin että se avaa google maps sovellukse/sivun ja näyttää sieltä sijainnin.

Show more
09:50
Claude responded: Lisäsin myös modal-map-label -luokan CSS:ään – lisää tämä kalenteri.

Created 2 files, ran a command
Created 2 files, ran a command
Lisäsin myös modal-map-label -luokan CSS:ään – lisää tämä kalenteri.css-tiedostoon .modal-recommender-säännön yläpuolelle:

css
.modal-map-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 4px;
}

Presented file
Presented file
Muutos oli yksinkertainen: nappi-linkki (<a class="modal-map-btn">) korvattiin <iframe>-elementillä, joka näyttää kartan suoraan modaalin sisällä. Kartat toimivat koska map-kentässä on jo valmiiksi &output=embed -parametri. 🗺️


Kalenteri
JS 
You said: <!

:root { --bg: rgb(33, 35, 39); --card: rgb(66, 45, 129); --accent: rgb(157, 139, 229); --header-bg: #3a8fd4; --footer-bg: #5bbde4; --text-dark: #111; --text-light: #fff; } *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } body { font-family:

pasted


// ── DATA: 13 kesäviikkoa ── const weeks = [ { num: 21, dates: "18.5.–24.5.2026", img: "./Kuvat/CarParade.webp", title: "Classic Car Parade", desc: "Classic Car Parade kokoaa historiallisia ajoneuvoja Senaatintorille lauantaina 23.5. Tapahtumassa pääsee ihailemaan klassisia autoja

pasted

<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TRATIn Kesäkalenteri 2026</title>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="kalenteri.css">
</head>
<body>
  <!-- HEADER -->
  <header>
    <h1>TRATIn Kesäkalenteri</h1>
  </header>
  <!-- CALENDAR -->
  <div class="calendar-wrap">
    <div class="week-label">Viikot 21–25 · Toukokuu &amp; Kesäkuu</div>
    <div class="grid-row five" id="row1"></div>
    <div class="week-label">Viikot 26–30 · Kesä &amp; Heinäkuu</div>
    <div class="grid-row five" id="row2"></div>
    <div class="week-label">Viikot 31–33 · Heinä &amp; Elokuu</div>
    <div class="grid-row three" id="row3"></div>
  </div>
  <!-- INFO STRIP -->
  <div class="info-strip">
    <div class="info-block">
      <h3>🗓️ TRATIn kesäloma 2026</h3>
      <p>Tikolaisen kesäloma kestää 13 viikkoa: 18.5.–16.8.2026. Jokaiselle viikolle on oma luukkunsa – avaa se viikon alkaessa!</p>
    </div>
    <div class="info-block">
      <h3>🎯 Kohderyhmä</h3>
      <p>Kalenteri on tehty TRATIlaisille, mutta sopii koko perheelle. Vinkit kattavat konsertit, luontokohteet, liikuntahaasteet ja ilmaistapahtumat Helsingissä.</p>
    </div>
    <div class="info-block">
      <h3>📍 Helsinki &amp; ympäristö</h3>
      <p>Tapahtumapaikkana pääasiassa Helsinki ja lähiympäristö. Karttalinkit vievät suoraan Google Mapsiin – helppo navigoida perille.</p>
    </div>
    <div class="info-block">
      <h3>👥 Tekijät</h3>
      <p>Handmade by Team JKKK 2026. Suositukset tulevat tiimin jäseniltä – jokainen luukku kantaa suosittelijan nimen.</p>
    </div>
  </div>
  <!-- MODAL -->
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal-box" id="modalBox">
      <button class="modal-close" id="modalClose">✕</button>
      <div id="modalContent"></div>
    </div>
  </div>
  <script src="kalenteri.js"></script>
</body>
</html>

tee tästä koodista alkeellisempi. javascript koodit ei saa näyttää noin ammattimaisilta, mutta niiden pitää silti toimia samanlailla. käytä nimissä suomalaisia nimityksiä. älä muokkaa teemaa kuitenkaan.

Show more
10:02
Claude responded: Tässä yksinkertaistettu versio – koodi toimii samoin mutta on kirjoitettu selkeämmin suomalaisilla muuttujanmillä: Tässä muutokset mitä tein:
Tässä yksinkertaistettu versio – koodi toimii samoin mutta on kirjoitettu selkeämmin suomalaisilla muuttujanmillä:


Ran a command, created a file, read a file
Ran a command, created a file, read a file
Tässä muutokset mitä tein:

weeks → viikot, num → numero, img → kuva, title → otsikko, desc → kuvaus, map → kartta jne.
makeDoor → luoLuukku, render → piirraKalenteri, openModal → avaaIkkuna, closeModal → suljeIkkuna
overlay → peite, closeBtn → suljeNappi, content → sisalto
const/let → var, nuolifunktiot → tavalliset function-määrittelyt
Poistin turhat kommentit ja yksinkertaistin silmukat selkeämmiksi for-lauseiksi
Toimii täsmälleen samoin kuin ennen! 🙂


Kalenteri
JS 
You said: älä käytä var
älä käytä var

10:04
Claude responded: Selvä, käytetään const ja let – mutta pidetään muuten koodi yksinkertaisena ja suomalaisilla nimillä.
Selvä, käytetään const ja let – mutta pidetään muuten koodi yksinkertaisena ja suomalaisilla nimillä.


Ran a command, created a file, read a file
Ran a command, created a file, read a file
Tehty! Nyt käytetään const muuttujille jotka eivät muutu, ja let niille jotka voivat muuttua (kuten kuvaHtml ja silmukoiden i). Muuten koodi on sama kuin edellinen versio. 🙂


Kalenteri
JS 

Want to be notified when Claude responds?



Claude is AI and can make mistakes. Please double-check responses.
Kalenteri · JS
Copy

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
 
// Nykyinen viikkonumero – vaihda tätä kun kalenteri etenee
const nykyinenViikko = 35;
 
// Tehdään yksi luukku-kortti
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
 
