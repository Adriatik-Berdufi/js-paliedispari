const word = "radarasdfas";



//** trasformiamo la parola inserita in un array 
let arraySplitWord = word.split('');
console.log(arraySplitWord);
console.log(arraySplitWord.length);


//** facciamo il reverse del array e salviamo un un nuovo array 
let reverseArraySplitWord = '';
for(let i = arraySplitWord.length -1; i >= 0; i--){
    reverseArraySplitWord += arraySplitWord[i];
};
console.log(reverseArraySplitWord);


//** facciamo il confronto tra la parola inserita e quella Revers

 if(word == reverseArraySplitWord){

    console.log("palindromo");
 }else{
    console.log("Non e un palindromo");
 };