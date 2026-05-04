let slides = document.querySelectorAll(".slide");
let current = 0;
let currentLang = "kz";
/* TEXT */
const t = {
  kz:{
    M1:"Басты бет",
    M2:"Турлар жайлы",
    M21:"ҚАЗІРГІ ШЫМКЕНТ",
    M22:"ҚАЛАНЫҢ ӘІО",
    M23:"ТАНЫМДЫҚ ТУР",
    M24:"ТАРИХИ ҚАЛА",
    M25:"ҚАЖЫЛЫҚ ҚАЛАСЫ",
    M26:"ЕСКЕ АЛУ ЖӘНЕ МӘДЕНИЕТ БАҒЫТЫ",
    M3:"Біз туралы",
    M4:"Байланыс",
    Poroda:"🌦️ Ауа райы",
    marshut:"📍 Маршрут",
    C1:"📍КАРТАДАН ҚАРАУ",
s1_title:"ҚАЖЫЛЫҚ ҚАЛАСЫ",
s1_text:"№5 Тур",
s2_title:"Ибрагим ата кесенесі",
s2_text:"Ибрагим ата кесенесі – Қожа Ахмет Ясауидің әкесі жерленген қасиетті орын. XI ғасырда Сайрам ислам мәдениетінің ірі орталығы болған. Кесене қарапайым сәулетке ие болғанымен, оның рухани маңызы өте терең. Бұл жерге келген адамдар тарихи атмосфераны сезініп, рухани тыныштық таба алады.",
s3_title:"Қожа Салық кесенесі",
s3_text:"Қожа Салық кесенесі XIX ғасырда салынған тарихи ескерткіш. Оның ерекше қос күмбезді құрылымы және дәстүрлі өрнектері сәулет өнерінің әсем үлгісін көрсетеді. Бұл нысан өңірдің діни және мәдени мұрасының маңызды бөлігі болып табылады.",
s4_title:"Қызыр мұнарасы",
s4_text:"Қызыр мұнарасы – Сайрамдағы көне сәулет ескерткіштерінің бірі. Ол күйдірілген кірпіштен тұрғызылған және бұрын биіктігі 10 метрден асқан. Қазіргі таңда мұнара жартылай сақталғанымен, ол тарихи әрі зиярат ету орны ретінде маңызды.",
s5_title:"Нұр Сайрам базары",
s5_text:"«Нұр Сайрам» базары – аудан тұрғындарына қызмет көрсететін ірі сауда орталығы. Мұнда азық-түлік, киім-кешек және түрлі тұрмыстық тауарлар кең таңдауда ұсынылады. Күнделікті сауда жасауға өте қолайлы орын.",
s6_title:"Қарашаш ана кесенесі",
s6_text:"Қарашаш ана кесенесі – Қожа Ахмет Ясауидің анасына арналған қасиетті орын. Ол өзінің даналығы мен мейірімділігімен танылған тұлға. Кесене ортағасырлық сәулет үлгісін сақтап, рухани тазалық пен аналық қамқорлықтың символы болып саналады.",
s7_title:"Мірәлі баба кесенесі",
s7_text:"Мірәлі баба кесенесі XIX ғасырда салынған. Үлкен күмбезімен ерекшеленетін бұл нысан Сайрамдағы көне зират аумағында орналасқан. Бұл жер зиярат етушілер үшін маңызды рухани орталық болып табылады.",
s8_title:"Әбділ Әзіз Баба кесенесі",
s8_text:"Әбділ Әзіз Баба кесенесі – VIII ғасырдан бастау алатын көне діни нысан. Ол ислам дінін таратушы әулие ретінде белгілі. Халық арасында ерекше құрметке ие қасиетті орындардың бірі.",
s9_title:"Өзбек драма театры",
s9_text:"Өзбек драма театры – 2003 жылы ашылған мәдени орталық. Мұнда өзбек тіліндегі классикалық және заманауи қойылымдар сахналанады. Театр аймақтың мәдени өмірінде маңызды рөл атқарады.",
s10_title:"Сайрам мұражайы",
s10_text:"Сайрам тарихи-өлкетану мұражайы өңірдің бай тарихы мен мәдениетін таныстырады. Мұнда археологиялық және этнографиялық экспозициялар қойылған. Келушілер көне Сайрамның өмірімен жақынырақ таныса алады.",
s11_title:"Наурыз саябағы",
s11_text:"«Наурыз» саябағы – 1991 жылы ашылған демалыс аймағы. Кейін қайта жаңартылып, заманауи келбетке ие болды. Мұнда серуендеуге, демалуға және табиғатты тамашалауға барлық жағдай жасалған."
  },
  ru:{
    M1:"Главная",
    M2:"О турах",
    M21:"СОВРЕМЕННЫЙ ШЫМКЕНТ",
    M22:"ГОРОДСКОЙ АДО",
    M23:"ПОЗНАВАТЕЛЬНЫЙ ТУР",
    M24:"ИСТОРИЧЕСКИЙ ГОРОД",
    M25:"СВЯЩЕННЫЙ ГОРОД",
    M26:"ПАМЯТЬ И КУЛЬТУРА",
    M3:"О нас",
    M4:"Контакты",
    Poroda:"🌦️Погода",
    marshut:"📍 Маршрут",
    C1:"📍СМОТРЕТЬ НА КАРТЕ",
s1_title:"ПАЛОМНИЧЕСКИЙ ГОРОД",
s1_text:"№5 Тур ",
s2_title:"Мавзолей Ибрагим ата",
s2_text:"Мавзолей Ибрагим ата – священное место, где похоронен отец Яссауи. В XI веке Сайрам был крупным центром исламской культуры. Несмотря на простую архитектуру, место обладает глубоким духовным значением.",
s3_title:"Мавзолей Кожа Салык",
s3_text:"Мавзолей Кожа Салык построен в XIX веке. Отличается двойным куполом и традиционным оформлением. Является важным историко-культурным объектом региона.",
s4_title:"Башня Кызыр",
s4_text:"Башня Кызыр – древний архитектурный памятник Сайрама. Ранее её высота превышала 10 метров. Сегодня это историческое и духовное место для посещения.",
s5_title:"Базар Нур Сайрам",
s5_text:"Базар «Нур Сайрам» – крупный торговый центр. Здесь представлен широкий ассортимент товаров, включая продукты и одежду. Удобен для ежедневных покупок.",
s6_title:"Мавзолей Карашаш ана",
s6_text:"Мавзолей Карашаш ана посвящён матери Яссауи. Она была известна своей мудростью и добротой. Это место символизирует духовность и материнскую заботу.",
s7_title:"Мавзолей Мирали баба",
s7_text:"Мавзолей Мирали баба построен в XIX веке. Расположен на территории старого кладбища и является местом паломничества.",
s8_title:"Мавзолей Абдиль Азиз баба",
s8_text:"Мавзолей Абдиль Азиз баба – древний религиозный памятник VIII века. Он был проповедником ислама и почитается как святой.",
s9_title:"Узбекский драмтеатр",
s9_text:"Узбекский драмтеатр открыт в 2003 году. Здесь проходят спектакли на узбекском языке. Театр играет важную роль в культурной жизни региона.",
s10_title:"Музей Сайрама",
s10_text:"Музей Сайрама знакомит с историей, археологией и культурой региона. Экспозиции позволяют глубже понять прошлое города.",
s11_title:"Парк Наурыз",
s11_text:"Парк «Наурыз» открыт в 1991 году и позже обновлён. Это современное место для отдыха и прогулок на свежем воздухе."
  },
  en:{
    M1:"Home",
    M2:"About tours",
    M21:"MODERN SHYMKENT",
    M22:"CITY ADMINISTRATIVE CENTER",
    M23:"EDUCATIONAL TOUR",
    M24:"HISTORICAL CITY",
    M25:"SACRED CITY",
    M26:"MEMORY & CULTURE",
    M3:"About us",
    M4:"Contact",
    Poroda:"🌦️ Weather",
    marshut:"📍 Route",
    C1:"📍VIEW ON MAP",
s1_title:"PILGRIMAGE CITY",
s1_text:"№5 Tour",
s2_title:"Ibragim Ata Mausoleum",
s2_text:"The Ibragim Ata Mausoleum is a sacred site where the father of Yasawi is buried. In the 11th century, Sairam was a major Islamic center. Despite its simple structure, it holds deep spiritual significance.",
s3_title:"Khoja Salyk Mausoleum",
s3_text:"The Khoja Salyk Mausoleum was built in the 19th century. It features a unique double-dome design and represents an important cultural heritage site.",
s4_title:"Kyzyr Tower",
s4_text:"Kyzyr Tower is an ancient architectural monument in Sairam. It once exceeded 10 meters in height. Today it remains an important historical and spiritual site.",
s5_title:"Nur Sairam Bazaar",
s5_text:"Nur Sairam Bazaar is a large shopping area offering a wide range of goods including food and clothing. It is convenient for daily shopping.",
s6_title:"Karashash Ana Mausoleum",
s6_text:"Karashash Ana Mausoleum is dedicated to the mother of Yasawi. She was known for her wisdom and kindness. The site symbolizes spirituality and maternal care.",
s7_title:"Mirali Baba Mausoleum",
s7_text:"Mirali Baba Mausoleum, built in the 19th century, is located in an old cemetery and serves as a place of pilgrimage.",
s8_title:"Abdil Aziz Baba Mausoleum",
s8_text:"Abdil Aziz Baba Mausoleum is an ancient religious site from the 8th century. He was known as a respected Islamic preacher.",
s9_title:"Uzbek Drama Theatre",
s9_text:"The Uzbek Drama Theatre was opened in 2003. It hosts performances in the Uzbek language and contributes to regional culture.",
s10_title:"Sairam Museum",
s10_text:"The Sairam Museum presents the history, archaeology, and culture of the region. Visitors can explore the city's rich past.",
s11_title:"Nauryz Park",
s11_text:"Nauryz Park, opened in 1991 and later renovated, is a modern place for relaxation and walking.",
}
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/kz2.mp3",ru:"audio/ru2.mp3",en:"audio/en2.mp3"}
};
function showSlide(i){
  slides.forEach(s=>s.classList.remove("active"));
  slides[i].classList.add("active");
  current=i;
  location.hash=slides[i].id;
  updateAudio();
}
function next(){showSlide((current+1)%slides.length);}
function prev(){showSlide((current-1+slides.length)%slides.length);}
/* AUDIO FIX */
function updateAudio(){
  let audio = slides[current].querySelector(".slide-audio");
  // егер аудио жоқ болса → тоқтату
  if(!audio) return;
  let src = audioData[current]?.[currentLang];
  if(!src){
    audio.pause();
    return;
  }
  audio.src = src;
  audio.load();
}
/* LANG */
function setLang(lang){
  currentLang=lang;
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText=t[lang][el.dataset.key];
  });
  updateAudio();
}
/* MAP */
function openMap(lat, lng){
  window.open(`https://2gis.kz/search/${lat},${lng}`);
}
/* HASH */
function openFromHash(){
  let h=location.hash.replace("#","");
  let i=[...slides].findIndex(s=>s.id===h);
  if(i>=0) showSlide(i); else showSlide(0);
}
/* START */
setLang("kz");
openFromHash();
window.addEventListener("hashchange",openFromHash);




