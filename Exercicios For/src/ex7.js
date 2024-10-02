entrada = prompt("Entre com os numeros separados por virgula")
nros = entrada.split(",")
for (i = 0; i < nros.length; i+=2) {
    console.log(nros[i])
}