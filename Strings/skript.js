/*
Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль.
    Чтобы получилось вот так:
    showVerticalMessage('марафон')
М
а
р
а
ф
о
н
Если строка начинается с буквы "м" - нужно вывести эту строку с первой заглавной буквой
Если строка больше 10 символов - вывести только первые 10*/

function showVerticalMessage(str) {
    if (str[0] = 'м') {
        console.log(str[0].toUpperCase());
        for (let char of str.slice(1, 10)) {
            console.log(char);
        }
    } else {
        for (let char of str.slice(0, 10)) {
            console.log(char);
        }
    }
}
showVerticalMessage('марафонsukablyat');