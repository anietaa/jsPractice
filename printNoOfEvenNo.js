/*Question3: write a function which outputs number of even number in a given array.
input_array = [78, 23, 12, 67, 98, 112, 7]*/

function findNoOfEvenNo(arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
        count++;
        }
        else{
            "do nothing"
        }

    }
    return count;
}

console.log(findNoOfEvenNo([78, 23, 12, 67, 98, 112, 7]));
