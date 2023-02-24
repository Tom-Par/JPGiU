function* dzielniki(n) {
    for(i=2;i<n;i++)
        if(n%i===0)
            yield i;
}

function* pierwsze(n) {
    for (i=1; i<n;i++) {
        var notPrime = false;
        for (j=2;j<i;j++){
            if(i%j===0 && j!==i) {
                notPrime=true;
            }
        if (notPrime ===false){
            yield i;
        }
    }
}
}

function* rozklad(n) {
    for (i=2; n!=1;)
        if(n%i==0){
            yield i;
            n/=i;
        }else{
            i++
        }
}

function wypisz(gen) {
    for (let x of gen)
        console.log(x);}
        
function wypisz2(gen) {
    while (!(x = gen.next()).done)
    console.log(x.value);};


function sklej(gen,glue=',') {
    let result = '';
    for (let arg of gen)
        result += arg+glue;
    
    console.log(result);
    return result;
}

function suma(gen) {
    var sum = 0;
    for (let arg of gen)
        sum += arg;

    console.log(sum);
    return sum;
}

function iloczyn(gen) {
    var il = 1;
    for(let arg of gen)
        il *= arg;

    console.log(il);
    return il;
}




//Sprawdzamy funkcjonowanie funkcji trzema metodami
console.log(Array.from(pierwsze(12)));
//wypisz(dzielniki(21));
//wypisz2(rozklad(18));

//sklej(pierwsze(12));
//suma(rozklad(18));
iloczyn(dzielniki(21));
