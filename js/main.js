

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


  document.getElementById("menuToggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    var icon = this.querySelector(".icon");
    var text = this.querySelector(".text");
    
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        icon.textContent = "✖";
        text.textContent = "Zamknij";
    } else {
        icon.textContent = "☰";
        text.textContent = "Menu";
    }
});