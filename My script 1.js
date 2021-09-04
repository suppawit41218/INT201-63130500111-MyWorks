let rounds = 3 ;
let player1 = { name : " Jotaro "};
let player2 = { name : " Dio "}; 

    function gameOn(){

     var P1scores=0 ;
     var P2scores=0 ;

     console.log("\n Game On \n");

    for(let i = 0; i < rounds ;i++){

      console.log(" Round : "+(i+1)+" G0!!!! \n");
      console.log(player1.name+" throw the dice")

      function player1ThrowsDice() {
      let dice = [1,2,3,4,5,6];
      let rd = Math.floor(Math.random()*dice.length);
      let choose = dice[rd];
      return choose; }

      let P1points = player1ThrowsDice();
      var P1scores = P1scores+P1points;
     console.log(player1.name+" got "+P1points+" points ");
     console.log(player1.name+" current scores is : "+P1scores+"\n");
    
     console.log(player2.name+" throw the dice")

      function player2ThrowsDice() {
      let dice = [1,2,3,4,5,6];
      let rd = Math.floor(Math.random()*dice.length);
      let choose = dice[rd];
      return choose; }
      
     let P2points = player2ThrowsDice();
     var P2scores = P2scores+P2points;
     console.log(player2.name+" got "+P2points+" points ");
     console.log(player2.name+" current scores is : "+P2scores+"\n");
    }
     return {P1scores,P2scores};
}
let result = gameOn();
player1.dices = result.P1scores;
player2.dices = result.P2scores;
console.log(player1.dices+" is the scores of "+player1.name);
console.log(player2.dices+" is the scores of "+player2.name);

if(player1.dices>player2.dices){
  console.log("\n"+player1.name+" has won the game \n yare yare daze ")
}
else if(player1.dices<player2.dices){
  console.log("\n"+player2.name+" has won the game \n Wryyyyy ")
}
else{console.log("\n The game end in a draw ")}