class CalcController {
    constructor() {

        /*
        * date, time
         */
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl =document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        /*
        * Locale
        */
       this._locale = "pt-br",

       /*
        *Operação
       */
      this._operation = [];

        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    /*
        !============================================== Definindo oque ter na calculadora ao iniciar =========================================================================
    */

    initialize() {

        this.setdisplayDateTime();

        setInterval(()=>{
            this.setdisplayDateTime();
        },1000);

    }

    /*
        *============================================== Fim initialize =========================================================================

    */
    /*
        !============================================== Criando a esculta de multiplos eventos =========================================================================
    */

    addEventListenerAll(elements, events, fn) {
        events.split(' ').forEach(event => {
            elements.addEventListener(event, fn, false);
        });
    }

    /*
        *============================================== Fim addEventListenerAll =========================================================================
    */
   

    /*
        !============================================== Criando o clearAll =========================================================================
    */

        clearAll() {

        }

    /*
        *============================================== Fim clearAll =========================================================================
    */

    /*
        !============================================== Criando o clearEntry =========================================================================
    */

        clearEntry() {

        }

    /*
        *============================================== Fim clearEntry =========================================================================
    */

    /*
        !============================================== Criando o método addoperation=========================================================================
    */

        adoperation(value) {
            this._operation = "Error";
        }

    /*
        *============================================== Fim clearEntry =========================================================================
    */
    /*
        !============================================== Criando o setError =========================================================================
    */

        setError() {
            this.displayCalc = "Error";
        }

    /*
        *============================================== Fim clearEntry =========================================================================
    */

    /*
        !============================================== Criando o execBtn para executar a função das teclas da calc =========================================================================
    */

        execBtn(value) {
            switch (value) {

                case 'ac':
                    this.clearAll();
                break;

                case 'ce':
                    this.clearEntry();
                break;
                case 'soma':
                    this.soma();
                break;

                case 'subtracao':
                    this.subtracao();
                break;
                case 'multiplicacao':
                    this.multi();
                break;
                case 'divisao':
                    this.divisao();
                break;
                case 'igual':
                    this.igual();
                break;
                case 'porcento':
                    this.porcento();
                break;

                default: 
                    this.setError();
                break;
            };
        };

    /*
        *============================================== Fim execBtn =========================================================================
    */

    /*
        !============================================== Criando metóddo que irá ler as classes de btn e os números e definindo o forEach para ouvir os ecentos =========================================================================
    */
    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", e => {
                let textBtn = btn.className.baseVal.replace("btn-", "");
                console.log(textBtn);

                this.execBtn();
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown" , e => {
                btn.style.cursor = "pointer";
            });
        });
    }

     /*
    *============================================== Fim initiButtons =========================================================================
    */

    /*
        !============================================== Configurando como a data deve aparecer no display =========================================================================
    */
    setdisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric",
            weekday: "short"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

     /*
    *============================================== Fim setdisplayDatetime =========================================================================
    */
    get displayTime() {
        return this._timeEl.innerHTML;
    }
    get displayDate() {
        return this._dateEl.innerHTML;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    get currentDate() {
        return new Date();
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }
    set currentDate(value) {
        this._currentDate = value;
    }
    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }
    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }
}