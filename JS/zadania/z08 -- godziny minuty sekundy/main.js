const liczba_a = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const sek = parseInt(liczba_a.value);
    const g = Math.floor(sek / 3600)
    const m = Math.floor((sek % 3600) / 60);
    const s = sek % 60;
    wynik.innerHTML =`
    wynik: ${g}g${m}m${s}s
    `
})