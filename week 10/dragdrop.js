const card = document .querySelector(".card");
console.log(card);

let draggedCard = null;

// if using drag and drop, have the drag function first. 
card.addEventListener("dragstart", function() {
    draggedCard = card;
    console.log(draggedCard);
})

const dropbox = document.querySelector(".dropbox");
console.log("dropbox");

dropbox.addEventListener("dragover", function(e) {
    e.preventDefault();
})

// dropbox.addEventListener("drop", function(e) {
//     const clone = draggedCard;
//     // dropbox.innerHTML = draggedCard;
//     dropbox.appendChild(draggedCard);
//     draggedCard = null;
// });

// clone the original card, keeping the card
dropbox.addEventListener("drop", function(e) {
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