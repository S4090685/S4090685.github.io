const myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", handClick);

function handClick() {
    console.log("hey click");
    myCat.classList.toggle("round");
}

const topHeading = document.querySelector("h1");


const myCat = document.querySelector("#my-cat");
console.log(myCat);

myCat.addEventListener("mouseover", addMe);

function addMe() {
    myCat.classList.add("round")
}

myCat.addEventListener("mouseover", removeMe);

function removeMe() {
    myCat.classList.remove ("round")
}

    
    // console.log(topHeading);
    // console.log(topHeading.textContent);
    topHeading.textContent = "This is my new heading";
    topHeading.style.color = "red";

    const header = document.querySelector("header");
    // console.log(header);
    // console.log(header.textContent);
    // console.log(header.innerHTML);
    // inner HTML is more direct
    let course = "OUH29383"
    // header.innerHTML += "<h1>Top Heading </h1>"
    header.innerHTML += `<h1>My course is ${course} </h1>
    <p> this is another para </p>`
    // ` changes "" (a quote) and allows a function


    const allParas = document.querySelectorAll("p");
     console.log(allParas);
    for(let i=0; i<allParas.length; i++) {
        // console.log(allParas[i].textContent);
        allParas[i].style.border = "1px solid blue";
        allParas[i].style.backgroundColor = "beige";
    }

    const mySubheading = document.querySelector("#first-subheading");
    // console.log(mySubheading);

    const allSubHeadings = document.querySelectorAll("h2");
    // console.log(allSubHeadings);
    for(let i=0; i<allSubHeadings.length; i++)
        {
            console.log(allSubHeadings[i].textContent)
        }
