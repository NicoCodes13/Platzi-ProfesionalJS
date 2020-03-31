export default class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });

        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    //entries son los objetos a observar en este caso los enviados por player media
    handleIntersection(entries) {
        //como el objeto que estamos observado es solo 1 tomamos la primera posicion
        const entry = entries[0];
        console.log(entry);

        if (entry.isIntersecting) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}