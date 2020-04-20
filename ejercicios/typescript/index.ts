//bollean 

let muted: boolean = true;
muted = false;

// Numeros
let numerador:number = 42;
let denominador:number = 6;
let resultado = numerador / denominador;

//string 
let nombre: string = 'Richard';
let saludo = `Me llamo richard ${nombre}`;

//Arreglos 
let people: string[] = [];
people = ["Isabel","Nicole","Raul"];

let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(2);

//enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito:Color = Color.Verde;
console.log(`Color favorito es ${colorFavorito}`);

//Any
let comodin:any = "Joker"
comodin = {type: "Wildcard"}

//Object

let someObject: object = {type: "Wildcard"}