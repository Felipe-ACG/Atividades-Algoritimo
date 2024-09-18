matriz = [
    [9,2,4],
    [6,5,7],
    [2,1,3]
    ]
col = 0
soma = 0
while(col<matriz.length){
    lin = 0
        while(lin<matriz[col].length){
        soma += matriz[col][lin]
        lin++
    }
    col++
}
console.log("Somatorio:", soma)