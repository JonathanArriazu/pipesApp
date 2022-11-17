export enum Color { //enum es basicamente como trabajar con numeros pero con palabras
    rojo, negro, azul, verde //rojo es 0, negro 1, azul 2, verde 3
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}