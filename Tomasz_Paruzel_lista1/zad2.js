function fa(a,b) {
    return b - a;
}

function fb(a,b) {
    return a%10 - b%10;
}

function fc(a,b) {
    return a%100 - b%100;
}

function fd(a,b) {
    let sumA = 0;
    let sumB = 0;
    while(a) {
        digit = a%10;
        sumA += digit;
        a = (a-digit)/10;
    }

    while(b) {
        digit = b%10;
        sumB += digit;
        b = (b-digit)/10;
    }

    return sumA-sumB;
}

console.log([1,2,3,271,12313,123,21313,541,42].sort(fa)); //sortowanie malejaco
console.log([1,2,3,271,12313,123,21313,541,42].sort(fb)); //sortowanie rosnaco wzgledem cyfr jednosci
console.log([1,2,3,271,12313,123,21313,541,42].sort(fc)); //sortowanie rosnaco wzgledem cyfr dziesiatek
console.log([1,2,3,271,12313,123,21313,541,42].sort(fd)); //sortowanie wzgledem sumy cyfr

