
class Chiste {

    // ATRIBUTOS de la clase
    _id: string;
    _texto: string;
    _puntuacion: number;
    _fecha: string;

    static malos: number;
    static medios: number;
    static buenos: number;

    // CONSTRUCTOR
    constructor(id: string, texto: string, puntuacion: number, fecha: string) {
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

    set id(val: string) { this._id = val; }
    set texto(val: string) { this._texto = val; }
    set puntuacion(val: number) { this._puntuacion = val; }
    set fecha(val: string) { this._fecha = val; }



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