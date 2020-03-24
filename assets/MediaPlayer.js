class MediaPlayer {
    constructor(config) {
        this.media = config.el
    }
    playPause() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }
    }
}

export default MediaPlayer;