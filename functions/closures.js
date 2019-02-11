//basic closure example
const myFunction = () => {

        const message = 'This is my message'
        const printMessage = () => {
            console.log(message)
        }
        return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()



// another example where we use closures to create a private variable in javascript.
const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
console.log(counter.get())


// more complex closure, also called as currying in javascript

const createTipper = (baseTip) => {
    return (billAmount) => {
       return baseTip * billAmount
    }
}

const tipOf15Percent = createTipper(0.15)
const tip = tipOf15Percent(100)
console.log("Tip is " , tip)

