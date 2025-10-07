function procent_z_liczby(liczba, procent) {
    return liczba*procent/100;
}///////////////////////////////
/*
 console.log(procent_z_liczby(120,50))
*/

const liczba = document.querySelector("#liczba");
const procent = document.querySelector("#procent");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let licz = parseFloat(liczba.value);
    let proc = parseFloat(procent.value);
    let wynik_liczba = procent_z_liczby(licz, proc);
    wynik.innerHTML = `
    podana liczba: ${licz}<br>
    podany procent: ${proc}%<br>
    obliczony wynik: <b>${wynik_liczba}</b><br>
    `
})
