let countNo = 0;
let message = [
    "Are you my girlfriend 😳", 
    "How dare you 😡", 
    "Who are you 🤨", 
    "What do you want from me 😰", 
    "Is this a joke 🤔", 
    "You can't be serious right now 😤", 
    "Do I know you 😵", 
    "Are you kidding me 😑", 
    "This must be a mistake 😵‍💫", 
    "What is happening 😨", 
    "Explain yourself 🤬", 
    "Why would you say that 😠", 
    "Who sent you 🕵️", 
    "Are you out of your mind 🤯", 
    "What are you even talking about 🤦", 
    "I refuse to believe this 🙄", 
    "This is beyond ridiculous 🤬", 
    "You're messing with me, right 😏", 
    "No way you're saying this right now 😧", 
    "I must be dreaming 💤", 
    "You expect me to believe that 😒", 
    "You have got to be joking 😂"
];
let questionTimeOut;

//To get html element
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const title = document.querySelector(".message");
const gif = document.querySelector("img");
const answer = document.querySelector(".answer");

//Get the response
yes.addEventListener('click', ()=>{
    ily();
    clearQuestionTimeout();
})
no.addEventListener('click', ()=>{
    badGirl();
    countNo++;
})


//If she say yes
function ily(){
    answer.style.display = "none";
    gif.src=("./assets/good.gif");
    if (countNo >= 10){

        setTimeout(()=>{
            let final = document.createElement("div");
            final.textContent = "Finally 😭";
            final.classList.add("message");

            gif.insertAdjacentElement("afterend",final);
        },2800);
    }
    title.innerHTML = "She said yes !!!";
}

//If she say no
function badGirl(){
    clearQuestionTimeout();
    gif.src=("./assets/bad.gif");
    changeTitle();
    changeButtons(countNo);
    startQuestionTimeout();
}


//Timeout functions
function startQuestionTimeout(){
    questionTimeOut = setTimeout(()=>{
        title.innerHTML = "Would you be my valentine ?"
    },2000);
}

function clearQuestionTimeout(){
    clearTimeout(questionTimeOut);
}

//Other functions
function changeTitle(){
    let i = Math.floor(Math.random()*(19-0)+0);
    title.innerHTML = message[i];
}

function changeButtons(count){
    if(count >= 2) moveNo();
    if (count >= 4) resize(no,5);
    if (count >= 6) resize(yes,-10);
    if (count >= 10) chase();
}

function moveNo(){
    let i = Math.floor(Math.random()*80);
    let j = Math.floor(Math.random()*80);
    no.style.position = "absolute";
    no.style.left = i+"vw";
    no.style.top = j+"vh";
}

function resize(element,value){
    let currentFontSize = getComputedStyle(element).fontSize;
    currentFontSize = parseInt(currentFontSize);
    
    if(currentFontSize == 0 || currentFontSize <= 7 || currentFontSize >= 172) return;
    element.style.fontSize = `${currentFontSize - value}px`;
}


function chase(){
    yes.style.zIndex = "10";

    let i = getComputedStyle(no).left;
    let j = getComputedStyle(no).top;
    i = parseInt(i);
    j = parseInt(j);
    yes.style.position = "absolute";
    yes.style.left = i + "px";
    yes.style.top = j + "px";
}

//Remove active on mobile
const button = document.querySelectorAll('.button');

        button.forEach(element => {
            element.addEventListener('touchstart', function() {
                if (element.style.position != 'absolute') {
                    element.style.position = 'relative';
                    element.style.transition = 'all cubic-bezier(0.215, 0.610, 0.355, 1) 0.3s';
                    element.style.top = '-0.5em';
                }
            }); 
            setTimeout(()=>{
                if (element.style.postion != 'absolute') {
                    element.addEventListener('touchend', function() {
                        element.style.top = '0';
                    });   
                }
            },500);
        }); 




