let liczba1 = 10;
let liczba2 = 10;
let numbercheck = function (li1, li2) {
    if (li1 == 20) {
    return true;
    } else if (li2 == 20) {
      return true;
    } else if (li1+li2 <= 20) {
      return true;
    } else {
      return false;
      }
}
console.log(numbercheck(liczba1, liczba2));
