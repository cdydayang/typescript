
enum Color {
  plum = "♣",
  spade = "♠",
  block = "♦",
  heart = "♥"
}

type NormalCard = {
  color: Color,
  mark: number
}

type Deck = NormalCard[]

function createDeck(): Deck {

  let deck: Deck = []


  for (let index = 1; index < 13; index++) {

    deck.push({
      mark: index,
      color: Color.block
    })
    deck.push({
      mark: index,
      color: Color.heart
    })
    deck.push({
      mark: index,
      color: Color.plum
    })
    deck.push({
      mark: index,
      color: Color.spade
    })

  }

  return deck

}

function printDeck(deck: Deck) {

  let str: string = ""
  deck.forEach((item, index) => {
    if (item.mark > 1 && item.mark <= 10) {
      str += item.color + item.mark + "\t"
    } else if (item.mark === 11) {
      str += item.color + "J" + "\t"
    } else if (item.mark === 12) {
      str += item.color + "Q" + "\t"
    } else if (item.mark === 13) {
      str += item.color + "K" + "\t"
    } else {
      str += item.color + "A" + "\t"
    }

    if ((index + 1) % 4 === 0) {
      str += "\n\r"
    }
  })

  console.log(str);

}


let decks = createDeck();

printDeck(decks);

