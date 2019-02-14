// callback structure
const getDataCallBack = (callback) => {
    setTimeout(() => {
        callback('This is my callback error', undefined)
    }, 2000)
}

getDataCallBack ((err, data) => {
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})

//Promise structure

const myPromise = new Promise((resolve, reject) => {
    // perform your long running operations here, such as set Timeout
    setTimeout(() => {
        reject('this ugghhh is the Promise data') // things went well and we call the resolve()
    }, 2000)
})

// Now call a method on our Promise
myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
}) 


// example of promise chaining
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('You did not enter a numeric value')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data ${data}`)
    }, (error) =>{
        console.log(error)
    })
},
(error) => {
    console.log(error)
})

// even better promise chaining
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log('Even better promise chaining ' + data)
}).catch((error) => { // we have a single catch function that takes care of the reject callback. 
    console.log(`Error occured : ${error}`)
})
