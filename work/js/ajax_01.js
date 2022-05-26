/**
 * Ejecutar desde localhost ó Liveserver, NO desde c:/file.../
 */

const card01Body = document.querySelector('#card01Body');
const card01Footer = document.querySelector('#card01Footer');
const contaUsr = document.querySelector('#contaUsr');

const API_URL = "https://jsonplaceholder.typicode.com";

card01Footer.innerHTML = API_URL;


// Promesa

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        let result = '';
        if (users) {
            contaUsr.innerHTML = users.length;
            for (let usuario of users) {
                result += `${usuario.id} - ${usuario.name} <br>`;
            }
        }
        card01Body.innerHTML = result;
    });


