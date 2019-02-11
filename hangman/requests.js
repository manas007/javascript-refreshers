// callback pattern
const getPuzzle = (wordCount, callback) => {

    const puzzleRequest = new XMLHttpRequest()

    puzzleRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle) // calling our callback
        } else if (e.target.readyState === 4) {
            callback('An error taken place', undefined)
        }
    })

    puzzleRequest.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    puzzleRequest.send() 
} 

// callback pattern
const getCountry = (countryCode, callback) => {

    const countryRequest = new XMLHttpRequest()
    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (e.target.readyStatet === 4) {
            callback('Problem', undefined)
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
}


// lets create the above two method in promise pattern
//promise pattern for getPuzzle above
const getPuzzlePromise = (wordCount) => new Promise((resolve, reject) => {
    const puzzleRequest = new XMLHttpRequest()
    puzzleRequest.addEventListener('readystatechange', (event) => {
        if(event.target.readyState === 4 && event.target.status === 200){
            const data = JSON.parse(event.target.responseText)
            resolve(data.puzzle)
        } else if (event.target.readyState === 4){
            reject('Some error Occured')
        }
    })

    puzzleRequest.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    puzzleRequest.send()
})

//promise pattern for getCountry above
const getCountryPromise = (countryCode) => new Promise( (resolve, reject) => {
    const countryRequest = new XMLHttpRequest()
    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country.name)
        } else if (e.target.readyStatet === 4) {
            reject('Problem')
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
})