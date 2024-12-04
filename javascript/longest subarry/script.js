function longest_subarray(array){
    let max =0;
    for(let start=0;start<array.length;start++) {
        let count0 = 0;
        let count1 = 0;
        for (let end=start;end<array.length;end++) {
            if (array[end]===0){
                count0++;
            } else {
                count1++;
            }
       
    if (count0===count1){//calculating length
        let currentLength=end-start+1;
        if(currentLength>max){
        max=currentLength;
        }
     } 
    }       
}
return max;
}
function calculatelongest(){

const input=document.getElementById("binaryArray").value;//Get the iser input value from html
const array=input.split(',').map(num => parseInt(num.trim()));//change the string to integers the map points to a function to apply it parse converts to int


if (!array.every(num=>num=== 0||num ===1)) {// checl if input is binary only 0and 1
document.getElementById("display").innerHTML="Please enter a valid binary array with only 0 and1.";
return;
}
const result=longest_subarray(array);// Call the longest_subarray function and display the result
document.getElementById("display").innerHTML=`Longest subarray length with equal 0s and 1s: ${result}`;
}
