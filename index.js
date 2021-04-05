/*1 завдання - оголошення функції function declaration*/
function remember(){
    return "Ти дістав м'ясо з духовки?";
}
console.log(remember());

/*2 завдання - function expression*/
const Remember = function (){
    return "Ти дістав м'ясо з духовки2?";
}
console.log(Remember());

/*3 завдання - параметри*/
function sum(a, b){
    return a+b;
}
console.log(sum(5,10));

/*4 завдання - дефолтні значення параметрів*/
function sum2(a , b= 100){
    return a+b;
}
console.log(sum2(25))

/*5-6 завдання - анонімні функції та передача анонімних функцій як параметрів*/
let a = function(){
    console.log("Ти дістав м'ясо з духовки3?");
}
function doAction(someFunc){
    someFunc();
}
doAction(function (){
    console.log("було викликано анонімну функцію");
});

/*7 завдання - присвоєння функцій та їх подальший виклик*/
let f = function(){
    console.log("Все працює")
}

let ant = f;
ant();


/*8 завдання - стрілочні функції та особливості ES6*/
let doSmth = (el)=> {
    el = el + 6;
    console.log(el*el);
};

doSmth(1);

