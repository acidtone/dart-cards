import { cards } from './cards'

// Shuffles an array using Fisher–Yates algorithm
const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export const createDeck = (type = 'full') => {
  let baseDeck = [];

  for(const card of cards) {
    const newCard = card;
    for(let i = 0; i < newCard.quantity; i++) {
      baseDeck = [newCard, ...baseDeck];
    }
  }

  return shuffle(baseDeck);
}