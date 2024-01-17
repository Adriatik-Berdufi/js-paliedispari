 //*** html 
const wordInput = document.getElementById("wordInput");
const verifica = document.getElementById("verifica");
const result = document.getElementById("result");
let risposta ;

verifica.addEventListener('click',function(){
    let word = wordInput.value;
    
    //** call alla funzione Reverse
    let reverseArraySplitWord = reverseArray(word);

    //** call di Confronto e aggiungiamo la risposta nel dom 
    result.innerHTML = verificaLe2parole(reverseArraySplitWord , word);

});




////************ Funzioni ***********////


//* //** Reverse di un array

function reverseArray(word){
    let reverseArraySplitWord = '';
    for(let i = word.length -1; i >= 0; i--){
        reverseArraySplitWord += word[i];
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






