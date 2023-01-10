const letters = "abcdefghijklmnopqrstuvwxyz"
let lettersArr = Array.from(letters)
console.log(lettersArr);
let lettersSec = document.querySelector(".letters")
lettersArr.forEach((letter) => {
    let letterSpan = document.createElement("span")
    letterText = document.createTextNode(letter)
    letterSpan.appendChild(letterText)
    letterSpan.className = "letter-box";
    lettersSec.appendChild(letterSpan)
})
const words = {
    programming : ["php","css","html","javascript","python"],
    movies : ["inception","fast and furious","fury","godfather"],
    people : ["jaafr","mahmoud","youssef","ali","moosa"],
    countries : ["syria","egypt","germany","italy","russia"]
}

let allKeys = Object.keys(words);
     

let randomNum1 = Math.floor(Math.random() * allKeys.length),
    randomKey = allKeys[randomNum1],
    valueOfRandomKey = words[randomKey],

    randomNum2 = Math.floor(Math.random() * valueOfRandomKey.length),
    randomValuesOfKeys = valueOfRandomKey[randomNum2];

document.querySelector(".category span").innerHTML =" "+ randomKey;

let guessLetter = document.querySelector(".letters-guess"),
    wordArr = Array.from(randomValuesOfKeys)
    wordArr.forEach((letter) => {
    let letterSpan = document.createElement("span")
    if (letter == " ") {
        letterSpan.className = "empty-span"
        
    }
guessLetter.appendChild(letterSpan)
})
       

console.log(randomValuesOfKeys)
// console.log(randomKey)
// console.log(valueOfRandomKey)
let wordChosen = Array.from(randomValuesOfKeys),
    guessedLetter = document.querySelectorAll(".letters-guess span")
   
console.log(wordChosen)
let theDraw = document.querySelector(".the-draw"),
    wrongChoice = 0;
document.addEventListener('click' , (e)=>{
    let  state = false
        if(e.target.className == "letter-box"){
            let clickedLetter = e.target.innerHTML.toLowerCase();
            e.target.classList.add("clicked")

         wordChosen.forEach((letter, index) => {
            if (letter == e.target.innerHTML) {
                state = true
                guessedLetter[index].innerHTML = letter
                
            }
         })
    if (state !== true) {
        wrongChoice++
        theDraw.classList.add(`wrong-${wrongChoice}`)
        if (wrongChoice > 8) {
            console.log("qqq")
            popup();
            lettersSec.classList.add("finished");
            
        }
        
    }
         console.log(state)     
    }
    
})
function popup() {
    let div = document.createElement("div"),
        divText = document.createTextNode(`Game Over The Word Is ${randomValuesOfKeys}`)
    
    div.appendChild(divText)
    document.body.appendChild(div)
    
    div.className = "game-over"
}