export class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    
    start = () => {
        if (this.onStart){
            this.onStart(this.getTimeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 10);
        
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.getTimeRemaining > 0){
            this.setTimeRemaining = this.getTimeRemaining - .01;
            if (this.onTick){
                this.onTick(this.getTimeRemaining);
            }
        }
        else{
            if (this.onComplete){
                this.onComplete();
            }
            this.pause();
        }
    }

    get getTimeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set setTimeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
        
}