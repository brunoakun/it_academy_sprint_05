"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Parámetros
const CHISTES = [];
let fecha = new Date();
const openweathermapApiKey = "4d8fb5b93d4af21d66a2948710284366";
const ciudadMeteo = "barcelona";
// Config fetch Promesa
const FETCH_URL = 'https://icanhazdadjoke.com';
const FETCH_PARAMETROS = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
// Dom Div's
const cardBody = document.querySelector('#cardBody');
const spanHeader = document.querySelector('#spanHeader');
let divBtnScore = document.querySelector('#divBtnScore');
let divInfo = document.querySelector('#divInfo');
let divCiudad = document.querySelector('#divCiudad');
let divMeteo = document.querySelector('#divMeteo');
// Dom Botones
let btnEmpezar = document.querySelector('#btnEmpezar');
let btnMalo = document.querySelector('#btnMalo');
let btnNormal = document.querySelector('#btnNormal');
let btnBueno = document.querySelector('#btnBueno');
// Eventos
btnMalo.addEventListener("click", () => getChiste(1));
btnNormal.addEventListener("click", () => getChiste(2));
btnBueno.addEventListener("click", () => getChiste(3));
btnEmpezar.addEventListener("click", () => {
    btnEmpezar.setAttribute("hidden", true);
    getChiste(0);
});
// Promesa Chiste
function getChiste(voto) {
    return __awaiter(this, void 0, void 0, function* () {
        spanHeader.innerHTML = ` cargando... `;
        yield fetch(FETCH_URL, FETCH_PARAMETROS)
            .then((response) => response.json())
            .then((chisteResult) => {
            cardBody.innerHTML = chisteResult.joke;
            spanHeader.innerHTML = ` (${chisteResult.id}) `;
            fecha = new Date();
            const chisteMostrado = new Chiste(chisteResult.id, chisteResult.joke, 0, fecha.toISOString());
            CHISTES.push(chisteMostrado);
            // Gurdar el voto en el anterior
            if (CHISTES.length > 1)
                CHISTES[(CHISTES.length) - 2]._puntuacion = voto;
            // Mostrar div de botones de puntiación
            divBtnScore.removeAttribute("hidden");
        })
            .catch(error => console.error(error));
        console.log(CHISTES);
        muestraArrChistes();
    });
}
// Promesa Meteo
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadMeteo}&appid=${openweathermapApiKey}&units=metric`;
fetch(url)
    .then(response => response.json())
    .then(data => {
    const { main, name, sys, weather } = data;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
    divCiudad.innerHTML = `<img class="city-icon" src="${icon}" alt="${weather[0]["description"]}"> ${name} ${Math.round(main.temp)}<sup>°C</sup> `;
    divMeteo.innerHTML = `${weather[0]["description"]}`;
})
    .catch(() => {
});
// Muestra el array de chistes
function muestraArrChistes() {
    let result = '';
    for (let chiste of CHISTES) {
        result += `${chiste.id} ${chiste.puntuacion} <br>`;
    }
    divInfo.innerHTML = result;
}
