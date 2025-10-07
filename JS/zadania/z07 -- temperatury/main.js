const liczba_a = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value);
    let F = (a+1.8+32)
    let K = (a+273.15)

    wynik.innerHTML =`
    wynik obliczeń dla ${a} &degC wynosi<br>
    T<sub>Farenheita</sub> = ${F}<br>
    T<sub>Kelvina</sub> = ${K}<br>
    `
})