function inverte(a){
    saida = "";
    i = 0;
    while(i < a.length){
        saida = a[i] + saida;
        i++
    }
    return saida
}

r = inverte("Pedro")
console.log("Invertido:", r)

r = inverte("Mariana")
console.log("Invertido:", r)
