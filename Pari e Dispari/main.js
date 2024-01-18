const nrUser = document.getElementById("nrInput");
const play = document.getElementById("play");
const nrComputer = document.getElementById("computer");
const result = document.getElementById("result");
const choice = document.getElementById("choice")


play.addEventListener('click' , function(){

    let user =  nrUser.value;
    let userchoise = choice.value;

    let cpuNr = randomNr(0, 9);
    let cpuChoise ; 
    if(userchoise == "pari"){
        cpuChoise = "dispari";
    }else{
        cpuChoise = "pari";
    };
    
    let sommaNr = somma(user,cpuNr );
    
    let risultatoPariDispari = pariDispari(sommaNr);
    console.log(risultatoPariDispari);
    let vince = verificaChiVince(userchoise,risultatoPariDispari );
    console.log(vince);

});











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
//** verifica chi ha vinto
function verificaChiVince(sceltaUser,risultatoSomNR){
    let userchoise = sceltaUser;
    let risultatoPariDispari = risultatoSomNR ;
    if(risultatoPariDispari == userchoise){
        resultGame = "Hai vinto";
    }else{
        resultGame = "Hai perso";
    };
    return(resultGame);
}