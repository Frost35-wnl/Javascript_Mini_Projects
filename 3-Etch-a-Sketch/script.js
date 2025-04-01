const root = document.documentElement;
let containerDiv = document.querySelector(".container");
let startButton = document.querySelector("button");
let userDimension;

//main
startButton.addEventListener('click', () => {
    removeGrid();
    userDimension = takeUserDimension();
    root.style.setProperty('--user-dimension', userDimension);

    createGrid(userDimension);
    //startButton.style.display = 'none';
});


function takeUserDimension() {
    let userInput;

    do {
        if(userInput > 100 || userInput < 1) alert("The value must be between 1 and 100");
        userInput = prompt("Please enter the number of squares in the width and height", 100);
    } while (userInput > 100 || userInput < 1);

    return userInput;
}

function createGrid(dimension)
{
    let opacityDensity = 10; 

    for (let index = 1; index <= (dimension * dimension); index++) {
        let redValue = Math.random()*254 + 1;
        let greenValue = Math.random()*254 + 1;
        let blueValue = Math.random()*254 + 1;

        const div = document.createElement("div");
        div.classList.add("new");
        div.style.opacity = opacityDensity + '%';

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
            div.style.opacity = (opacityDensity += 10) + '%';
        } );
        containerDiv.appendChild(div);
    }
   
}

function removeGrid(){
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);   
    }
}






