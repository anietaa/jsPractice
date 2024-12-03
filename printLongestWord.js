// /*Question5: write a function which outputs longest word in a given sentence.
// input_sentence = "No one came to vote today as it was raining heavily in rtrtrtrtr Bangalore."*/

function findLongestWorddL(s){
    let arrL = [];
    let newArray=[];
    let num=0;
    let tempChar="";
    for(let i=0;i<s.length;i++){
        let character = s[i];
        if(character == " " || character == "."){
            arrL.push(num);
            newArray.push(tempChar);
            tempChar="";
            num=0;
        }
        else {
            tempChar+=character;
            num++
        } 
    }

    let tempMax =0;
    let maxIndex=0;
    for(let i=0;i<arrL.length;i++){
        if(arrL[i]>tempMax){
            tempMax=arrL[i];
            maxIndex=i;
        }
    }
    return newArray[maxIndex];
}


let result =findLongestWorddL("No one came to vote today as it was raining heavily in rtrtrtrtr Bangalore.");
console.log(result)


