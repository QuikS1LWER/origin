/*
Функция buildFun вернет массив функций. Единственный параметр,
принимаемый buildFun, — это количество элементов N возвращаемого массива.
Желаемый результат заключается в том, что при выполнении всех функций в массиве
должно быть возвращено число от 0 до N.
*/

function buildFun(n){
    var res = []
    for (var i = 0; i < n; i++){
        res.push(function(){
            console.log(i)
        })
    }
    return res;
}
console.log(buildFun(5));

/*Верните среднее значение данного массива,
округленного до ближайшего целого числа.
Массив никогда не должен быть пустым.*/

/*1) посчитать сумму всех оценок, 2) вычислить среднее арифметическое, 3) округлить, 4) вернуть значение*/

/*function getAverage(marks) {
    let sum = marks.reduce((sum, current) => sum + current, 0);
    let average = Math.floor(sum / marks.length);
    return average;
}
console.log(getAverage([16, 10, 4, 14, 13, 2, 10, 12, 16, 10]))*/

