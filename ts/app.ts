// Parámetros
const CHISTES: any = [];
let fecha: Date = new Date();
const openweathermapApiKey = "4d8fb5b93d4af21d66a2948710284366";
const ciudadMeteo = "barcelona";

// Config fetch Promesa
const FETCH_URL: string = 'https://icanhazdadjoke.com';
const FETCH_PARAMETROS: any = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
}

// Dom Div's
const cardBody: any = document.querySelector('#cardBody');
const spanHeader: any = document.querySelector('#spanHeader');
let divBtnScore: any = document.querySelector('#divBtnScore');
let divInfo: any = document.querySelector('#divInfo');
let divCiudad: any = document.querySelector('#divCiudad');
let divMeteo: any = document.querySelector('#divMeteo');

// Dom Botones
let btnEmpezar: any = document.querySelector('#btnEmpezar');
let btnMalo: any = document.querySelector('#btnMalo');
let btnNormal: any = document.querySelector('#btnNormal');
let btnBueno: any = document.querySelector('#btnBueno');

// Eventos
btnMalo.addEventListener("click", () => getChiste(1));
btnNormal.addEventListener("click", () => getChiste(2));
btnBueno.addEventListener("click", () => getChiste(3));

btnEmpezar.addEventListener("click", () => {
    btnEmpezar.setAttribute("hidden", true);
    getChiste(0);
});


// Promesa Chiste
async function getChiste(voto: number): Promise<void> {
    spanHeader.innerHTML = ` cargando... `;
    await fetch(FETCH_URL, FETCH_PARAMETROS)
        .then((response) => response.json())
        .then((chisteResult) => {
            cardBody.innerHTML = chisteResult.joke;
            spanHeader.innerHTML = ` (${chisteResult.id}) `;

            fecha = new Date();
            const chisteMostrado = new Chiste(chisteResult.id, chisteResult.joke, 0, fecha.toISOString());
            CHISTES.push(chisteMostrado);

            // Gurdar el voto en el anterior
            if (CHISTES.length > 1) CHISTES[(CHISTES.length) - 2]._puntuacion = voto;

            // Mostrar div de botones de puntiación
            divBtnScore.removeAttribute("hidden");
        })
        .catch(error => console.error(error));

    console.log(CHISTES);
    muestraArrChistes();

}

// Promesa Meteo
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadMeteo}&appid=${openweathermapApiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

        divCiudad.innerHTML = `<img class="city-icon" src="${icon}" alt="${weather[0]["description"]
            }"> ${name} ${Math.round(main.temp)}<sup>°C</sup> `;
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