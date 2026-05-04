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
s1_title:"ЕСКЕ АЛУ ЖӘНЕ МӘДЕНИЕТ БАҒЫТЫ",
s1_text:"№6 Тур",
s2_title:"«Абай» саябағы",
s2_text:"«Абай» саябағы – қаланың мәдени және демалыс орталығы. Мұнда серуендеу жолдары, футбол алаңы, теннис корттары және заманауи демалыс аймақтары бар. Сонымен қатар «Даңқ» мемориалы орналасқан, ол Ұлы Отан соғысы батырларын еске алуға арналған маңызды тарихи ескерткіш.",
s3_title:"Көркемсурет галереясы",
s3_text:"Абай саябағында орналасқан галерея жергілікті суретшілердің жұмыстарын таныстырады. Мұнда көрмелер, мастер-класстар және мәдени іс-шаралар өткізіледі. Бұл орын өнер мен табиғатты біріктіретін тыныш мәдени орта.",
s4_title:"Саяси қуғын-сүргін мұражайы",
s4_text:"Бұл мұражай 2001 жылы ашылған. Ол Қазақстандағы саяси қуғын-сүргін құрбандарын еске алуға арналған. Мұнда тарихи деректер мен экспонаттар арқылы сол кезеңнің ауыр тарихы көрсетіледі.",
s5_title:"Шымкент циркі",
s5_text:"Цирк 2011 жылы ашылған. Мұнда акробаттар, клоундар және фокусшылар өнер көрсетеді. 1200 көрерменге арналған ғимарат халықаралық цирк гастрольдерін қабылдайды.",
s6_title:"Аналар аллеясы",
s6_text:"Аналар аллеясы – 2024 жылы ашылған жаңа демалыс орны. Мұнда ана мүсіні, серуендеу аймақтары және көгалдандыру бар. Қаланың заманауи тыныш демалыс орындарының бірі.",
s7_title:"Қызғалдақ фонтаны",
s7_text:"Қызғалдақ фонтаны – қаланың символдық нысаны. 10 метрлік қызыл қызғалдақ пішінінде жасалған. Кешкі жарықпен әсем көрініс беретін танымал туристік орын.",
s8_title:"«Жер Ана» монументі",
s8_text:"Бұл монумент тәуелсіздік пен бірлікті бейнелейді. Биіктігі 34 метр. Ол «Тәуелсіздік» саябағымен және «Алтын көпірмен» байланысқан маңызды сәулеттік кешен.",
s9_title:"«Жеңіс» саябағы",
s9_text:"Жеңіс саябағы 1985 жылы ашылған. Мұнда соғыс батырларына арналған ескерткіштер, гүлзарлар және демалыс аймақтары бар. Отбасылық серуенге арналған тыныш орын.",
s10_title:"«Ерлік» мұражайы",
s10_text:"Ерлік мұражайы ҰОС және Ауған соғысы тарихын көрсетеді. Бұл мұражай ерлік пен батырлықты насихаттайтын маңызды мәдени нысан."
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
s1_title:"ПАМЯТЬ И КУЛЬТУРА",
s1_text:"Маршрут по памятникам, паркам и культурным объектам",
s2_title:"Парк «Абай»",
s2_text:"Парк «Абай» — культурный и рекреационный центр города. Здесь есть спортивные площадки, аллеи и мемориал «Слава», посвящённый героям войны.",
s3_title:"Художественная галерея",
s3_text:"Галерея в парке Абай представляет работы местных художников. Здесь проходят выставки, мастер-классы и культурные мероприятия.",
s4_title:"Музей политических репрессий",
s4_text:"Музей открыт в 2001 году и посвящён жертвам политических репрессий. Экспозиции рассказывают о трагических страницах истории.",
s5_title:"Шымкентский цирк",
s5_text:"Цирк открыт в 2011 году. Здесь выступают акробаты, клоуны и фокусники. Зал рассчитан на 1200 зрителей.",
s6_title:"Аллея матерей",
s6_text:"Новая аллея, открытая в 2024 году. Здесь установлена скульптура матери и созданы комфортные зоны отдыха.",
s7_title:"Фонтан «Тюльпан»",
s7_text:"Фонтан в виде красного тюльпана высотой 10 метров. Один из символов города и популярное туристическое место.",
s8_title:"Монумент «Жер Ана»",
s8_text:"Монумент символизирует независимость и единство. Высота 34 метра, соединён с «Алтын көпір».",
s9_title:"Парк «Жеңіс»",
s9_text:"Парк открыт в 1985 году. Здесь расположены памятники, цветники и зоны отдыха для семейных прогулок.",
s10_title:"Музей «Ерлік»",
s10_text:"Музей посвящён истории Великой Отечественной и Афганской войны. Экспозиции рассказывают о героизме."
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
s1_title:"MEMORY & CULTURE",
s1_text:"№5 Tour",
s2_title:"Abai Park",
s2_text:"Abai Park is a cultural and recreation center with sports fields, walking paths, and the Glory Memorial dedicated to war heroes.",
s3_title:"Art Gallery",
s3_text:"Located in Abai Park, the gallery showcases works of local artists and hosts exhibitions and cultural events.",
s4_title:"Museum of Political Repressions",
s4_text:"Opened in 2001, the museum is dedicated to victims of political repression and preserves historical memory.",
s5_title:"Shymkent Circus",
s5_text:"Opened in 2011, the circus hosts acrobats, clowns, and performers. It has a capacity of 1200 spectators.",
s6_title:"Mothers’ Alley",
s6_text:"A modern recreational area opened in 2024 featuring a mother sculpture and comfortable relaxation spaces.",
s7_title:"Tulip Fountain",
s7_text:"A 10-meter red tulip-shaped fountain, one of the city’s symbols and a popular tourist attraction.",
s8_title:"Zher Ana Monument",
s8_text:"A 34-meter monument symbolizing independence and unity, connected to the Golden Bridge.",
s9_title:"Zhenis Park",
s9_text:"Opened in 1985, the park features memorials, flower gardens, and family-friendly recreation areas.",
s10_title:"Erlik Museum",
s10_text:"The museum presents the history of WWII and the Afghan war, highlighting heroism and courage."
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
    center: [42.329242, 69.591579],
    zoom: 15
});

const points = [
    {lat: 42.332621, lng: 69.591369, img: "images/tur6.1.jpg", text: "«Абай» саябағы"},
    {lat: 42.332451, lng: 69.591923, img: "images/tur6.2.jpg", text: "Көркемсурет галереясы"},
    {lat: 42.329077, lng: 69.592316, img: "images/tur6.3.jpg", text: "Саяси қуғын-сүргін мұражайы"},
    {lat: 42.328088, lng: 69.584673, img: "images/tur6.4.jpg", text:"Шымкент циркі"},
    {lat: 42.323988, lng: 69.582031, img: "images/tur6.5.jpg", text:"Аналар аллеясы"},
    {lat: 42.320637, lng: 69.588432, img: "images/tur6.6.jpg", text: "Қызғалдақ фонтаны"},
    {lat: 42.30955,  lng: 69.600235, img: "images/tur6.7.jpg", text: " «Жер Ана» монументі"},
    {lat: 42.31045,  lng: 69.629784, img: "images/tur6.8.jpg", text: "«Жеңіс» саябағы"},
    {lat: 42.310248, lng: 69.631239, img: "images/tur6.9.jpg", text: "Сайрам мұражайы"},
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
