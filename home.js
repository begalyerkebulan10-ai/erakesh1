document.addEventListener("DOMContentLoaded", () => {

  /* ================= HEADER SCROLL ================= */
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  /* ================= MENU ================= */
  const menu = document.getElementById("menu");

  window.openMenu = function () {
    menu?.classList.add("active");
  };

  window.closeMenu = function () {
    menu?.classList.remove("active");
  };

  window.toggle = function (el) {
    el?.classList.toggle("open");
  };

  /* ================= VIDEO AUTOPLAY FIX (iPhone + Android) ================= */
  const video = document.querySelector(".bg");

  function tryPlayVideo() {
    if (!video) return;
    video.play().catch(() => {});
  }

  // iOS / Android gesture unlock
  const unlockEvents = ["touchstart", "click"];
  unlockEvents.forEach(evt => {
    document.addEventListener(evt, tryPlayVideo, { once: true });
  });

  /* ================= WEATHER ================= */
  let interval;

  window.openW = function () {
    document.getElementById("sheet")?.classList.add("active");
    document.getElementById("bg")?.classList.add("active");

    loadWeather();
    clearInterval(interval);
    interval = setInterval(loadWeather, 600000);
  };

  window.closeW = function () {
    document.getElementById("sheet")?.classList.remove("active");
    document.getElementById("bg")?.classList.remove("active");
  };

  function getHour() {
    return new Date().getHours();
  }

  async function loadWeather() {
    try {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=42.32&longitude=69.59&hourly=temperature_2m&current_weather=true&forecast_days=1";

      const res = await fetch(url);
      const data = await res.json();

      const temps = data?.hourly?.temperature_2m?.slice(0, 24) || [];
      const current = data?.current_weather?.temperature;
      const code = data?.current_weather?.weathercode;

      let icon = "🌤️", text = "Ауа райы";

      if (code === 0) { icon = "☀️"; text = "Ашық"; }
      else if (code <= 3) { icon = "☁️"; text = "Бұлтты"; }
      else if (code <= 67) { icon = "🌧️"; text = "Жаңбыр"; }

      document.getElementById("now").innerText =
        `${icon} Қазір: ${current}°C • ${text}`;

      const box = document.getElementById("hours");
      if (!box) return;

      box.innerHTML = "";

      let now = getHour();

      temps.forEach((t, i) => {
        box.innerHTML += `
          <div class="hour ${i === now ? 'active' : ''}">
            <div>${i}:00</div>
            <div>🌡️</div>
            <div>${Math.round(t)}°</div>
          </div>
        `;
      });

    } catch (err) {
      console.log("Weather error:", err);
    }
  }

  /* ================= CLOCK ================= */
  function updateClock() {
    const now = new Date();

    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if (clock) clock.innerText = `${h}:${m}:${s}`;

    if (date) {
      date.innerText = now.toLocaleDateString('kk-KZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }

  setInterval(updateClock, 1000);
  updateClock();

  /* ================= TEXT TOGGLE ================= */
  window.toggleText = function () {
    const dots = document.getElementById("dots");
    const more = document.getElementById("more");
    const btn = document.getElementById("btn");

    if (!dots || !more || !btn) return;

    const isHidden = getComputedStyle(more).display === "none";

    if (isHidden) {
      more.style.display = "inline";
      dots.style.display = "none";
      btn.innerText = "⬅️";
    } else {
      more.style.display = "none";
      dots.style.display = "inline";
      btn.innerText = "➡️";
    }
  };

  /* ================= SLIDER ================= */
  const slides = document.querySelectorAll(".slide1");
  let index = 0;

  function show(i) {
    if (!slides.length) return;

    slides.forEach(s => s.classList.remove("active"));

    setTimeout(() => {
      slides[i].classList.add("active");
    }, 50);
  }

  window.next1 = function () {
    index = (index + 1) % slides.length;
    show(index);
  };

  window.prev1 = function () {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  };

  /* SWIPE (iPhone + Android safe) */
  let startX = 0;

  document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;

    if (startX > endX + 40) next1();
    if (startX < endX - 40) prev1();
  }, { passive: true });

  /* ================= EMAIL ================= */
  window.sendEmail = function () {

    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const message = document.getElementById("message")?.value;

    if (!name || !email || !message) {
      alert("Толтырыңыз!");
      return;
    }

    emailjs.send("service_sy1jis8", "template_6k3o02s", {
      from_name: name,
      from_email: email,
      message: message
    })
      .then(() => alert("Хабарлама жіберілді!"))
      .catch(err => {
        console.log(err);
        alert("Қате шықты");
      });
  };

});