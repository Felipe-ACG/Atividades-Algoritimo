entrada = prompt("Entre com os numeros separados por virgula")
nros = entrada.split(",")
soma = 0
for (i = 0; i < nros.length; i++) {
    soma += parseInt(nros[i])
}
console.log("Somatorio:", soma)