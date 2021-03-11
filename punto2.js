let peso= 60;
let altura= 1.67;
let imc = peso/(altura*altura);  

if (imc <18.5) {

    console.log("Peso insuficiente");

} else if (imc >= 18.5 && imc <= 24.9) { 

    console.log("Normopeso");

} else if (imc >= 25 && imc <= 26.9) { 

    console.log("Sobrepeso grado I");

} else if (imc >= 27.5 && imc <= 29.9) { 

    console.log("Sobrepeso grado II (preobesidad)");

} else if (imc >= 30 && imc <= 34.9) { 

    console.log("Obvesidad tipo I");

} else if (imc >= 35 && imc <= 39.9) { 

    console.log("Obvesidad tipo II");

} else if (imc >= 40 && imc <= 49.9) { 

    console.log("Obvesidad tipo III (mórbida)");

} else if (imc >= 50) { 

    console.log("Obvesidad tipo IV (extrema)");

} else {

    console.log("Error. Intente nuevamente");

}
