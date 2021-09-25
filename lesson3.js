//Урок 3. JavaScript. Что такое замыкания

// function createCalcFunction(n){
//     return function(){
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(11)
// calc()

function createIncrementor(n){
    return function(num){
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))
console.log(addTen(41))

function urlGenerator(domain){
    return function (url){
        return `http://${url}.${domain}`
    }
}
const comUrl = urlGenerator('com')
console.log(comUrl('google'))
console.log(comUrl('netflix'))

///
const max = {
    name: 'Maxim',
    age: 25
}

const lena ={
    name: 'Elena',
    age: 23
}

function bind (context, fn){
    return function (... args){
        fn.apply(context, args)
    }
}

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}`)
}

bind(max, logPerson)()
bind(lena, logPerson)()