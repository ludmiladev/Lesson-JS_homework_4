// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function func(a,b){    // назва функцi] та параметри, які вона приймає
//     return a*b       // тіло функції у фігурних дужках
// }
//
// console.log('площа прямокутника =', func(4,8));
//------------------------------------------------------------------------------------------
// створити функцію яка обчислює та повертає площу кола з радіусом r

// function func(a){
//     return 2*Math.PI*(a*a) // математична формула для обчислення
// }
//
// console.log('площа кола =', func(4));
//------------------------------------------------------------------------------------------
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let num = function(h,r){
//     return 2*Math.PI*(h*r)
// }
//
// console.log('площа циліндру =', num(5, 6));

//-----------------------------------------------------------------------------------------

// створити функцію яка приймає масив та виводить кожен його елемент

// let arr =[1,2,'true','news',5,55]
//  function showArr(х){
//      for (const items of х) {
//          console.log(items)
//      }
//  }
//
//  showArr(arr)


// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
]
function arr(array) {
    for (let element of array) {
        console.log(element)
    }
}
arr(users)
//----------------------------------------------------------------------------------------

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let a ='Lorem ipsum dolor sit amet.';
// function showAr(){
//     document.write(`<p>${a}</p>`);
// }
//  showAr(a);
//----------------------------------------------------------------------------------------
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let li = 'Lorem ipsum dolor sit amet.'

function showLI(){
    document.write(`<ul>`)
    document.write(`<li>${arguments}</li>`)
    document.write(`<li>${arguments}</li>`)
    document.write(`<li>${arguments}</li>`)
    document.write(`</ul>`)
}
showLI(li)






// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//     створити функцію яка повертає найменьше число з масиву
// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency) Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250