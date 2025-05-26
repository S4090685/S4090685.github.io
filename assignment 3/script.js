// const cards = document .querySelector(".cards");
// console.log(cards);

// cards.addEventListener("mouseenter", flipMe);

// function flipMe() {
//     cards.classList.add("flip");
// }

// cards.addEventListener("mouseleave", flipMeBack);

// function flipMeBack() {
//     cards.classList.remove("flip");
// }

// // cards.addEventListener("click", function () {
// //     cards.classList.toggle("flip");
// // })
const cards = document.querySelectorAll('.card');
console.log(cards)
// frisst find the correct element, which is the cards, because I want the cards to flip around. 
let flipped = [];
// set an action for cards which is flipped.
cards.forEach(card =>
  card.onclick = () => {
    if (flipped.includes(card) || flipped.length === 2) return;
// only 2 cards are able to flipped at a time, and preventing to 
    card.classList.add('flip');
    flipped.push(card);

    if (flipped.length === 2) {
      const match = flipped[0].dataset.name === flipped[1].dataset.name;
      setTimeout(() => {
        if (!match) flipped.forEach(c => c.classList.remove('flip'));
        flipped = [];
      }, match ? 0 : 2000);
    }
  }
);

