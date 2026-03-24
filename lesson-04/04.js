/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    let result = "";  // пустая строка для результата
    
    for (let i = 0; i < str.length; i++) {
        const character = str[i];      // берём каждый символ
        result += character + character;  // добавляем его дважды
    }
    
    return result;  // возвращаем строку
}