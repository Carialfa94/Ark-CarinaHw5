deck = {

    cardArray:[],
    load:function()
    {
    this.cardArray = []
    for (i=0;i <52;i++){
    suit = Math.floor(i/13);
    rank = i%13 + 2;
    let c = new Card(suit, rank);
    this.cardArray.push(c);
    
    }
    
    console.log(this.cardArray);
    
    
    }
    
    }