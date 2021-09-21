const person = {
    name: 'Maxim',
    age: 25,
    greet: function(){
        console.log('Greet')
    }
}

const person2 = new Object({
    name: 'Maxim',
    age: 25,
    greet: function(){
        console.log('Greet')
    }
})

person2.greet()

Object.prototype.sayHello = function(){
    console.log('Say hello')
}

person2.sayHello()

const lena = Object.create(person2)
lena.name = 'Lena'


const str = 'I am strong'
const str2 = new String('I am strong')
