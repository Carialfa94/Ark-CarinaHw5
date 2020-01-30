class Card {
    suits = ['diamonds', 'hearts', 'clubs', 'spades']
    ranks = [0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a']
    constructor(pSuit, pRank) {
    this.suit = pSuit,
    this.rank = pRank,
    this.used = false
    }
    
    getSuit() {
    return this.suits[this.suit];
    }
    
    getRank() {
    return this.ranks[this.rank];
    }
    }