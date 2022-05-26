"use strict";
// Ajax promise
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cardBody = document.querySelector('#cardBody');
const spanHeader = document.querySelector('#spanHeader');
let chisteBtn = document.querySelector('#chisteBtn');
const FETCH_URL = 'https://icanhazdadjoke.com';
const FETCH_PARAMETROS = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
// Promesa 
chisteBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(FETCH_URL, FETCH_PARAMETROS)
        .then((response) => response.json())
        .then((chiste) => {
        console.log(chiste);
        cardBody.innerHTML = chiste.joke;
        spanHeader.innerHTML = ` (${chiste.id}) `;
    })
        .catch(error => console.error(error));
}));
