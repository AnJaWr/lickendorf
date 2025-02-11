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

var videos = document.getElementById("video_background").getElementsByTagName("video");
var currentVideoIndex = 0;

function playNextVideo() {
  var currentVideo = videos[currentVideoIndex];
  currentVideo.pause();
  currentVideo.classList.remove("active");

  currentVideoIndex = (currentVideoIndex + 1) % videos.length;

  var nextVideo = videos[currentVideoIndex];
  nextVideo.currentTime = 0; // Przewiń do początku filmu
  nextVideo.classList.add("active");
  nextVideo.play();
}

function checkVideoProgress() {
  var currentVideo = videos[currentVideoIndex];
  if (currentVideo.currentTime >= currentVideo.duration) {
    playNextVideo();
  }
}

for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener("timeupdate", checkVideoProgress);
}

// Rozpocznij odtwarzanie pierwszego wideo
videos[currentVideoIndex].classList.add("active");
videos[currentVideoIndex].play();

function redirectToURL(event) {
  event.preventDefault(); 

  var href = event.target.getAttribute("href");
  window.location.href = href;
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

var videos = document.getElementById("video_background").getElementsByTagName("video");
var currentVideoIndex = 0;

function playNextVideo() {
  var currentVideo = videos[currentVideoIndex];
  currentVideo.pause();
  currentVideo.classList.remove("active");

  currentVideoIndex = (currentVideoIndex + 1) % videos.length;

  var nextVideo = videos[currentVideoIndex];
  nextVideo.currentTime = 0; // Przewiń do początku filmu
  nextVideo.classList.add("active");
  nextVideo.play();
}

function checkVideoProgress() {
  var currentVideo = videos[currentVideoIndex];
  if (currentVideo.currentTime >= currentVideo.duration) {
    playNextVideo();
  }
}

for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener("timeupdate", checkVideoProgress);
}

// Rozpocznij odtwarzanie pierwszego wideo
videos[currentVideoIndex].classList.add("active");
videos[currentVideoIndex].play();

function redirectToURL(event) {
  event.preventDefault(); 

  var href = event.target.getAttribute("href");
  window.location.href = href;
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
>>>>>>> 15e526784c5520fc6540c166119074e8af684fc8
}