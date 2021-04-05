/*продемонструвати різні варіанти замикань*/
function Sum(a){
    return function(b){
        return a+b;
    }
}
let sum = Sum(6);
console.log(sum(5));

function Counter(){
    let count = 0;
    return function(){
        return count++;
    }
}
let counter = Counter();
let counter1 = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter1());
console.log(counter1());
console.log(counter1());

/*продемонструвати паттерн "модуль"*/
let calculator = (function(){
    let data = { number: 0};

    return {
        sum: function(n){
            data.number += n;
        },
        min: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();

calculator.sum(10);
calculator.display();
calculator.min(4);
calculator.display();

/*продемонструвати замикання як обробник деякої події на html-сторінці; анонімна функція-обробник замикає в собі деякі дані і працює з ними.*/

function createOnclick(idElem){
    idElem.addEventListener("click", function (){
        idElem.style.background='blue';
    })
}
let identeficator = document.getElementById('cube')
createOnclick(identeficator);