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

//----------------------------------------------------------------------------------------

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let a ='Lorem ipsum dolor sit amet.';
// function showAr(){
//     document.write(`<p>${a}</p>`);
// }
//  showAr(a);
//----------------------------------------------------------------------------------------
// створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

// let li = 'Lorem ipsum dolor sit amet.'
//
// function showLI(){
//     document.write(`<ul>`)
//     document.write(`<li>${arguments}</li>`)
//     document.write(`<li>${arguments}</li>`)
//     document.write(`<li>${arguments}</li>`)
//     document.write(`</ul>`)
// }
// showLI(li)

//-----------------------------------------------------------------------------------------
// створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let li = 'Lorem ipsum dolor sit amet.'
// function func(a,b) {
//     document.write(`<ul>`)
//     for (let j = 0; j < b; j++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// func(li,8);
//------------------------------------------------------------------------------------------
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

// let num = ['Lorem', 'ipsum','35',true, 'amet',54]
//
// function arr(a) {
//     document.write(`<ul>`)
//     for (let j = 0; j <a.length; j++) {
//         let num =a[j]
//         document.write(`<li>${num}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// arr(num);

//-------------------------------------------------------------------------------------------
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let info = [
//     {name: 'Ira', age: 16, id: 1},
//     {name: 'Vanja', age: 25,id: 25},
//     {name: 'kolya', age: 44, id: 316},
//     {name: 'Olya', age: 52, id: 24},
//     {name: 'Sasha', age: 21, id: 8},
//
// ];
//
//
// function arrUsers(user) {
//     for (let i = 0; i < user.length; i++) {
//         const user = info[i];
//         document.write(`<div>${user.id} | ${user.name} - ${user.age}</div>`)
//         document.write(`<h4>--------------</h4>`)
//     }
// }
//
// arrUsers(info);
//-------------------------------------------------------------------------------------------------

// створити функцію яка повертає найменьше число з масиву

// let arr1 =[5,16,7,104,32]
// function minNum(arr2) {
//     let min = arr1[0]
//     for (let i = 0; i < arr2.length; i++) {
//         if (min >= arr1[i] ) {
//         }
//         return min
//     }
// }
// console.log(minNum(arr1));
// -------------------------------------------------------------------------------------------------
// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// function arrSum (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//
//     }
//     return sum;
// }
// console.log(arrSum([5, 1, 4]));
//---------------------------------------------------------------------------------------------------

// створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap (arr, index1, index2) {
//     const x1 = arr[index1];
//     const x2 = arr[index2];
//     arr[index2] = x1;
//     arr[index1] = x2;
//
//     return arr;
// }
// console.log(swap([1,2,3,4],0,1));
// console.log(swap([6,7,8,9],2,1));
// console.log(swap([5,6,7,8],3,0));
//---------------------------------------------------------------------------------------------------
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange (sumUAH, currencyValues, exchangeCurrency) {
//     let value;
//     for (number of currencyValues) {
//         if (number.currency === exchangeCurrency) {
//             value = number.value;
//         }
//     }
//     return sumUAH / value;
// }
// console.log(exchange(1000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
