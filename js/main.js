function loadCSSBasedOnDevice() {
  // Sprawdzenie typu urządzenia
  if (window.matchMedia("(max-width: 600px)").matches) {
    // Wczytaj CSS dla małego ekranu
    loadCSS("css/small_screen_style.css?v1");
  } else if (window.matchMedia("(min-width: 601px) and (max-width: 1024px)").matches) {
    // Wczytaj CSS dla średniego ekranu
    loadCSS("css/style.css?v2");
  } else {
    // Wczytaj CSS dla dużego ekranu
    loadCSS("css/style.css?v2");
  }
}

function loadCSS(filename) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = filename;
  document.head.appendChild(link);
}

// Wywołanie funkcji w momencie zmiany wielkości ekranu
window.addEventListener("resize", loadCSSBasedOnDevice);

// Wywołanie funkcji przy załadowaniu strony
window.addEventListener("load", loadCSSBasedOnDevice);

function redirectToURL(event) {
  event.preventDefault(); 

  var href = event.target.getAttribute("data-href");
  if (href) {
    window.location.href = href;
  }
}

window.addEventListener("DOMContentLoaded", function() {
  var buttons = document.getElementsByClassName("btn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", redirectToURL);
  }
});
window.addEventListener("DOMContentLoaded", function() {
  var logo = document.getElementById("logo");

  logo.addEventListener("click", function() {
    window.location.href = "index.html";
  });
});

window.addEventListener("DOMContentLoaded", function() {
  var cookieNotice = localStorage.getItem("cookieNotice");

  if (!cookieNotice) {
    showCookieNotice();
    localStorage.setItem("cookieNotice", true);
  }
});

function showCookieNotice() {
  var notice = document.createElement("div");
  notice.classList.add("cookie-notice");
  notice.innerHTML = "Ta strona używa plików cookie. Kliknij OK, aby zaakceptować.";

  var button = document.createElement("button");
  button.innerHTML = "OK";
  button.addEventListener("click", function() {
    notice.style.display = "none";
  });

  notice.appendChild(button);
  document.body.appendChild(notice);
}
// document.addEventListener("DOMContentLoaded", function() {
  var banner = document.getElementById("cookie-banner");
  var acceptButton = document.getElementById("accept-cookies");
  var rejectButton = document.getElementById("reject-cookies");

  // Sprawdzamy, czy użytkownik podjął decyzję o cookies
  if (!localStorage.getItem("cookiesAccepted") && !localStorage.getItem("cookiesRejected")) {
      banner.classList.add("show"); // Pokazujemy komunikat
  }

  // Obsługa kliknięcia w "Akceptuję"
  acceptButton.addEventListener("click", function() {
      localStorage.setItem("cookiesAccepted", "true");
      banner.classList.remove("show"); // Ukrywamy komunikat
  });

  // Obsługa kliknięcia w "Odrzucam"
  rejectButton.addEventListener("click", function() {
      localStorage.setItem("cookiesRejected", "true");
      banner.classList.remove("show"); // Ukrywamy komunikat
  });