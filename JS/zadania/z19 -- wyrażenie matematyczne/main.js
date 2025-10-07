const liczba = document.querySelector("#liczba");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector('button');

btn.addEventListener("click", function(){
    const x = parseFloat(liczba.value);

    let licznik = x * x;
    let mianownik = Math.pow(1 + Math.abs(x), 2);

    let wyn = licznik / mianownik;

    wynik.innerHTML =`
    wynik = ${wyn.toFixed(2)}<br>
    `
})