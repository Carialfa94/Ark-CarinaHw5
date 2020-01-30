document.addEventListener("DOMContentLoaded",function (event){

    playerArray =[];
    computerArray = [];
    turn = 0;
    playerScore = 0;
    cpuScore = 0;
    
    document.getElementById("next").style.display = "none";
    
    
    document.getElementById("deal").addEventListener("click",function() {
    console.log("DEALING");
    document.getElementById("playerSpan").innerHTML = "";
    document.getElementById("computerSpan").innerHTML = "";
    document.getElementById("NumberSpan").innerHTML = "";
    document.getElementById("playerScore").innerHTML = "";
    document.getElementById("computerScore").innerHTML = "";
    
    document.getElementById("next").style.display = "inline-block";
    turn = 0;
    deck.load();
    
    for (i=0;i <26;i++){
    console.log(i);
    random = Math.floor(Math.random()*52);
    while(deck.cardArray[random].used) {
    random = Math.floor(Math.random()*52);
    }
    deck.cardArray[random].used = true;
    playerArray[i] = deck.cardArray[random];
    
    random = Math.floor(Math.random()*52);
    while(deck.cardArray[random].used) {
    random = Math.floor(Math.random()*52);
    }
    deck.cardArray[random].used = true;
    computerArray [i] = deck.cardArray[random];
    
    }
    
    console.log(playerArray)
    console.log("-----------------------------");
    console.log(computerArray);
    });
    
    
    document.getElementById("next").addEventListener("click",function() {
    if(turn == 26) {
    return; // turn 26 is the end
    }
    let pCard = document.getElementById("playerSpan");
    let cCard = document.getElementById("computerSpan");
    
    pCard.innerHTML = playerArray[turn].getRank() + " " + playerArray[turn].getSuit();
    if(playerArray[turn].getSuit() == 'hearts' || playerArray[turn].getSuit() == 'diamonds') {
    pCard.classList.add('red');
    }
    else {
    pCard.classList.remove('red');
    }
    
    cCard.innerHTML = computerArray[turn].getRank() + " " + computerArray[turn].getSuit();
    if(computerArray[turn].getSuit() == 'hearts' || playerArray[turn].getSuit() == 'diamonds') {
    cCard.classList.add('red');
    }
    else {
    cCard.classList.remove('red');
    }
    
    if(playerArray[turn].rank > computerArray[turn].rank) {
    playerScore += 1;
    document.getElementById("playerScore").innerHTML = playerScore;
    }
    else if(playerArray[turn].rank < computerArray[turn].rank) {
    cpuScore += 1;
    document.getElementById("computerScore").innerHTML = cpuScore;
    }
    
    
    turn += 1;
    let Tnumber = document.getElementById("NumberSpan");
    Tnumber.innerHTML = turn;
    if(turn == 26) {
    document.getElementById("next").style.display = "none";
    }
    });
    
    })