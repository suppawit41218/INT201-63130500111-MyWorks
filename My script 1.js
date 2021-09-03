let rounds = 3 ; 

    function gameOn(){
     var scores=0 ;
     console.log("\n Game On \n");

    for(let i = 0; i < rounds ;i++){

      console.log(" Round : "+(i+1));
      console.log("you throw the dice")
      function throwsDice() {
      let dice = [1,2,3,4,5,6];
      let rd = Math.floor(Math.random()*dice.length);
      let choose = dice[rd];
      return choose; }
      
     let points = throwsDice();
     var scores = scores+points;
     console.log("you got "+points+" points ");
     console.log("your current scores is : "+scores+"\n");
    }
    return scores;
}
console.log("conclude "+gameOn()+" is your scores");
