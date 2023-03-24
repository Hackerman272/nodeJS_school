import {Clock} from "clock.js"

class ExtendedClock extends Clock {
    constructor({template}, precision = 1000){
        super({template});
        this.precision = precision;
    }
}
