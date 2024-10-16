let i = 0;
while( i < 6 ){
    nro = parseInt(Math.random()* 100);
        if(nro%3 == 0 || nro%5 == 0){
            console.log(nro);
            i = i + 1;
        }
}