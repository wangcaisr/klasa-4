function losuj(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
const min_liczba = document.querySelector('#min')
const max_liczba = document.querySelector('#max')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener("click", function(){
    let min = parseInt(min_liczba.value);
    let max = parseInt(max_liczba.value);

    let l1 = losuj(min, max);
    let l2 = losuj(min, max);
    let l3 = losuj(min, max);
    let l4 = losuj(min, max);
    let l5 = losuj(min, max);

    let suma = l1+l2+l3+l4+l5
    let iloczyn = l1*l2*l3*l4*l5
    let srednia = suma/2

    wynik.innerHTML =`
    p1 = ${l1}<br>
    p2 = ${l2}<br>
    p3 = ${l3}<br>
    p4 = ${l4}<br>
    p5 = ${l5}<br>
    suma = ${suma}<br>
    iloczyn = ${iloczyn}<br>
    średnia = ${srednia.toFixed(3)}<br>
    `
})