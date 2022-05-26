/**
 * Ejecutar desde localhost ó Liveserver, NO desde c:/file.../
 */

const card01Body = document.querySelector('#card01Body');
const card01Footer = document.querySelector('#card01Footer');

const URL = 'https://icanhazdadjoke.com';
const PARAMETROS = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
}

// Promesa 
chisteBtn.addEventListener("click", async () => {

await fetch(URL, PARAMETROS)
    .then((response) => response.json())
    .then((chiste) => {
        console.log(chiste)
        card01Body.innerHTML = chiste.joke;
        card01Footer.innerHTML = `Id: ${chiste.id} `;
    })
    .catch(error => console.error(error));

});


async function getChiste() {
    const response =
        await fetch(URL, PARAMETROS).then((response) => response.json())
            .then((chiste) => {
                console.log(`chiste en la func =${chiste.id}`);
                 return(chiste);
            })
            .catch(error => console.error(error));
}

let chiste = getChiste();
console.log(`chiste desde llamada=${chiste.id}`);