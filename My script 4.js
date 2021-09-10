
let card = {symbol : ["Spade","Heart","Diamond","Club"]}
card.num = null;

function randomCard(){
    let rdsym = Math.floor(Math.random()*card.symbol.length);
    let rdnum = Math.floor(Math.random()*13);
    return {rdsym,rdnum};
}
let rdcard = randomCard();

function randomSymbol(){
    return card.symbol[rdcard.rdsym];
}
function randomNumber(){
    let num = rdcard.rdnum+1;
    let state;
    switch(num){
        case 1 :  return state = "Ace" ;break;
        case 11 : return state = "Jack" ;break;
        case 12 : return state = "Queen" ;break;
        case 13 : return state = "King" ;break;
        default : return num ; break;
    }
} 
card.symbol = randomSymbol();
card.num = randomNumber();
console.log(card)