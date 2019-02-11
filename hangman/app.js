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

<<<<<<< HEAD
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
=======
// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = "MX"
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
    } else if (e.target.readyStatet === 4) {
        console.log('Unable to fetch data')
    }
})

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()
>>>>>>> a93585797fcea1310c858e8dfee834391a1eb3f2
