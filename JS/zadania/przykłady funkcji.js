function powitanie_bez() {
    return `<><><><><><><><><><><><><><><><><>`
}/////////////////////////////////////////////////
console.log(powitanie_bez())
console.log(powitanie_bez())
console.log(powitanie_bez())


function srednialiczb(l1,l2,l3,l4){
    return (l1 + l2 + l3 + l4)/4
}/////////////////////////////////////////////////
console.log(srednialiczb(2,2,2,2))


function powitanie(imie){
    return `witaj ${imie}! miło cię widzieć na naszej stronie.`;
}/////////////////////////////////////////////////
console.log(powitanie('piotr'))
console.log(powitanie('pawel'))


function sredniageometryczna(l1,l2,l3,l4){
    return Math.pow(l1*l2*l3*l4, 0.25)
}/////////////////////////////////////////////////
console.log(sredniageometryczna(2,2,2,2))
console.log(sredniageometryczna(2,2,5,7).toFixed(3))


function ilorazliczb(l1,l2){
    return l1/l2;
}/////////////////////////////////////////////////
console.log(ilorazliczb(2,2))


function sumaroznica(l1,l2){
    let suma = l1+l2
    let roznica = l1 - l2
    let iloczyn = l1 * l2
    let iloraz = l1 / l2
    let reszta = l1 % l2
    let wynik = `suma = ${suma} roznica = ${roznica} iloczyn = ${iloczyn} iloraz = ${iloraz} reszta = ${reszta}`
    return wynik
}/////////////////////////////////////////////////
console.log(sumaroznica(2,2))