function somatorio(a){
    soma = 0
    i = 0
    while( i < a.length){
        soma = a[i] + soma
        i++
    }
    return soma
}
numeros = [8,3,4,7,5]
s = somatorio(numeros)
console.log("Somatorio:", s)

numeros = [5,4,3]
s = somatorio(numeros)
console.log("Somatorio:", s)