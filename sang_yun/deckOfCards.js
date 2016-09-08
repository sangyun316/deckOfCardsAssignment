function Card(suit, value) {
	this.suit = suit;
	this.value = value;
}

function DeckConstructor() {
	this.deck = [];
}

DeckConstructor.prototype.reset = function() {
	var suit = ['diamond', 'heart', 'club', 'spade'];
	var value = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
	
	this.deck = [];
    for (var i = 0; i < suit.length; i++) {
        for (var j = 0; j < value.length; j++) {
            this.deck.push(new Card(suit[i], value[j]));
        }
    }
    return this;
};

DeckConstructor.prototype.shuffle = function() {
	for (var i = 0; i < this.deck.length; i++) {
		var temp = this.deck[i];
		var rand = Math.floor(Math.random()*this.deck.length);
		this.deck[i] = this.deck[rand];
		this.deck[rand] = temp;
	}
	return this;
};

DeckConstructor.prototype.deal = function() {
	return this.deck.pop();
};

function Player(name) {
	this.name = name;
	this.hand = [];
}

Player.prototype.draw = function(deck) {
	this.hand.push(deck.deal());
	return this;
};

Player.prototype.discard = function(playerCard) {
	return this.hand.splice(playerCard, 1);
};

var deck = new DeckConstructor();
console.log(deck.reset());
deck.shuffle();
console.log(deck.shuffle());
var sang = new Player("Sang");
console.log(sang.draw(deck));
console.log(sang.discard());
