 // ITERATION 1:
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;  
  }

  //ITERATION 2;
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);}

    //ITERATION 3
    getMinutes() {
      return Math.floor(this.currentTime / 60);
     }

     //ITERATION 4

     getSeconds() {
      return this.currentTime % 60
    }

    //BONUS CENTISECONDS CLASS
      // getCentiseconds() {
        // let centiseconds = Math.floor((this.getTime() % 1000) / 10); // Assuming you have a getTime() method that returns the total time in milliseconds
           //return centiseconds;}

  //ITERATION 5
    computeTwoDigitNumber(value) {
      let twoDigit = value.toString();
  
      if (twoDigit.length === 2) {
        return twoDigit;
      } else if (twoDigit.length === 1) {
        return '0' + twoDigit;
      }
    }
    
    //ITERATION 6
    stop() {
      clearInterval(this.intervalId);}

      //ITERATION 7
      reset() {
        this.currentTime = 0;
      }

      //ITERATION 8: BONUS
      split() {
        let minutes = this.getMinutes();
        let seconds = this.getSeconds();
            
        return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;
          }
        }

        //ITERATION 9: BONUS (NOT TESTED ON JASMIN SO I WILL PUT IT AS A COMMENT)
        
        // split() {
          // let minutes = this.getMinutes();
          //let seconds = this.getSeconds();
          //let centiseconds = this.getCentiseconds();
          
            //return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}:${this.computeTwoDigitNumber(centiseconds)}`;}}

        