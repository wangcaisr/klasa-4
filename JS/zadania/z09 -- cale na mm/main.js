const liczba_a = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const c = parseFloat(liczba_a.value);
    const mm = c * 2.3995
    wynik.innerHTML =`
    wynik: ${mm.toFixed(4)}
    `
})