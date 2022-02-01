//Задача 1. Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

/*function ucFirst(str) {
    if (!str) {
        console.log('Error')
    } else {
        console.log(str[0].toUpperCase() + str.slice(1));
    }
}
ucFirst('privet');*/


//Задача 2. Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

//1)создаем функцию
//2)в функции переводим все в ловеркейс
//3)ищем подстроку и возвращаем тру если нашли наше слово иначе фолс

/*function checkSpam(str) {
    let spam = str.toLowerCase();
    if (~spam.indexOf('viagra') || ~spam.indexOf('xxx')) {
        console.log('true');
    } else {
        console.log('false');
    }
}
checkSpam('');*/


/*Задача 3. Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
заменяет конец str на "…", так, чтобы её длина стала равна maxlength. Результатом функции должна быть та же строка,
если усечение не требуется, либо, если необходимо, усечённая строка.*/

//1)создаем функцию
//2)проверяем длинну строки, если она не больше максленгз, выводим ее в консоль
//3)если больше максленгз, заменяем конец строки на "..."

/*function truncate(str, maxlength) {
    let string = str.length;
    if (string <= maxlength) {
        console.log(str);
    } else if (string > maxlength) {
        console.log(str.slice(0, maxlength - 1) + '…');
    }

}
truncate('balalallalalalalallalalalala', 10);*/

