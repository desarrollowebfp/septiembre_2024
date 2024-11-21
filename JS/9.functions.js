function sayHello() {
  console.log("Hello");
}

//

function sayHelloWithName(name) {
  console.log("Hello " + name);
}

sayHelloWithName("Pepe");
sayHelloWithName("Byron");

//

function sumNums(numA, numB) {
  const total = numB + numA;
  console.log("El total es: " + total);
}

sumNums(3, 8);

//

function calculateAgeWithName(name, birthYear, actualYear = 2024) {
  const age = actualYear - birthYear;
  console.log(name + " tiene " + age + " años en " + actualYear);
}

calculateAgeWithName("Antonio", 1990);

//

function doubleNums(num) {
  const total = num * 2;
  return total;
}

const x = doubleNums(4);
console.log(x);

//IMC

function calcularIMC(pesoKG, estaturaM) {
  const total = pesoKG / (estaturaM * estaturaM);
  resultadoIMC(total);
}

function resultadoIMC(total) {
  if (total < 18.5) {
    console.log("Peso bajo");
  } else if (total >= 18.5 && total < 25) {
    console.log("Normal");
  } else if (total >= 25 && total < 30) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidad");
  }
}

calcularIMC(70, 1.79);
