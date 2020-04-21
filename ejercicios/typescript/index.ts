//funciones despues de los parentesis se indica el tipo de retorno
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 6);

//Tipar una funcion que devuelve una funcion
function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6);

//funciones con parametros opcionales ? tiene la opcion de ser undifine y si se le asigna valor toma el asignado
function fullName(firstName: string, lastName?: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('Agente');
console.log(richard)