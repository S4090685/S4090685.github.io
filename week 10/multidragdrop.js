const myCards = [
    { id: 1, name: "Queen", src: "queen.png" },
    { id: 2, name: "King", src: "king.png" },
    { id: 3, name: "Jack", src: "jack.png" },
  ];

let cardComposition = "";

for (let i = 0; i < myCard.length; i++) {
    cardComposition += `
    <div class="card" draggable="true">
        <div class="card-face"><img src="cloud.png" alt="Back" /></div>
        <div class="card-face flip">
          <img src="${myCard[i].src}" alt="${myCard[i].name}" class="card-front" />
        </div>
      </div>
     </div>
    `;
    console.log(cardComposition);
}

const deck = document.querySelector(".deck");
console.log(deck);
deck.innerHTML = "";
deck.innerHTML = cardComposition;

const card = document.querySelectorAll(".card");
console.log(cards);

let draggedCard = null;

// if using drag and drop, have the drag function first. 

for (let i=0; i < myCard.length; i++) {
    cards[i].addEventListener("dragstart", function() {
        draggedCard = cards[i];
        console.log(draggedCard).querySelector(".card-front");
    });
}

const dropbox = document.querySelector(".dropbox");
console.log("dropbox");
dropbox.innerHTML = "";
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = cards[i];
    dropbox.innerHTML = "";
  });
}

dropbox.addEventListener("dragover", function(e) {
    e.preventDefault();
});

dropbox.addEventListener("drop", function() {
    // const clone = draggedCard;
    const clone = draggedCard.cloneNode(true);
    // combine the flip and clone
    clone.addEventListener("click", function () {
        clone.classList.toggle("flip");
    })
    // dropbox.innerHTML = draggedCard;
    dropbox.appendChild(clone);
    draggedCard = null;
});