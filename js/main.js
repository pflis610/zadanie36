let liczba1 = 10;
let liczba2 = 10;
let numbercheck = function (liczba1, liczba2) {
if (liczba1 == 20) {
    return true;
} else if (liczba2 == 20) {
    return true;
} else if (liczba1+liczba2 <= 20) {
    return true;
} else {
    return false;
    }
}
console.log(numbercheck(liczba1, liczba2));
