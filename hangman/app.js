// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

// method call that will call the callback method implementation in requests.js
getPuzzle('2', (error, puzzle) => {
    if(error){
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle, ' : From the callback implementation')
    }
    
})
 
// method call that will call the callback method implementation in requests.js
getCountry('MX', (error, country) =>{
    if(!error){
        console.log(country.name, ' : From the callback implementation')
    } else {
        console.log(`An error occured - ${error}`)
    }
})


// method call that will call the promise method implementation in requests.js
getPuzzlePromise('2').then((puzzle)=>{
    console.log(puzzle, ' : From the promise implementation')
},
(error)=>{
    console.log(error)
})

// method call that will call the promise method implementation in requests.js
getCountryPromise('MX').then((countryName)=>{
    console.log(countryName, ' : From the promise implementation')
},
(error)=>{
    console.log(error)
})