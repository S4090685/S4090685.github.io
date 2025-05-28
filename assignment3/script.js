
const cards = document.querySelectorAll('.card'); // Get all cards
console.log(cards);
let flipped = []; 
let locked = false;

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (locked || card.classList.contains('flip') || flipped.includes(card)) return;
    card.classList.add('flip');
    flipped.push(card);
    if (flipped.length < 2) return;
    const [first, second] = flipped;
    const isMatch = first.dataset.name === second.dataset.name;
    if (isMatch) {
      flipped = []; 
    } else {
      locked = true;
      setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        flipped = [];
        locked = false;
      }, 2000);
    }
  });
});


