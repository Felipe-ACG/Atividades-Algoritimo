function inverter(a){
    i = a.length - 1
    pos = a.length - 1
    while(i>=0){
        console.log(pos,":", a[i])
        i--
        pos--
    }
}
console.log("Lista:")
numeros = [8,3,4,7,5]
inverter(numeros)

console.log("\nLista:")
numeros = [5,4,3]
inverter(numeros)