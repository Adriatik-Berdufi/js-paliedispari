 //*** html 
const wordInput = document.getElementById("wordInput");
const verifica = document.getElementById("verifica");
const result = document.getElementById("result");
let risposta ;

verifica.addEventListener('click',function(){
    let word = wordInput.value;

    //** all alla funzione Reverse
    let arraySplitWord = word.split('');
    
    //**  call alla funzione Confronto
    let reverseArraySplitWord = reverseArray(arraySplitWord);

    //** aggiungiamo la risposta nel dom 
    result.innerHTML = verificaLe2parole(reverseArraySplitWord , word);

});




////************ Funzioni ***********////


//* //** Reverse di un array

function reverseArray(arraySplitWord){
    let reverseArraySplitWord = '';
    for(let i = arraySplitWord.length -1; i >= 0; i--){
        reverseArraySplitWord += arraySplitWord[i];
    };
    return(reverseArraySplitWord);
};


//** Confronto

function verificaLe2parole(reverseArraySplitWord , word){

    if(word == reverseArraySplitWord){
        risposta = "palindromo";
    }else{
        risposta = "Non e un palindromo";
    };

    return(risposta);
    
};






