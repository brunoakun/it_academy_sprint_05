// Ajax promise

const cardBody: any = document.querySelector('#cardBody');
const spanHeader: any = document.querySelector('#spanHeader');
let chisteBtn: any = document.querySelector('#chisteBtn');

const FETCH_URL = 'https://icanhazdadjoke.com';
const FETCH_PARAMETROS = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
}

// Promesa 
chisteBtn.addEventListener("click", async () => {

    await fetch(FETCH_URL, FETCH_PARAMETROS)
        .then((response) => response.json())
        .then((chiste) => {
            console.log(chiste)
            cardBody.innerHTML = chiste.joke;
            spanHeader.innerHTML = ` (${chiste.id}) `;
        })
        .catch(error => console.error(error));

});
