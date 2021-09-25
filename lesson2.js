//Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply
function hello(){
    console.log('Hello', this)
}

// hello()

const person = {
    name: 'Maxim',
    age: 25,
    sayHello1: hello,
    // sayHelloWindow1: hello.bind(document),
    logInfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena ={
    name: 'Elena',
    age: 23
}

// person.sayHello1()
// person.sayHelloWindow()

// person.logInfo.bind(lena)()

//person.logInfo.bind(lena, 'Frontend', '8-999-123-12-21')()

// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog('Frontend', '8-999-123-12-21')

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-123-12-21')
// fnLenaInfoLog()

// person.logInfo.call(lena, 'Frontend', '8-999-123-12-221')
// person.logInfo.apply(lena, ['Frontend', '8-999-123-12-221'])

const array = [1,2,3,4,5]

// function multBy(arr, n){
//     return arr.map(function(i){
//         return i*n
//     })
// }
// console.log(multBy(array, 5))


Array.prototype.multBy = function(n){
        return this.map(function(i){
        return i*n
    })
}

console.log(array.multBy(2))
