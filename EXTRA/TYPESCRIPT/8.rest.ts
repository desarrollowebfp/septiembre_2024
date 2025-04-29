//Parametros rest -> ...numeros
const contarNumeros = (...numeros: number[]) => {
    return numeros.reduce((acc, numero)=> acc + numero, 0)
} 

contarNumeros(10, 2, 80, 5, 67)