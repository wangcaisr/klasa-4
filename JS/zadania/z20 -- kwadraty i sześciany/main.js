const liczba = document.querySelector('#liczba')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let licz = parseFloat(liczba.value);
    let kwadrat = licz * licz;
    let szescian = licz * licz * licz;
    wynik.innerHTML = `
    kwadrat = ${kwadrat}<br>
    sześcian = ${szescian}<br>
    `
})