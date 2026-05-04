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
    s1_title:"ҚАЛАНЫҢ ӘКІМШІЛІК ОРТАЛЫҒЫ",
    s1_text:"№2 Тур",
    s2_title:"Нұрсат аллеясы",
    s2_text:"Нұрсат аллеясы – Қаратау ауданында орналасқан танымал демалыс аймағы. Ол Нұрсұлтан Назарбаев даңғылы бойында, спорт кешені мен әкімдікке жақын жерде орналасып, серуендеуге арналған жасыл әрі жайлы қоғамдық кеңістік ретінде танымал.",
    s3_title:"Астана алаңы",
    s3_text:"Астана алаңы – қаладағы ірі мерекелік іс-шаралар, концерттер мен жаңа жылдық мерекелер өтетін орталық алаң. Ол бірлік пен мәдени іс-шаралардың басты орны болып табылады.",
    s4_title:"Шымкент қаласының әкімдігі",
    s4_text:"Шымкент қаласының әкімдігі – қаланың әлеуметтік-экономикалық дамуын, инфрақұрылымын және бюджетін басқаратын негізгі атқарушы орган.",
    s5_title:"Жұмат Шанин атындағы қазақ драма театры ",
    s5_text:"Жұмат Шанин атындағы қазақ драма театры – 500 орындық заманауи ғимарат, халықаралық талаптарға сай жабдықталған мәдени өнер орталығы.",
    s6_title:"Әл-Фараби кітапханасы",
    s6_text:"Әл-Фараби кітапханасы – 650 мыңнан астам кітап қоры бар, заманауи технологиямен жабдықталған ірі ғылыми-мәдени орталық.",
    s7_title:"Түркістан сарайы",
    s7_text:"Түркістан сарайы – 1400 адамға арналған, республикалық және халықаралық концерттер өтетін заманауи мәдени кешен.",
    s8_title:"Көрме орталығы",
    s8_text:"Көрме орталығы – халықаралық және жергілікті бизнес, жәрмеңке және көрмелер өтетін заманауи екі қабатты кешен.",
    s9_title:"Оқушылар сарайы",
    s9_text:"Оқушылар сарайы – 500 орындық оқу орталығы, балалардың шығармашылығы мен дамуына арналған заманауи ғимарат.",
    s10_title:"Сейітжан қари мешіті",
    s10_text:"Сейітжан қари мешіті – Шымкенттегі ең ірі заманауи мешіттердің бірі, 12 мың адамға дейін сыйдыра алатын рухани және мәдени орталық.",
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
    s1_title:"АДМИНИСТРАТИВНЫЙ ЦЕНТР ГОРОДА",
    s1_text:"№2 Тур",
    s2_title:"Аллея Нурсат",
    s2_text:"Аллея Нурсат – популярная зона отдыха в районе Каратау. Она расположена на проспекте Нурсултана Назарбаева рядом со спортивным комплексом и акиматом, и является благоустроенным общественным пространством для прогулок.",
    s3_title:"Площадь Астана",
    s3_text:"Площадь Астана – крупная городская площадка для праздников, концертов и новогодних мероприятий, являющаяся центром единства и культуры.",
    s4_title:"Акимат города Шымкента",
    s4_text:"Акимат города Шымкента – исполнительный орган, отвечающий за социально-экономическое развитие, инфраструктуру и бюджет города.",
    s5_title:"Казахский драматический театр имени Жумата Шанина",
    s5_text:"Казахский драматический театр имени Жумата Шанина – современное здание на 500 мест, соответствующее международным стандартам.",
    s6_title:"Библиотека имени Аль-Фараби",
    s6_text:"Библиотека имени Аль-Фараби – крупный научно-культурный центр с фондом более 650 тысяч книг.",
    s7_title:"Дворец «Туркестан»",
    s7_text:"Дворец «Туркестан» – современный культурный комплекс на 1400 мест для концертов и фестивалей.",
    s8_title:"Выставочный центр",
    s8_text:"Выставочный центр – современный двухэтажный комплекс для бизнес-форумов, ярмарок и выставок.",
    s9_title:"Дворец школьников",
    s9_text:"Дворец школьников – образовательный центр на 500 мест для развития детей и их творчества.",
    s10_title:"Мечеть Сейитжан қари",
    s10_text:"Мечеть Сейитжан қари – одна из крупнейших современных мечетей Шымкента, вмещающая до 12 тысяч человек.",
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
    s1_title:"CITY ADMINISTRATIVE CENTER",
    s1_text:"№2 Tour",
    s2_title:"Nursat Alley",
    s2_text:"Nursat Alley is a popular recreational area in the Karatau district. It is located along Nursultan Nazarbayev Avenue near the sports complex and city administration, serving as a comfortable public walking space.",
    s3_title:"Astana Square",
    s3_text:"Astana Square is a major city venue for celebrations, concerts, and New Year events, serving as a center of unity and culture.",
    s4_title:"Shymkent city administration",
    s4_text:"The Shymkent city administration is the executive body responsible for socio-economic development, infrastructure, and budget management.",
    s5_title:"Zhumat Shanin Kazakh Drama Theater",
    s5_text:"The Zhumat Shanin Kazakh Drama Theatre is a modern 500-seat cultural venue equipped according to international standards.",
    s6_title:"Al-Farabi Library",
    s6_text:"The Al-Farabi Library is a major scientific and cultural center with over 650,000 books.",
    s7_title:"Turkestan Palace",
    s7_text:"The Turkestan Palace is a modern cultural complex with a capacity of 1,400 people for concerts and festivals.",
    s8_title:"Exhibition Center",
    s8_text:"The Exhibition Center is a modern two-story facility for business forums, fairs, and exhibitions.",
    s9_title:"Palace of students",
    s9_text:"he Palace of Schoolchildren is a 500-seat educational center for children's development and creativity.",
    s10_title:"Seitzhan Qari Mosque",
    s10_text:"The Seitjan Kari Mosque is one of the largest modern mosques in Shymkent, accommodating up to 12,000 worshippers.",
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
    center: [42.363028,69.621006],
    zoom: 15
});

const points = [
    {lat: 42.363055, lng: 69.621052, img: "images/tur2.1.jpg", text: "Нұрсат аллеясы"},
    {lat: 42.359412, lng: 69.643501, img: "images/tur2.2.jpg", text: "'Астана' алаңы"},
    {lat: 42.357891, lng: 69.642674, img: "images/tur2.3.webp", text: "Шымкент қаласының әкімдігі"},
    {lat: 42.358848, lng: 69.642351, img: "images/tur2.4.jpg", text: "Жұмат Шанин атындағы қазақ академиялық драма театры"},
    {lat: 42.358087, lng: 69.640926, img: "images/tur2.5.jpg", text: "Әл-Фараби атындағы қалалық ғылыми әмбебап кітапханасы"},
    {lat: 42.358388, lng: 69.643805, img: "images/tur2.6.jpg", text: "«Түркістан» сарайы"},
    {lat: 42.356987, lng: 69.644199, img: "images/tur2.7", text: " «Көрме орталығы»"},
    {lat: 42.353128, lng: 69.644742, img: "images/tur2.8.jpg", text: "Жаңа Оқушылар сарайы"},
    {lat: 42.355543, lng: 69.649360, img: "images/tur2.9.jpg", text: "Сейітжан қари Есжанұлы мешіті "},
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
