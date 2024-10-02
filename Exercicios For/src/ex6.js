entrada = prompt("Entre com os numeros separados por virgula")
nros = entrada.split(",")
for (i = 0; i < nros.length; i++) {
    if(parseInt(nros[i])%2 == 0){
        console.log(nros[i])
    }
}