//menu select
window.addEventListener("scroll", function(){
  let header = document.getElementById("header");
  if(!header) return; // 🔥 осыны қос
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// MENU OPEN
function openMenu(){
  document.getElementById("menu").classList.add("active");
}
// MENU CLOSE
function closeMenu(){
  document.getElementById("menu").classList.remove("active");
}
// SUBMENU TOGGLE
function toggle(el){
  el.classList.toggle("open");
}
let interval;
function openW(){
  document.getElementById("sheet").classList.add("active");
  document.getElementById("bg").classList.add("active");
  loadWeather();
  clearInterval(interval);
  interval = setInterval(loadWeather,600000);
}
function closeW(){
  document.getElementById("sheet").classList.remove("active");
  document.getElementById("bg").classList.remove("active");
}
function getHour(){
  return new Date().getHours();
}
async function loadWeather(){
  const url="https://api.open-meteo.com/v1/forecast?latitude=42.32&longitude=69.59&hourly=temperature_2m&current_weather=true&forecast_days=1";
  const res=await fetch(url);
  const data=await res.json();
  const temps=data.hourly.temperature_2m.slice(0,24);
  const current=data.current_weather.temperature;
  const code=data.current_weather.weathercode;
  let icon="🌤️",text="Ауа райы";
  if(code===0){icon="☀️";text="Ашық";}
  else if(code<=3){icon="☁️";text="Бұлтты";}
  else if(code<=67){icon="🌧️";text="Жаңбыр";}
  document.getElementById("now").innerText=
  icon+" Қазір: "+current+"°C • "+text;
  const box=document.getElementById("hours");
  box.innerHTML="";
  let now=getHour();
  temps.forEach((t,i)=>{
    box.innerHTML+=`
      <div class="hour ${i===now?'active':''}">
        <div>${i}:00</div>
        <div>🌡️</div>
        <div>${Math.round(t)}°</div>
      </div>
    `;
  });
}
//sagat obnova
function updateClock(){
  const now = new Date();
  let h = String(now.getHours()).padStart(2,'0');
  let m = String(now.getMinutes()).padStart(2,'0');
  let s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById("clock").innerText = `${h}:${m}:${s}`;
  let options = { year:'numeric', month:'long', day:'numeric' };
  document.getElementById("date").innerText =
    now.toLocaleDateString('kk-KZ', options);
}
setInterval(updateClock, 1000);
updateClock();


let map;
let isLoaded = false;
function openRoute(){
document.getElementById("mapModal").style.display = "flex";
DG.then(function(){
if(!map){
    map = DG.map('map', {
    center: [42.318917,69.781914],
    zoom: 15
});

const points = [
    {lat: 42.318917, lng: 69.781914, img: "images/tur5.1.jpg", text: "Ибрагим ата кесенесі"},
    {lat: 42.301646, lng: 69.768252, img: "images/tur5.2.jpg", text: "Қожа Салық кесенесі"},
    {lat: 42.298766, lng: 69.761646, img: "images/tur5.3.jpg", text: "Қызыр мұнарасы"},
    {lat: 42.298489, lng: 69.75886, img: "images/tur5.4.jpg", text:"«Нұр Сайрам базары"},
    {lat: 42.299343, lng: 69.757266, img: "images/tur5.5.JPG", text:"Қарашаш ана кесенесі"},
    {lat: 42.299678, lng: 69.754497, img: "images/tur5.6.jpg", text: "Мірәлі баба кесенесі"},
    {lat: 42.305969, lng: 69.758066, img: "images/tur5.7.jpg", text: " Әбділ Әзіз Баба кесенесі"},
    {lat: 42.309218, lng: 69.759529, img: "images/tur5.8.jpg", text: "Өзбек драма театры"},
    {lat: 42.309537, lng: 69.75871, img: "images/tur5.9.jpg", text: "Сайрам мұражайы"},
    {lat: 42.30929,  lng: 69.758153, img: "images/tur5.10.jpg", text: "Наурыз саябағы"},
    ];
    let markers = [];
    let markersList = [];
      points.forEach(p => {
        const icon = DG.divIcon({
          html: `
            <div class="marker-wrapper">
              <div class="circle-marker" style="cursor:pointer;">
                <img src="${p.img}">
              </div>
            </div>
          `,
          className: '',
          iconSize: [60, 60]
        });
        const marker = DG.marker([p.lat, p.lng], { icon }).addTo(map);
        // 🔥 CLICK → POPUP
        marker.on('click', function () {
          marker.bindPopup(`
            <div style="text-align:center; max-width:200px;">
              <img src="${p.img}" style="width:200px;height:140px;object-fit:cover;border-radius:10px;">
              <b>${p.text}</b>
            </div>
          `).openPopup();
        });
        markers.push([p.lat, p.lng]);
        markersList.push({ marker, img: p.img });
      });
      // 🔵 ROUTE LINE (1 рет қана)
      const polyline = DG.polyline(markers, {
        color: '#1e90ff',
        weight: 6
      }).addTo(map);
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = x => x * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
// 📍 TEXT LABEL ҚОСУ
for (let i = 0; i < markers.length - 1; i++) {
  const [lat1, lng1] = markers[i];
  const [lat2, lng2] = markers[i + 1];
  let dist = getDistance(lat1, lng1, lat2, lng2);
  // 📌 midpoint
  let midLat = (lat1 + lat2) / 2;
  let midLng = (lng1 + lng2) / 2;
  // 🔥 TEXT ICON (метка емес, текст)
  const textIcon = DG.divIcon({
    html: `
      <div style="
        background:#070f25;
        color:#22c55e;
        padding:4px 4px;
        border-radius:8px;
        font-size:10px;
        font-weight:600;
        box-shadow:0 0 10px rgba(0,0,0,0.5);
      ">
        ${dist.toFixed(2)} км
      </div>
    `,
    className: '',
    iconSize: [80, 20]
  });
  DG.marker([midLat, midLng], { icon: textIcon }).addTo(map);
}
      // 🚶 ICON
      const personIcon = DG.divIcon({
        html: `
          <div id="person" style="
            width:30px;height:30px;
            background:#2563eb;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
          ">🚶</div>
        `,
        className: '',
        iconSize: [30, 30]
      });
    let person = DG.marker(markers[0], { 
  icon: personIcon,
  zIndexOffset: 10000   // 🔥 ең үстіне шығарады
}).addTo(map);
function getAngle(lat1, lng1, lat2, lng2) {
    const toRad = x => x * Math.PI / 180;
    const toDeg = x => x * 180 / Math.PI;

    const dLng = toRad(lng2 - lng1);
    const y = Math.sin(dLng) * Math.cos(toRad(lat2));
    const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLng);
    return (toDeg(Math.atan2(y, x)) + 360) % 360;
}
    let i = 0;
    let step = 0;
    let speed = 0.004;
function animate() {
  let [lat1, lng1] = markers[i];
  let [lat2, lng2] = markers[i + 1];
  step += speed;
  if (step >= 1) {
    step = 0;
    i++;
    // 🔥 END → қайта бастау
    if (i >= markers.length - 1) {
      i = 0;   // қайта 1-нүкте
      step = 0;
    }
    requestAnimationFrame(animate);
    return;
}
  let lat = lat1 + (lat2 - lat1) * step;
  let lng = lng1 + (lng2 - lng1) * step;
  person.setLatLng([lat, lng]);
  let angle = getAngle(lat1, lng1, lat2, lng2);
  document.getElementById("person").style.transform =
    `rotate(${angle + 180}deg)`;
  requestAnimationFrame(animate);
}
    animate();
    isLoaded = true;
    } else {
      setTimeout(()=>map.invalidateSize(),100);
    }
  });
}
function closeMap(){
  document.getElementById("mapModal").style.display = "none";
}
