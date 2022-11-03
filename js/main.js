// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che 
// per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli 
// di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 
// stampi “FizzBuzz”.
// ***************************************
// prendiamo una variabile e gli diamo il valore di 100
const numBox = 100;
const fizzBuzz ="fizzbuzz"
const fizz ="fizz"
const buzz = "buzz"

// variabile x la query selector
const miniBox = document.querySelector(".mini-box");
// creiamo un ciclo dando come priorità fizzbuzz e poi gli altri
for (let i = 0; i < numBox; i++ ){
let color = ""
if (i % 3 && i % 5){
    miniBox.innerHTML += `<div class="mini-box ${ color }"> ${fizzBuzz}`;
    color = "bg-danger"

} else if (i % 3) {
    miniBox.innerHTML += `<div class="mini-box ${ color }"> ${fizz}`;
    color = "bg-warning"
} else if (i % 5) {
    miniBox.innerHTML += `<div class="mini-box ${ color }"> ${buzz}`;
    color = "bg-success";
}  else {
    
}
miniBox.innerHTML += `<div class="mini-box ${ color }"> ${i}`;

}
