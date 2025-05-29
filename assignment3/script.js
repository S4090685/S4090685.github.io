// the js is the same for each level.
// the function of the js is when you click on the card it will flip around and automatically flip back after 2s. But it will only automatically 
// flip back when two different cards are flipped around. when same images are flipped, the card stays as card front. only 2 card can be clicked
// at a time
const cards = document.querySelectorAll('.card');
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


