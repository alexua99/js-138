
// Old
// var a = 2;


// Змінна з можливістю перезапису
let a = 2;

// Костанта немає можливости змінити тип данних
const b = 2;

// Число
let num = 2;

// СТрока
let str = '<h1 style="color: red;">Test</h1>';





// Варіанти виводу результату

// Old
// document.write("TEST")
// alert("test")



// console.log("Test");
// document.querySelector('.out').innerHTML = "Test"



// Математичні оператори ( * - / - + - - )
console.log('2' + ' + ' + '2' + ' = ' + (2 + 2));


console.log(2 + 2)
console.log(2 + '2')
console.log(2 + 2 - '2')

// Конкатинація
let userName = 'Sasha';

console.log('Hello' + " " + userName);


// Варіанти вводу

let a1 = 2;
let a2 = 2;
let res = a1 + a2;

console.log(res);


// let p1 = +prompt('Перше число')
// let p2 = +prompt('Друге число')

// console.log(p1 + " + " + p2 + " = " + (p1 + p2))

// Завдання 
// 1: Запитати Імя 
// 2: Запитати Фамілію

// результат: Привіт, Імя Фамілія!



// let p3 = prompt('Імя')
// let p4 = +prompt('Cумма в $')

// let res2 = p3 + " Ваша сумма: " + p4 * 40 + 'гр'

// console.log(res2)

// Завдання 2
// 1: Запитати Імя 
// 2: Сумму в 100$

// USD = 40 gr

// результат: Імя ви отримуете: 4000 гр



let btn = document.querySelector('.btn')
let inp1 = document.querySelector('.inp_1')
let inp2 = document.querySelector('.inp_2')
let calcOut = document.querySelector('.calc-out')

btn.onclick = () => {
    calcOut.innerHTML = +inp1.value + +inp2.value
}


// Задача №2
// 1: створити div.test
// 2; запитати prompt('Імя') і +prompt('Вік')
// 3; div.test вивести "Привіт! Імя! Вітаю з днема народження вам: Вік "



let num1 = 10;

let test = `
    <div class="box">
        <img src="" alt="">
        <h2 class="title">Вам років: ${num1}</h2>
        <p></p>
       <button>Add</button>
    </div>
`
let test2 = ''
let test3 = ""

document.querySelector('.test1').innerHTML += test;


