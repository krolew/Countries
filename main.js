const btn = document.querySelector(".btn");
const kraje = document.querySelector(".kraje");
const container = document.querySelector(".container");
const szukaj = document.querySelector(".szukaj");
const szukajBox = document.querySelector(".szukajBox");
const butonEurope = document.querySelector(".btnEurope");
const krajeEuropy = document.querySelector(".krajeEuropy");
const buttonAmeryki = document.querySelector(".btnAmerican");
const buttonAzji = document.querySelector(".btnAsian");
const buttonAfryki = document.querySelector(".btnAfrica");
const krajeAmeryki = document.querySelector(".krajeAmeryki");
const krajeAfryki = document.querySelector(".krajeAfryki")
const krajeAzji = document.querySelector(".krajeAzji");
buttonAmeryki.addEventListener("click", americaCountries);
buttonAzji.addEventListener("click", asiaCountries);
buttonAfryki.addEventListener("click", africaCountries);
btn.addEventListener("click", allCountries);
butonEurope.addEventListener("click", europeCountries);
    let output = "";
    let europeOutput = "";
    let americaOutput = "";
    let africaOutput = "";
    let asiaOutput = "";
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            for (const el of xhr.response) {
                output += `
                <div class="bigBox"><img src="${el.flag}"><p class="panstwo">
                ${el.name}</p> <p class="stolica">${el.capital}</p></div>`; //region europe
                if (el.region == "Europe")
                {
                    europeOutput += `<div class="bigBox"><img src="${el.flag}">
                    <p class="panstwo">${el.name}</p> <p class="stolica">${el.capital}
                    </p>
                    </div>`;
                }
                else if (el.region == "Americas")
                {
                    americaOutput += `<div class="bigBox"><img src="${el.flag}">
                    <p class="panstwo">${el.name}</p> <p class="stolica">${el.capital}
                    </p>
                    </div>`;
                }
                else if (el.region == "Africa") {
                    africaOutput += `<div class="bigBox"><img src="${el.flag}">
                    <p class="panstwo">${el.name}</p> <p class="stolica">${el.capital}
                    </p>
                    </div>`;
                }
                else if (el.region == "Asia") {
                    asiaOutput += `<div class="bigBox"><img src="${el.flag}">
                    <p class="panstwo">${el.name}</p> <p class="stolica">${el.capital}
                    </p>
                    </div>`;
                }

            }
            kraje.innerHTML = output;
            krajeEuropy.innerHTML = europeOutput;
            krajeAmeryki.innerHTML = americaOutput;
            krajeAfryki.innerHTML = africaOutput;
            krajeAzji.innerHTML = asiaOutput;
        }

    });
    xhr.open("GET", "https://restcountries.eu/rest/v2", true);
    xhr.send();

//searching a country typed in input
function wyszukaj () {
    let panstwa = document.querySelectorAll(".panstwo");
    let value = this.value;
    let tab = value.split(" ");
    if (tab != "") {
        for (let i = 0; i < tab.length; i++) {
            tab[i] = tab[i][0].toUpperCase() + tab[i].substr(1);
        }
    }
    let szukane = tab.join(" ");
    panstwa.forEach(function (el) {
        let text = el.innerText;
        if (text.search(szukane) != -1) {
            el.closest(".bigBox").style.setProperty("display", "");
        }
        else {
            el.closest(".bigBox").style.setProperty("display", "none");
        }
    })
}
szukaj.addEventListener("input", wyszukaj);
function przewin() {
    window.scroll({
        top: 970,
        left: 100,
        behavior: 'smooth'
    });
}


/**
*  Wszystkie kraje Świata
**/

function allCountries() {
    if (krajeEuropy.style.display == "grid" || krajeAfryki.style.display == "grid" ||
        krajeAzji.style.display == "grid"   || krajeAmeryki.style.display == "grid")
    {
        krajeEuropy.style.display = "none";
        krajeAzji.style.display = "none";
        krajeAfryki.style.display = "none";
        krajeAmeryki.style.display = "none";
    }
    kraje.style.display = "grid";
    szukaj.style.display = "unset";
    przewin();


};

/**
*  Kraje Europy
**/

function europeCountries() {
    if (krajeAfryki.style.display == "grid" || krajeAzji.style.display == "grid" || krajeAmeryki.style.display == "grid" || kraje.style.display == "grid") {
        krajeAzji.style.display = "none";
        krajeAfryki.style.display = "none";
        krajeAmeryki.style.display = "none";
        kraje.style.display = "none";
    }
    krajeEuropy.style.display = "grid";
    szukaj.style.display = "unset";
    przewin();
}
/**
*  Kraje Ameryki
**/
function americaCountries() {
    if (krajeEuropy.style.display == "grid" || krajeAfryki.style.display == "grid" ||
        krajeAzji.style.display == "grid" || kraje.style.display == "grid")
    {
        krajeEuropy.style.display = "none";
        krajeAzji.style.display = "none";
        krajeAfryki.style.display = "none";
        kraje.style.display = "none";
    }
    szukaj.style.display = "unset";
    krajeAmeryki.style.display = "grid";
    przewin();
}
/**
*  Kraje Azji
**/
function asiaCountries() {
    if (krajeEuropy.style.display == "grid" || krajeAfryki.style.display == "grid" || krajeAmeryki.style.display == "grid" || kraje.style.display == "grid") {
        krajeEuropy.style.display = "none";
        krajeAfryki.style.display = "none";
        krajeAmeryki.style.display = "none";
        kraje.style.display = "none";
    }
    szukaj.style.display = "unset";
    krajeAzji.style.display = "grid";
    przewin();
}


/**
*  Kraje Afryki
**/
function africaCountries() {
    if (krajeEuropy.style.display == "grid" || krajeAzji.style.display == "grid" || krajeAmeryki.style.display == "grid" || kraje.style.display == "grid") {
        krajeEuropy.style.display = "none";
        krajeAzji.style.display = "none";
        krajeAmeryki.style.display = "none";
        kraje.style.display = "none";
    }
    krajeAfryki.style.display = "grid";
    szukaj.style.display = "unset";
    przewin();
}