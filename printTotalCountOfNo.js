/*Question4: write a function which outputs total count of numbers which are greater than 50.
input_array = [122, 3, 198, 78, 23, 12, 67, 98, 112, 7]*/

/*function findTotalCount(arr){
    let sum =0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum>50){
            count += arr.length;
        }
        else if(sum<=50){
            
        }
    }
    return count;
    

}

console.log(findTotalCount([7,5,6]));*/


function findTotalCountOfNoGreaterThan50(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>50){
            count++;
        }
        else{
            count;
        }
    }
    return count;
}

console.log(findTotalCountOfNoGreaterThan50([122, 3, 198, 78, 23, 12, 67, 98, 112, 7]));