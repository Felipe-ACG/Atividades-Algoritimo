pesos = [0.4,0.2,0.1,0.3]
notas = [8.2,5.0,10.0,9.1]
i = 0
soma = 0
while(i<pesos.length){
    result=pesos[i]*notas[i]
    soma += result
    i++
}
console.log("Nota Final:", soma)