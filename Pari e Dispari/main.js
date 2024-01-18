const nrUser = document.getElementById("nrInput");
const play = document.getElementById("play");
const nrComputer = document.getElementById("computer");
const result = document.getElementById("result");





let risultato = pariDispari(3);
console.log(risultato);


//***** Funzioni  *****//

//** Random nr

function randomNr(min, max){
    
    let nr = Math.floor(Math.random() * (max - min) + min) ;
    return (nr);
};

//** somma tra 2 nr 
function somma(n1, n2){
    let sommaNumeri = n1 + n2;
    return(sommaNumeri);
};

//** verifica Pari 0 Dispari  
function pariDispari(nr){
    let x = nr;

    if(x == 0){
        return("0 non e ne pari ne dispari");
    }else if( x % 2 == 0){
        return(" pari ");
    }else{
        return(" dispari ");
    };

};
