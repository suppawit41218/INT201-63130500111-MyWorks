

    function throwsDice() {
    let dice = [1,2,3,4,5,6]
    let rd = Math.floor(Math.random()*dice.length);
    let choose = dice[rd];
    return choose; }
    
    let scores = throwsDice();
    console.log(scores);