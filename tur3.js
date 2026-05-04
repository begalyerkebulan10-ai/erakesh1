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
    s1_title:"ТАНЫМДЫҚ ТУР",
    s1_text:"№3 Тур",
    s2_title:"«Арбат» жаяу жүргіншілер көшесі",
    s2_text:"«Арбат» жаяу жүргіншілер көшесі – Шымкенттің орталығындағы заманауи серуен аймағы. 2018 жылы ашылған. Ұзындығы шамамен 500 м. Мұнда субұрқақтар, гүлзарлар, көше өнері және мәдени шаралар өтеді. Демалыс пен серуенге арналған танымал орын.",
    s3_title:"Орыс драма театры",
    s3_text:"Орыс драма театры – 1929 жылы ашылған мәдени театр. Репертуары әртүрлі, балалар мен ересектерге арналған қойылымдар қояды. Қазақстанның басқа қалаларында да гастрольдер өткізеді.",
    s4_title:"Shymkent Plaza",
    s4_text:"Shymkent Plaza – үлкен сауда-ойын-сауық орталығы. Кинотеатр, фастфуд, бренд дүкендер және ойын алаңы бар заманауи кешен.",
    s5_title:"«Спутник» алаңы",
    s5_text:"«Спутник» алаңы – жаңа абаттандырылған қоғамдық орын. Демалыс аймақтары, жарықтандыру және заманауи субұрқақпен танымал.",
    s6_title:"ОЖД",
    s6_text:"ЦУМа киімдердің (ерлер мен әйелдер), аяқ киімдердің, аксессуарлардың, сондай-ақ гравюра қызметтерінің кең ассортиментін ұсынады. Ғимаратта көптеген бутиктер бар, соның ішінде Podium Outlet, Milano, Men ' s World.",
    s7_title:"Mega Planet",
    s7_text:"Mega Planet – 2007 жылдан бері жұмыс істейді. Кинотеатр, ойын орталығы, дүкендер және фуд-корт бар.",
    s8_title:"Орталық саябақ",
    s8_text:"Орталық саябақ – тарихи парк (1925 ж.). Демалыс, спорт және отбасылық серуенге арналған.",
    s9_title:"Кенбаба Отбасылық Саябағы",
    s9_text:"Кенбаба саябағы – отбасылық демалыс орны. Аттракциондар, табиғат және тыныш орта бар.",
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
    s1_title:"ПОЗНАВАТЕЛЬНЫЙ ТУР",
s1_text:"№3 тур",
s2_title:"Пешеходная улица «Арбат»",
s2_text:"Пешеходная улица «Арбат» — современная прогулочная зона в центре Шымкента. Открыта в 2018 году. Протяжённость около 500 м. Здесь есть фонтаны, аллеи, уличное искусство и культурные мероприятия. Популярное место для отдыха и прогулок.",
s3_title:"Русский драматический театр",
s3_text:"Русский драматический театр открыт в 1929 году. Представляет разнообразные спектакли для детей и взрослых и гастролирует по Казахстану.",
s4_title:"Shymkent Plaza",
s4_text:"Shymkent Plaza — крупный торгово-развлекательный центр. Здесь есть кинотеатр, фастфуд, брендовые магазины и игровые зоны.",
s5_title:"Площадь «Спутник»",
s5_text:"Площадь «Спутник» — современное благоустроенное общественное пространство с зонами отдыха и фонтанами.",
s6_title:"ЦУМ",
s6_text:"ЦУМ — крупный торговый центр с одеждой, обувью и аксессуарами. Внутри есть бутики Podium Outlet, Milano, Men’s World.",
s7_title:"Mega Planet",
s7_text:"Mega Planet — торгово-развлекательный центр, работающий с 2007 года. Есть кинотеатр, магазины и фуд-корт.",
s8_title:"Центральный парк",
s8_text:"Центральный парк — исторический парк, открытый в 1925 году. Подходит для отдыха, спорта и прогулок.",
s9_title:"Семейный парк Кенбаба",
s9_text:"Парк Кенбаба — семейная зона отдыха с аттракционами, природой и спокойной атмосферой."
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
    s1_title:"EDUCATIONAL TOUR",
s1_text:"Tour #3",
s2_title:"Arbat pedestrian street",
s2_text:"Arbat pedestrian street is a modern walking area in central Shymkent, opened in 2018. It is about 500 meters long and features fountains, alleys, street art, and cultural events. A popular place for walking and relaxation.",
s3_title:"Russian Drama Theatre",
s3_text:"The Russian Drama Theatre was opened in 1929. It offers various performances for children and adults and tours across Kazakhstan.",
s4_title:"Shymkent Plaza",
s4_text:"Shymkent Plaza is a large shopping and entertainment center with a cinema, fast food, branded stores, and entertainment areas.",
s5_title:"Sputnik Square",
s5_text:"Sputnik Square is a modern public space with fountains and leisure areas.",
s6_title:"TSUM",
s6_text:"TSUM is a large shopping center offering clothes, shoes, and accessories. It includes boutiques like Podium Outlet, Milano, and Men’s World.",
s7_title:"Mega Planet",
s7_text:"Mega Planet is a shopping and entertainment center operating since 2007, featuring a cinema, shops, and food court.",
s8_title:"Central Park",
s8_text:"Central Park is a historic park opened in 1925, suitable for recreation, sports, and walking.",
s9_title:"Kenbaba Family Park",
s9_text:"Kenbaba Park is a family recreation area with attractions, nature, and a peaceful atmosphere."
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
    center: [42.315808,69.587509],
    zoom: 15
});

const points = [
    {lat: 42.315808, lng: 69.587509, img: "images/tur3.0.jpg", text: "«Арбат» жаяу жүргіншілер көшесі"},
    {lat: 42.315659, lng: 69.586688, img: "images/tur3.1.jpeg", text: "Орыс драма театры"},
    {lat: 42.315019, lng: 69.587575, img: "images/tur3.2.jpg", text: "Shymkent Plaza"},
    {lat: 42.31683, lng: 69.592377, img: "images/tur3.3.jpg", text: "«Спутник» алаңы"},
    {lat: 42.318169, lng: 69.595899, img: "images/tur3.4.webp", text: "ОЖД"},
    {lat: 42.319062, lng: 69.596634, img: "images/tur3.5.jpg", text: "«Mega Planet"},
    {lat: 42.31744, lng: 69.600664, img: "images/tur3.6.jpg", text: " «Орталық саябақ»"},
    {lat: 42.317047, lng: 69.60375, img: "images/tur3.7.jpg", text: "Кенбаба Отбасылық Саябағы"},
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
