"use strict";
class Chiste {
    // CONSTRUCTOR
    constructor(id, texto, puntuacion, fecha) {
        this._id = id;
        this._texto = texto;
        this._puntuacion = puntuacion;
        this._fecha = fecha;
    }
    // GETTERS & SETTERS
    get id() { return this._id; }
    get texto() { return this._texto; }
    get puntuacion() { return this._puntuacion; }
    get fecha() { return this._fecha; }
    set id(val) { this._id = val; }
    set texto(val) { this._texto = val; }
    set puntuacion(val) { this._puntuacion = val; }
    set fecha(val) { this._fecha = val; }
    // METODOS DE LA CLASE 
    getInfo() {
        let resultado = "<ul>";
        resultado += '<li><b> id: ' + this.id + "</b></li>";
        resultado += '<li>texto: ' + this.texto + "</li>";
        resultado += '<li>puntuacion: ' + this.puntuacion + "</li>";
        resultado += '<li>fecha: ' + this.fecha + "</li>";
        resultado += '</ul>';
        return (resultado);
    }
}
