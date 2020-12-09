export class Equipo{
    private _id: number
    private _nombre: string;

    constructor(id: number, nombre: string, private _puntuacion?: number, private _golesAFavor?: number, private _golesEnContra?: number){
        this._id = id;
        this._nombre = nombre;
        _puntuacion = 0;
        _golesAFavor = 0;
        _golesEnContra = 0;
    }

    public addPuntuacion(puntos: number): void{
        this._puntuacion += puntos;
    }

    public addGolesAFavor(numeroGoles: number): void{
        this._golesAFavor += numeroGoles;
    }

    public addGolesEnContra(numeroGoles: number): void{
        this._golesEnContra += numeroGoles;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get puntuacion(): number {
        return this._puntuacion;
    }

    public set puntuacion(value: number) {
        this._puntuacion = value;
    }

    public get golesAFavor(): number {
        return this._golesAFavor;
    }

    public set golesAFavor(value: number) {
        this._golesAFavor = value;
    }

    public get golesEnContra(): number {
        return this._golesEnContra;
    }

    public set golesEnContra(value: number) {
        this._golesEnContra = value;
    }

}