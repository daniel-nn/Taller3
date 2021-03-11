let vlParZapato1= 10;
let vlParZapato2= 0; 
let parZapato1= 2;
let parZapato2= 0;
let precioPares1= parZapato1*vlParZapato1;
let precioPares2= parZapato2*vlParZapato2;
let costoTotalCompra=precioPares1+precioPares2;
let paresZapatos=parZapato1+parZapato2;
const DESC1=0.10
const DESC2=0.30
const DESC3=0.50

if (paresZapatos==3) {
   
   let descuentoTotal= (precioPares1+precioPares2)*DESC1;
   costoTotalCompra= precioPares1+precioPares2-descuentoTotal
    console.log("El costo total su compra es " +costoTotalCompra);

} else if (paresZapatos > 3 && paresZapatos <= 5) {

    let descuentoTotal= (precioPares1+precioPares2)*DESC2;
    costoTotalCompra= precioPares1+precioPares2-descuentoTotal
    console.log("El costo total de su compra es " +costoTotalCompra);

} else if (paresZapatos > 5 ) {

    let descuentoTotal= (precioPares1+precioPares2)*DESC3;
    costoTotalCompra= precioPares1+precioPares2-descuentoTotal
    console.log("El costo total de su compra es " +costoTotalCompra);

} else {

console.log ("El costo total de su compra es " + costoTotalCompra);

}

