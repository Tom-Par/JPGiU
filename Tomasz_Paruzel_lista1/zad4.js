// class Kwadrat {
//     constructor(a) { this.a = a; }
//     get bok() { return this.a; }
//     set bok(a) { this.a = a; }
//     get obwód() { return 4 * this.a; }
//     set obwód(len) { this.a = len / 4; }
//     get pole() { return this.a * this.a; }
//     set pole(P) { this.a = Math.sqrt(P); }
//     toString() {return `a=${this.bok}\nL=${this.obwod}\nP=${this.pole}\n`;}}
    
//     let k = new Kwadrat(1);
//     k.bok = 12;
//     console.log(k+"");
//     k.obwod = 12;
//     console.log(k+"");
//     k.pole=12;console.log(k+"");

class Kolo {
    constructor(r) { this.r = r; }
    get promien() {return this.r;}
    set promien(r) {this.r = r;}
    get srednica() {return 2 * this.r;}
    set srednica(r) {this.r = r / 2;}
    get pole() {return Math.PI * this.r ^ 2;}
    set pole(r) {this.r = Math.sqrt(r / Math.PI);}
    get obwod() {return 2 * Math.PI * this.r ^ 2;}
    set obwod(r) {this.r = r / (2 * Math.PI);}
    toString() {return `promien=${this.promien}\nsrednica=${this.srednica}\nP=${this.pole}\nObw=${this.obwod}\n`;}}

var k=new Kolo(3);   // Koło o promieniu 3
k.promien=8;         // zmienia promień na 8
console.log(k+"");
k.srednica=10;       // zmienia promień ma 5
console.log(k+"");
k.pole=4;            // zmienia promień na sqrt(4/Pi)
console.log(k+"");
k.obwod=7;           // zmienia promień na 3.5/Pi
console.log(k+"");

