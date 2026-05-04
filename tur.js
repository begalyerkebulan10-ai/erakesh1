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
    s1_title:"ҚАЗІРГІ ШЫМКЕНТ",
    s1_text:"№1 Тур",
    s2_title:"«SHYM CITY» саябағы",
    s2_text:"Шымкент қаласындағы 45 гектардан асатын ірі демалыс және көрікті орын. Ол қала тұрғындары мен қонақтарына серуендеуге, спортпен айналысуға және отбасымен демалуға арналған.",
    s3_title:"Qyzgaldaq saraiy",
    s3_text:"«Qyzgaldaq saraiy» — Шымкент қаласындағы заманауи көпфункциялы концерттік кешен. Ол халықаралық кездесулер, фестивальдер, симпозиумдар және ірі мәдени іс-шараларды өткізуге арналған.",
    s4_title:"«Бәйдібек би» ескерткіші",
    s4_text:"«Бәйдібек би» ескерткіші — Шымкент қаласындағы ең биік әрі маңызды тарихи нысандардың бірі. Ол қаланың солтүстік бөлігіндегі 220 метр биіктіктегі төбеге орнатылған.",
    s5_title:"«Қазына» этно-тарихи кешені",
    s5_text:"Шымкент қаласындағы ірі мәдени-танымдық орын, 2012 жылы ашылып, 75 гектар аумақты қамтиды. Ол жасыл желекке оранған кең аймақта орналасып, тарих пен заманауи демалысты біріктіреді.",
    s6_title:"Қазақ хандығының 550 жылдығы монументі",
    s6_text:"Қазақ хандығының 550 жылдығы монументі-2015 жылдың қазан айында 'Қазына'этно-тарихи кешенін құру шеңберінде ашылған 15 метрлік ескерткіш. Ол тарихи сабақтастықты бейнелейтін ұлттық ою-өрнектері мен рельефтері бар екі аркадан тұрады.",
    s7_title:"Шымкенттің тарихи-өлкетану мұражайы",
    s7_text:"Шымкенттің тарихи-өлкетану мұражайы 1920 жылы негізі қаланған және қаланың маңызды мәдени орталықтарының бірі болып табылады. 100 жылға жуық тарихы бар бұл мұражайдың басты мақсаты — келушілерді өңірдің табиғаты, тарихы мен мәдениетімен таныстыру.",
    s8_title:"Әдет-ғұрып және салт-дәстүр орталығы",
    s8_text:"Әдет-ғұрып және салт-дәстүр орталығы 2014 жылдың желтоқсан айында Республикамыз бойынша тұңғыш рет шырайлы Шымқаламызда ашылды. Бұл еліміздің өзге өңірлері мен облыстарында жоқ бірегей орталық",
    s9_title:"Наурыз алаңы",
    s9_text:"Шымкентте қаланың шырайына шырай қосқан көрікті мекендердің қатары уақыт өткен сайын көбейіп келеді. Сондай сәулетті орындардың бірі – «Наурыз» алаңы. «Наурыз» алаңы 1 гектардан астам аумақты қамтиды.",
    s10_title:"Жайлау көл",
    s10_text:"«Жайлау көл» демалыс аймағында орналасқан «Shymkent Altyn Eye» — биіктігі 50 метр болатын алып айналмалы аттракцион. Ол 18 жабық кабинамен жабдықталып, бір мезетте 108 адамды қабылдай алады.",
    s11_title:"Шымкент хайуанаттар бағы",
    s11_text:"Шымкент хайуанаттар бағы — табиғатты жақыннан танып, сирек және экзотикалық жануарларды көруге мүмкіндік беретін ерекше орын. Ол тек демалыс аймағы емес, сонымен қатар экологиялық және білім беру орталығы.",
    s12_title:"Асанбай Асқаров атындағы дендрологиялық саябақ",
    s12_text:"Асанбай Асқаров атындағы дендрологиялық саябақ — Шымкенттің ең ірі әрі бірегей жасыл аймақтарының бірі. 1979 жылы бұрынғы қоқыс орнының орнына салынған бұл саябақ бүгінде 120 гектар аумақты алып жатыр.",
    s13_title:"«Қасірет» мемориалды кешені",
    s13_text:"«Қасірет» мемориалды кешені — саяси қуғын-сүргін құрбандарына арналған тарихи орын. Ол 1937–1938 жылдары көптеген адамдар атылған Албастысай аумағында орналасқан.",
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
    s1_title:"СОВРЕМЕННЫЙ ШЫМКЕНТ",
    s1_text:"№1 Тур",
    s2_title:"Парк «SHYM CITY»",
    s2_text:"Крупная зона отдыха и достопримечательность в Шымкенте площадью более 45 гектаров. Предназначена для прогулок, занятий спортом и семейного отдыха жителей и гостей города.",
    s3_title:"Qyzgaldaq saraiy",
    s3_text:"«Qyzgaldaq saraiy» — современный многофункциональный концертный комплекс в Шымкенте. Предназначен для проведения международных встреч, фестивалей, симпозиумов и крупных культурных мероприятий.",
    s4_title:"Памятник Бәйдібек би",
    s4_text:"Памятник Бәйдібек би — один из самых высоких и значимых исторических объектов Шымкента. Установлен на холме высотой 220 метров в северной части города.",
    s5_title:"Этно-исторический комплекс «Қазына»",
    s5_text:"Крупный культурно-познавательный объект в Шымкенте, открытый в 2012 году и занимающий территорию 75 гектаров. Расположен в зелёной зоне и сочетает историю и современный отдых.",
    s6_title:"Монумент 550-летия Казахского ханства",
    s6_text:"Монумент 550-летия Казахского ханства — 15-метровый памятник, открытый в октябре 2015 года в рамках создания этно-исторического комплекса «Қазына». Состоит из двух арок с национальными орнаментами и рельефами.",
    s7_title:"Шымкентский историко-краеведческий музей",
    s7_text:"Шымкентский историко-краеведческий музей основан в 1920 году и является одним из важных культурных центров города. Его основная цель — знакомство посетителей с природой, историей и культурой региона.",
    s8_title:"Центр обычаев и традиций",
    s8_text:"Центр обычаев и традиций был открыт в декабре 2014 года в Шымкенте и стал первым подобным учреждением в стране. Это уникальный центр, не имеющий аналогов в других регионах.",
    s9_title:"Площадь Наурыз",
    s9_text:"В Шымкенте с каждым годом увеличивается количество красивых мест, украшающих город. Одним из таких является площадь «Наурыз», занимающая более 1 гектара.",
    s10_title:"Озеро Жайлау",
    s10_text:"В зоне отдыха «Жайлау көл» расположен аттракцион «Shymkent Altyn Eye» высотой 50 метров. Он оснащён 18 закрытыми кабинами и может одновременно принимать до 108 человек.",
    s11_title:"Шымкентский зоопарк",
    s11_text:"Шымкентский зоопарк — уникальное место, где можно познакомиться с природой и увидеть редких и экзотических животных. Это также экологический и образовательный центр.",
    s12_title:"Дендропарк имени Асанбая Аскарова",
    s12_text:"Дендропарк имени Асанбая Аскарова — один из крупнейших и уникальных зелёных парков Шымкента. Основан в 1979 году на месте бывшей свалки и занимает 120 гектаров.",
    s13_title:"Мемориальный комплекс «Қасірет»",
    s13_text:"Мемориальный комплекс «Қасірет» — историческое место, посвящённое жертвам политических репрессий. Расположен в районе Албастысай, где в 1937–1938 годах были расстреляны люди.",
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
    s1_title:"MODERN SHYMKENT",
    s1_text:"№1 tour",
    s2_title:"“SHYM CITY” Park",
    s2_text:"A large recreational and sightseeing area in Shymkent covering more than 45 hectares. Designed for walking, sports, and family recreation for residents and visitors.",
    s3_title:"Qyzgaldaq saraiy",
    s3_text:"“Qyzgaldaq saraiy” is a modern multifunctional concert complex in Shymkent. It is designed for international meetings, festivals, symposiums, and major cultural events.",
    s4_title:"Monument to Baidibek Bi",
    s4_text:"The Baidibek Bi monument is one of the tallest and most significant historical landmarks in Shymkent. It is located on a 220-meter-high hill in the northern part of the city.",
    s5_title:"“Kazyna” Ethno-Historical Complex",
    s5_text:"A major cultural and educational site in Shymkent, opened in 2012 and covering 75 hectares. It is located in a green area and combines history with modern recreation.",
    s6_title:"Monument of the 550th Anniversary of the Kazakh Khanate",
    s6_text:"The monument of the 550th anniversary of the Kazakh Khanate is a 15-meter structure opened in October 2015 as part of the “Kazyna” ethno-historical complex. It consists of two arches with national ornaments and reliefs.",
    s7_title:"Shymkent Regional History Museum",
    s7_text:"The Shymkent Regional History Museum was founded in 1920 and is one of the city's important cultural centers. Its main goal is to introduce visitors to the region’s nature, history, and culture.",
    s8_title:"Center of Customs and Traditions",
    s8_text:"The Center of Customs and Traditions was opened in December 2014 in Shymkent and became the first of its kind in the country. It is a unique center with no аналогues in other regions.",
    s9_title:"Nauryz Square",
    s9_text:"In Shymkent, the number of beautiful places enhancing the city's appearance is growing every year. One of them is Nauryz Square, covering more than 1 hectare.",
    s10_title:"Zhaylau Lake",
    s10_text:"In the Zhaylau recreation area, the “Shymkent Altyn Eye” attraction stands 50 meters tall. It has 18 enclosed cabins and can accommodate up to 108 people at once.",
    s11_title:"Shymkent Zoo",
    s11_text:"Shymkent Zoo is a unique place where visitors can explore nature and see rare and exotic animals. It is also an ecological and educational center.",
    s12_title:"Asanbai Askarov Dendrological Park",
    s12_text:"The Asanbai Askarov Dendrological Park is one of the largest and most unique green parks in Shymkent. Established in 1979 on a former landfill, it now covers 120 hectares.",
    s13_title:"“Kasiret” Memorial Complex",
    s13_text:"The “Kasiret” memorial complex is a historical site dedicated to victims of political repression. It is located in the Albastysay area where executions took place in 1937–1938.",
  }
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/tur1.mpeg",ru:"audio/turrus.mpeg",en:"audio/turen.mpeg"}
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
    center: [42.399506, 69.621184],
    zoom: 15
});

