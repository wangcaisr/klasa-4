const a = document.querySelector('#a')
const b = document.querySelector('#b')
const h = document.querySelector('#h')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let aa = parseFloat(a.value);
    let bb = parseFloat(b.value);
    let hh = parseFloat(h.value);
    let pole = (aa+bb)/2 * hh;
    wynik.innerHTML = `
    a = ${aa}<br>
    b = ${bb}<br>
    h = ${hh}<br>
    pole wynosi: ${pole.toFixed(2)}<br>
    `
})