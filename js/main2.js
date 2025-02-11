<<<<<<< HEAD
function loadCSSBasedOnDevice() {
  // Sprawdzenie typu urządzenia
  if (window.matchMedia("(max-width: 600px)").matches) {
    // Wczytaj CSS dla małego ekranu
    loadCSS("css/small_screen_style.css?v1");
  } else if (window.matchMedia("(min-width: 601px) and (max-width: 1024px)").matches) {
    // Wczytaj CSS dla średniego ekranu
    loadCSS("css/style.css?v1");
  } else {
    // Wczytaj CSS dla dużego ekranu
    loadCSS("css/style.css?v1");
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


window.addEventListener("DOMContentLoaded", function() {
  var logo = document.getElementById("logo");

  logo.addEventListener("click", function() {
    window.location.href = "index.html";
  });
});
=======
function loadCSSBasedOnDevice() {
  // Sprawdzenie typu urządzenia
  if (window.matchMedia("(max-width: 600px)").matches) {
    // Wczytaj CSS dla małego ekranu
    loadCSS("css/small_screen_style.css?v1");
  } else if (window.matchMedia("(min-width: 601px) and (max-width: 1024px)").matches) {
    // Wczytaj CSS dla średniego ekranu
    loadCSS("css/style.css?v1");
  } else {
    // Wczytaj CSS dla dużego ekranu
    loadCSS("css/style.css?v1");
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


window.addEventListener("DOMContentLoaded", function() {
  var logo = document.getElementById("logo");

  logo.addEventListener("click", function() {
    window.location.href = "index.html";
  });
});
>>>>>>> 15e526784c5520fc6540c166119074e8af684fc8
