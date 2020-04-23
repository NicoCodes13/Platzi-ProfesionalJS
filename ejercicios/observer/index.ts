interface Observer {
    update: (data: any) => void;
}

interface Subject {
    suscribe: (observer: Observer) => void;
    unsuscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
    observers: Observer[] = []; //arreglo de suscriptores

    constructor() {
        const el: HTMLInputElement = document.querySelector("#value");
        el.addEventListener('input', () => {
            this.notify(el.value);
        });
    }

    suscribe(observer: Observer) {
        this.observers.push(observer) //añadir suscriptor a la queue
    }

    unsuscribe(observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer; //busco el index del observador que ya no dfesea notificaciones
        })
        this.observers.splice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement;

    constructor() {
        this.el = document.querySelector('#price'); //se usa # para identificar un ID
    }

    update(data: any) {
        this.el.innerText = data; //actualizacion del texto
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.suscribe(display);

setTimeout(
    () => value.unsuscribe(display), 5000
)