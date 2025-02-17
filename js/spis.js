
document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.createElement("nav");
    tocContainer.id = "table-of-contents";
    tocContainer.innerHTML = "<h2>Spis treści</h2>";
    const tocList = document.createElement("ul");

    const headers = document.querySelectorAll("h2, h3");
    let lastH2 = null;

    headers.forEach(header => {
        const id = header.id || header.textContent.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        header.id = id;

        const li = document.createElement("li");
        li.style.marginLeft = header.tagName === "H3" ? "20px" : "0px";
        
        const link = document.createElement("a");
        link.href = "#" + id;
        link.textContent = header.textContent;
        
        li.appendChild(link);
        tocList.appendChild(li);
    });

    tocContainer.appendChild(tocList);

    // Zmieniamy miejsce wstawienia spisu treści na div o id="spis"
    const spisDiv = document.getElementById("spis");
    if (spisDiv) {
        spisDiv.appendChild(tocContainer);
    } else {
        console.error('Nie znaleziono elementu o id="spis".');
    }
});

window.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById("logo");
  
    logo.addEventListener("click", function() {
      window.location.href = "../index.html";
    });
  });