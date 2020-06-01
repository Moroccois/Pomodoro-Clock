function spinWords(words){
    //TODO Have fun :)
   let wordStr = words.split(' ');
   let reverseWord;
   let final;
   let wordSentence;
        let result = wordStr.map(function(word){
            if(word.length <= 4){
                final = wordStr.join(" ");
            }
            else if (word.length >= 5){
                reverseWord = word.split('').reverse().join('');
                
              // wordSentence =  wordStr.split(word).reverse().join("");
               console.log(reverseWord);
               console.log(wordStr);
              // final = wordStr.join(' ').replaceAll(word, wordSentence);
               //console.log(final);
            }
        });
      // console.log(final);
       //console.log(`result ${result}`);
}
spinWords("Welcome");
// "emocleW");
spinWords("Hey fellow warriors");
//"Hey wollef sroirraw");
spinWords("This is a test");
// "This is a test";
spinWords("This is another test");
//"This is rehtona test";
spinWords("You are almost to the last test");
//"You are tsomla to the last test");
spinWords("Just kidding there is still one more");
//' "Just gniddik ereht is llits one more");
spinWords("Seriously this is the last one");
// "ylsuoireS this is the last one";