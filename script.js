// 1

// напишите функцию которая принимает в себя строку состоящую из нескольких слов

// (например «lorem ipsum dolor»), а на выходе

// возвращает строку состоящую из длин каждого слова

// let getNum = (str) => {
//     let newStr2 = str.split(" ")
//     let str3 = ""
//     for(let i = 0; i < newStr2.length ; i ++ ){
//         str3 = `${str3} ${newStr2[i].length}`
//     }
 
//     return str3
// }
// console.log(getNum('Ну здравствуй дивный мир'))




// БЫЛО: “Ну здравствуй дивный мир”
// СТАЛО: “2  10  6  3”



// 2

// напишите функцию которая принимает в себя имя, возраст, пол и на их основе возвращает

// объект. При этом необходимо провести валидацию (проверку), если возраст менее

// 18 лет, то вместо объекта вернуть строку «Не подходит по возрасту»


// const get = (name,age,gender) => {
//     let obj = {}
//     obj  = {...obj,name,age,gender}
//     if(obj.age < 18){
//         return "Не подходит по возрасту"
//     } else {
//         return obj
//     }

// } 
// console.log(get('ivan', 25, 'man'))


// 1

// Какие циклы есть в javaScript?
// do 
// while 
// for





// 2 Создайте объект Student, добавьте ему поля на

// усмотрение удалите одно любое поле и сделайте объект неизменяемым.

// let student = {
//     age: 25,
//     name: "Ivan",
//     gender: "men"
// }
// Object.freeze(student)
// student.age = 20
// console.log(student.age)



// 3

// Что такое Хоистинг и как его избежать при создании переменной

// function declaration и var выводят на вверх переменную.



// 4

// В чем различие между slice, substr, substring и зачем они нужны

// Они нужны ддля того чтобы срезать те или иные части .




// 5

// Как мы можем получить reference error

// Мы можем получить reference error если нет переменной и мы пытаемся вывести его на консоль.



// 6

// В чем разница между методом и функцией приведите примеры

// В Методе  filter,map,reduce итд  не создаем функцию .



// 7

// return внутри функций зачем он  нужен? Что вернет функция если нет return

// Return нужен чтобы возвращать элемент.
// ничего не вернет 