/* Question2: write a function which outputs number of words for a given sentence.
input_sentence = "No one came to vote today as it was raining heavily in Bangalore." */

let s;
function printNoOfWords(input_sentence){
   
    //input_sentence.push(s);
    console.log(input_sentence);
    let count = 0;
    for(let i=0;i<input_sentence.length;i++){
        if(input_sentence[i]==" "){
            count++;
        }
        
    }
    return count+1;
}


console.log(printNoOfWords("No one came to vote today as it was raining heavily yy in bb Bangalore."));

