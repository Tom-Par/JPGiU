function bigger(a) {
    return (x) => x > a;
}

function smaller(a) {
    return (x) => x < a;
}

function between(a, b) {
    return (x) => a <= x && x <= b;
}

console.log([2,31,5,3,6].filter(bigger(3))); // wypisuje liczby wieksze od 3
console.log([2,31,5,3,6].find(bigger(3))); // wypisuje pierwszy element wiekszy od 3
console.log([2,31,5,3,6].findIndex(bigger(3))); // wypisuje index pierwszej liczby wieksze od 3
console.log([2,31,5,3,6].every(bigger(3))); // wypisuje true w przypadku gdy wszystkie liczby sa wieksze od 3 w przeciwnym przypadku wypisuje false
console.log([2,31,5,3,6].every(bigger(1))); 
console.log([2,31,5,3,6].some(bigger(3))); // kilka liczb wiekszych niz 3
console.log([2,31,5,3,6].some(bigger(31)));
console.log([2,31,5,3,6].filter(smaller(7))); // wypisuje liczby mniejsze od 7
console.log([2,31,5,3,6].filter(between(3,31))); // wypisuje liczby z podanego przedziau 3-31 wlacznie