// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
    return ((a > b) && (a > c)) ? a :
            ((b > a) && (b > c)) ? b : c;
}
console.log(findLargest(10,20,30));
