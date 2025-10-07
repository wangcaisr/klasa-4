const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const liczba_c = document.querySelector('#c');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = parseFloat(liczba_c.value)

    let p = 0.5 * (a + b + c)
    let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));

    wynik.innerHTML = `
    a = ${a}<br>
    b = ${b}<br>
    c = ${c}<br>
    
    pole trójkąta o bokach abc wynosi: ${S}<br>
    `
})