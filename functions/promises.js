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
