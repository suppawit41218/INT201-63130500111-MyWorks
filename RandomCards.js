class Blackjack{
 constructor(playername,scores){
     this.playername = playername
     this.scores = scores
 }
 drawCard(){
    let symbols = ["Spade","Heart","Diamond","Club"]
    let rdsym = symbols[Math.floor(Math.random()*symbols.length)]
    let rdnum = Math.floor(Math.random()*13)+1;
    return {rdsym,rdnum}
}

}
let jotaro = new Blackjack("Jotaro Kujo",0)
jotaro.card = jotaro.drawCard()
console.log(jotaro)

