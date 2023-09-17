class CalcController {
    
    constructor() {

        this._locale = 'pt-br'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.currentDate;
        this.initialize();

    }

    initialize() {

        /* 
        * setTimeout(() => {
        *     clearInterval(interval);
        * }, 10000);*/

        /*let interval = setInterval(()  => {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
                day: "2-digit",
                month: "short",
                year: "2-digit"});
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }, 1000);*/

        this.setDisplayDateTime();

        setInterval(()  => {
            this.setDisplayDateTime();
        }, 1000);

    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "2-digit"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }
    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayCalc() {

        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value) {
 
        this._displayCalcEl.innerHTML =  value;
    }

    get currentDate() {
        return new Date();
    }
    set currentDate(value) {
        this.currentDate = value;
    }

}