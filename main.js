const btn = document.querySelector(".btn");
const kraje = document.querySelector(".kraje");
const container = document.querySelector(".container");
const szukaj = document.querySelector(".szukaj");
const szukajBox = document.querySelector(".szukajBox");
const butonEurope = document.querySelector(".btnEurope");
const krajeEuropy = document.querySelector(".krajeEuropy");
btn.addEventListener("click", allCountries);
butonEurope.addEventListener("click", europeCountries);
    let output = "";
    let europeOutput = "";
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    let howmany = 0;
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            for (const el of xhr.response) {
                output += `<div class="bigBox"><img src="${el.flag}"><p class="panstwo">${el.name}</p> <p class="stolica">${el.capital}</p></div>`; //region europe
                if (el.region == "Europe") {
                    europeOutput += `<div class="bigBox"><img src="${el.flag}"><p class="panstwo">${el.name}</p> <p class="stolica">${el.capital}</p></div>`;
                }
            }
            kraje.innerHTML = output;
            krajeEuropy.innerHTML = europeOutput;
        }

    });
    xhr.open("GET", "https://restcountries.eu/rest/v2", true);
    xhr.send();

//Wszystkie kraje Świata
function allCountries() {
    if (krajeEuropy.style.display == "grid") {
        krajeEuropy.style.display = "none";
    }
    kraje.style.display = "grid";
    szukaj.style.display = "unset";
    szukaj.addEventListener("input", function () {
        let panstwa =  document.querySelectorAll(".panstwo");
        let value = this.value;
            let tab = value.split(" ");
            if (tab != "") {
                for (let i = 0; i < tab.length; i++) {
                        tab[i] = tab[i][0].toUpperCase() + tab[i].substr(1);
                }
            }
            let szukane = tab.join(" ");
            //console.log(szukane);
            panstwa.forEach(function (el) {
                let text = el.innerText;
                if (text.search(szukane) != -1) {
                    el.closest(".bigBox").style.setProperty("display", "");
                }
                else {
                    el.closest(".bigBox").style.setProperty("display", "none");
                }
            })
        //}
    })
    window.scroll({
        top: 980,
        left: 100,
        behavior: 'smooth'
    });
};

/**
*  Kraje Europy
**/

function europeCountries() {
    szukaj.style.display = "unset";
    kraje.style.display = "none";
    szukaj.addEventListener("input", function () {
        let panstwa = document.querySelectorAll(".panstwo");
        let value = this.value;
        window.scroll({
            top: 970,
            left: 100,
            behavior: 'smooth'
        });
        let tab = value.split(" ");
        if (tab != "") {
            for (let i = 0; i < tab.length; i++) {
                tab[i] = tab[i][0].toUpperCase() + tab[i].substr(1);
            }
        }
        let szukane = tab.join(" ");
        //console.log(szukane);
        panstwa.forEach(function (el) {
            let text = el.innerText;
            if (text.search(szukane) != -1) {
                el.closest(".bigBox").style.setProperty("display", "");
            }
            else {
                el.closest(".bigBox").style.setProperty("display", "none");
            }
        })
        //}
    })
    krajeEuropy.style.display = "grid";
    window.scroll({
        top: 970,
        left: 100,
        behavior: 'smooth'
    });

}

