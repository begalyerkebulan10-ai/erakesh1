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
   s1_title:"ТАРИХИ ҚАЛА",
    s1_text:"№4 Тур",
    s2_title:"Теміржол вокзалы",
    s2_text:"Жаңартылған заманауи ғимарат, жолаушыларға жайлы қызмет көрсетеді, өткізу мүмкіндігі артқан.",
    s3_title:"Қошқар Ата өзені",
    s3_text:"Таза бұлақ суымен танымал, жағасында серуендеуге арналған аллея бар.",
    s4_title:"Ордабасы мешіті",
    s4_text:"Қала орталығындағы әдемі әрі заманауи мешіт.",
    s5_title:"Тәуелсіздік саябағы",
    s5_text:"2011 жылы ашылған, арка мен тарихи монументтері бар саябақ.",
    s6_title:"Алтын шаңырақ",
    s6_text:"Халықтар бірлігін бейнелейтін символдық ескерткіш.",
    s7_title:"Шымқала этноауылы",
    s7_text:"Көшпенді өмір мен ұлттық дәстүрді танытатын мәдени кешен.",
    s8_title:"Шымқала кешені",
    s8_text:"Ежелгі қаланың үлгісі, ашық аспан астындағы музей.",
    s9_title:"Филармония",
    s9_text:"1930 жылдан жұмыс істейтін мәдени және музыка орталығы.",
    s10_title:"Металлургтер саябағы",
    s10_text:"Тыныш демалысқа арналған жасыл аймақ.",
    s11_title:"Жами мешіті",
    s11_text:"XIX ғасырдағы тарихи әрі рухани маңызды мешіт.",
    s12_title:"Пушкин кітапханасы",
    s12_text:"1899 жылы ашылған көне әрі заманауи кітапхана.",
    s13_title:"Шәмші әлемі сквері",
    s13_text:"Музыка мен мәдениетке арналған ерекше демалыс орны.",
    s14_title:"Музыкалық субұрқақ",
    s14_text:"Жарық, су және лазер шоуымен ерекшеленеді.",
    s15_title:"Жоғарғы базар",
    s15_text:"Ең көне әрі ең ірі сауда орындарының бірі."
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
    s1_title:"ИСТОРИЧЕСКИЙ ГОРОД",
    s1_text:"Тур №4",
    s2_title:"Железнодорожный вокзал",
    s2_text:"Обновлённое современное здание с комфортными условиями и высокой пропускной способностью.",
    s3_title:"Река Кошкар-Ата",
    s3_text:"Известна чистой водой и прогулочной аллеей вдоль берега.",
    s4_title:"Мечеть Ордабасы",
    s4_text:"Красивая современная мечеть в центре города.",
    s5_title:"Парк Независимости",
    s5_text:"Открыт в 2011 году, есть арка и памятники.",
    s6_title:"Алтын Шанырак",
    s6_text:"Символ единства народов.",
    s7_title:"Этноаул Шымкала",
    s7_text:"Культурный комплекс, отражающий кочевую жизнь.",
    s8_title:"Комплекс Шымкала",
    s8_text:"Реконструкция древнего города, музей под открытым небом.",
    s9_title:"Филармония",
    s9_text:"Культурный центр с концертами с 1930 года.",
    s10_title:"Парк Металлургов",
    s10_text:"Зелёная зона для отдыха и прогулок.",
    s11_title:"Джами мечеть",
    s11_text:"Историческая мечеть XIX века.",
    s12_title:"Библиотека Пушкина",
    s12_text:"Одна из старейших библиотек города.",
    s13_title:"Сквер «Мир Шамши»",
    s13_text:"Место музыки и культуры.",
    s14_title:"Музыкальный фонтан",
    s14_text:"Современное световое и лазерное шоу.",
    s15_title:"Верхний базар",
    s15_text:"Один из крупнейших и старейших рынков."
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
    s1_title:"HISTORICAL CITY",
    s1_text:"Tour №4",
    s2_title:"Railway Station",
    s2_text:"Renovated modern building with high passenger capacity.",
    s3_title:"Koshkar-Ata River",
    s3_text:"Known for clean water and walking paths along the river.",
    s4_title:"Ordabasy Mosque",
    s4_text:"Beautiful modern mosque in the city center.",
    s5_title:"Independence Park",
    s5_text:"Opened in 2011, features monuments and an arch.",
    s6_title:"Altyn Shanyrak",
    s6_text:"Symbol of unity and friendship.",
    s7_title:"Shymqala Ethno-village",
    s7_text:"Cultural complex showing nomadic traditions.",
    s8_title:"Shymqala Complex",
    s8_text:"Reconstruction of an ancient city, open-air museum.",
    s9_title:"Philharmonic",
    s9_text:"Cultural music center since 1930.",
    s10_title:"Metallurgists Park",
    s10_text:"Green park for relaxation and walks.",
    s11_title:"Jami Mosque",
    s11_text:"Historic 19th-century mosque.",
    s12_title:"Pushkin Library",
    s12_text:"One of the oldest libraries in the city.",
    s13_title:"Shamshi World Square",
    s13_text:"Place of music and culture.",
    s14_title:"Musical Fountain",
    s14_text:"Modern light and laser show attraction.",
    s15_title:"Upper Bazaar",
    s15_text:"One of the oldest and largest markets."
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
    {lat: 42.29897,  lng: 69.609862, img: "images/tur4.1.jpg", text: "Теміржол вокзалы"},
    {lat: 42.309022, lng: 69.600477, img: "images/tur4.2.png", text: "Қошқар Ата өзені"},
    {lat: 42.309142, lng: 69.601094, img: "images/tur4..3.jpg", text: "Ордабасы мешіті"},
    {lat: 42.308992, lng: 69.600054, img: "images/tur4.4.jpg", text:"«Тәуелсіздік» саябағы"},
    {lat: 42.306936, lng: 69.599197, img: "images/tur4.5.jpg", text:"Алтын шаңырақ"},
    {lat: 42.305642, lng: 69.596248, img: "images/tur4.6.jpg", text: "Шымқала этноауылы"},
    {lat: 42.305579, lng: 69.595583, img: "images/tur4.7.jpg", text: " Шымқала кешені"},
    {lat: 42.311041, lng: 69.557178, img: "images/tur4.8.jpg", text: "Филармония"},
    {lat: 42.313435, lng: 69.564662, img: "images/tur4.9.jpg", text: "Металлургтер саябағы"},
    {lat: 42.309088, lng: 69.588095 , img: "images/tur4.10.png", text: "Жами мешіті"},
    {lat: 42.313331, lng: 69.601392 , img: "images/tur4.11.jpg", text: "Пушкин кітапханасы"},
    {lat: 42.313271, lng: 69.605217, img: "images/tur4.12.jpg", text: "Шәмші әлемі сквері"},
    {lat: 42.312631, lng: 69.607501, img: "images/tur4.13.jpg", text: "Музыкалық субұрқақ"},
    {lat: 42.309826, lng: 69.603993, img: "images/tur4.14.jpg", text: "Жоғарғы базар"},
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
