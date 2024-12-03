/*Question1: write a function which outputs number of elements in array.
input_array = [78, 23, 12, 67, 98, 112, 7]
input_array = ["ram", "shayam", "bobby", "peter"]*/




function findArrayElementsNo(myArray){
    let count = 0;
    for(let i=0;i<myArray.length;i++){
        count++;
    }

    return count;

}

// let noOfElements = findArrayElementsNo([78, 23, 12, 67, 98, 112, 7]);
// console.log(noOfElements);
console.log(findArrayElementsNo(["ram", "shayam", "bobby", "peter"]));
console.log(findArrayElementsNo([78, 23, 12, 67, 98, 112, 7]));