const points = [
    {lat: 42.397876, lng: 69.623877, img: "https://avatars.mds.yandex.net/get-altay/15487932/2a0000019750e9c8468ecbf8fbb7a0e7b3c8/orig", text: "SHYM CITY"},
    {lat: 42.394690, lng: 69.623442, img: "https://avatars.mds.yandex.net/get-altay/13203115/2a0000018eb8ebc822ec6d589b78c2dbdf9a/XXXL", text: "Qyzgaldaq saraiy"},
    {lat: 42.387501, lng: 69.627769, img: "https://avatars.mds.yandex.net/i?id=51bae985c56770e970af64f120824ba6_l-4471740-images-thumbs&n=13", text: "Baidibek Bi"},
    {lat: 42.384836, lng: 69.626479, img: "https://visit-shymkent.com/wp-content/uploads/2025/05/kazyna-complex3.jpeg", text: "Қазына"},
    {lat: 42.384890, lng: 69.627966, img: "https://avatars.mds.yandex.net/get-altay/15395175/2a00000198c61a04f062e6f1b103de552157/orig", text: "Қазақ хандығы 550"},
    {lat: 42.382783, lng: 69.626951, img: "https://e-history.kz/storage/tmp/resize/preview/1200_0_ec329aef1b8271f8dbc9a90916d5681e.jpg", text: "Мұражай"},
    {lat: 42.382827, lng: 69.628025, img: "https://dalatimes.kz/wp-content/uploads/2021/08/WhatsApp-Image-2020-11-16-at-12.15.23-1024x682-1.jpeg", text: "Салт-дәстүр"},
    {lat: 42.382319, lng: 69.628590, img: "https://sxodim.com/uploads/posts/2023/02/06/optimized/669c6286245d1e25e6eefe8e75f77b3a_1400x790-q-85.jpg", text: "Наурыз"},
    {lat: 42.381693, lng: 69.628203, img: "https://dwc.kg/wp-content/uploads/2023/06/5ca5cd55d1294-748x574.jpg", text: "Жайлау көл"},
    {lat: 42.376953, lng: 69.628102, img: "https://www.gov.kz/uploads/2025/6/9/23e13cc59fa492028de2f3249297a10c_original.1444556.png", text: "Зоопарк"},
    {lat: 42.368648, lng: 69.622985, img: "https://sn.kz/cache/imagine/main_page_full/uploads/news/2019/06/04/5cf6581432143731731646.jpg", text: "Дендропарк"},
    {lat: 42.366951, lng: 69.623459, img: "https://www.gov.kz/uploads/2020/11/2/29243449d1ec5a70f751535aac091ea8_original.115930.jpeg", text: "Қасірет"}
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
