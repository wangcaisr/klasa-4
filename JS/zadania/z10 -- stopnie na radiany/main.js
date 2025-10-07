const stopien = document.querySelector('#s')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let s = parseFloat(stopien.value);
    let r = s * (Math.PI/180)


    wynik.innerHTML = `
    wynik: ${r}
    `
})