const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);

    let iloraz = a/b

    wynik.innerHTML =
        `
        wynik = ${a} : ${b} = ${iloraz.toFixed(2)}
        `
})