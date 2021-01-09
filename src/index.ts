type Color = "♥" | "♦" | "♠" | "♣";
type NormalCard = {
  color: Color,
  mark: number,
};
type Deck = NormalCard[];


function createDeck(): Deck {
  let deck: Deck = [];
  for (let index = 1; index <= 13; index++) {
    deck.push({
      mark: index,
      color: "♠"
    })
    deck.push({
      mark: index,
      color: "♣"
    })
    deck.push({
      mark: index,
      color: "♥"
    })
    deck.push({
      mark: index,
      color: "♦"
    })
  }

  return deck;
}


function printDeck(deck: Deck) {

  let str = "";
  deck.forEach((item,index) => {
    if (item.mark > 1 && item.mark <= 10) {
      str += item.color + item.mark + "\t";
    } else if (item.mark === 11) {
      str += item.color + "J" + "\t";
    } else if (item.mark === 12) {
      str += item.color + "Q" + "\t";
    } else if (item.mark === 13) {
      str += item.color + "K" + "\t";
    } else if (item.mark === 1) {
      str += item.color + "A" + "\t";
    }
    if ((index + 1) % 4 === 0){
      str += "\n\r";
    }
  })

  console.log(str);
  
}

let deck = createDeck();
printDeck(deck);

