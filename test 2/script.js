const cards = document.querySelectorAll('.card');
let flippedCards = [];
let lockBoard = false;

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('flip') || flippedCards.includes(card)) return;

    card.classList.add('flip');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      const name1 = card1.getAttribute('data-name');
      const name2 = card2.getAttribute('data-name');

      if (name1 === name2) {
        flippedCards = [];
      } else {
        lockBoard = true;
        setTimeout(() => {
          card1.classList.remove('flip');
          card2.classList.remove('flip');
          flippedCards = [];
          lockBoard = false;
        }, 3000);
      }
    }
  });
});
