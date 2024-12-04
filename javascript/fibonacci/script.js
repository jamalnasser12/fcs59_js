function getFibonacci(){
    var x = document.getElementById( "inputNumber").value;//gets the input from html from the user
    x = parseInt(x );//this converts fromstring to integer
    if (isNaN (x ) || x <= 0) {//for NaN it means not a number alsoif it is lessthen or =to 0
        alert( "Please enter a valid number greater than 0");//if its lessthen 0 alert to give us more than zero
        return ;
      }
      var display= document.getElementById("display");//we asssign the element display in the ht,l to a variable
      display.innerHTML ='';//this bascally clears the  display element

      var fib=[0,1];//now calculating the fiboncci with this line startwith first 2 num




      for (var i = 2;i<x;i++){
        var nextNumber=fib[i-1]+fib[i-2];
        fib.push(nextNumber);
      }


      var par=document.createElement("p");
      par.textContent=fib.join(",");
      display.append(par);
    
}