s = "abc"

tentativa = 0

entrada = "Entre com a senha";

while(s != entrada && tentativa < 3){
    entrada = prompt("Entre com a senha")

    if(s == entrada){
        console.log("Acesso liberado")
    }

    else{
        console.log("Senha incorreta")
    }

    tentativa++
}
if (tentativa >= 3){
    console.log("Voce excedeu o numero de tentativas")
}