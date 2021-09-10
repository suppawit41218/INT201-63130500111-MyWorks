class Dice {

    constructor(gameTitle) {
      console.log('constructor is working');
      this._diceName = gameTitle;
      this._faceValue = 0;
  
    }
  roll() {
  return Math.floor(Math.random() * 6) + 1;
   }
  
  }
  
  //#1
  let dice1 = new Dice();
  
  console.log(dice1);
  console.log(dice1.roll());
  
  
  
  let dice2 = new Dice();
  
  
  
  console.log(dice2);
  
  console.log(dice2.roll());