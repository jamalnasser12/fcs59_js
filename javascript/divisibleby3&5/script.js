function getdivisible(){
    var x = document.getElementById( "inputNumber").value;//gets the input from html from the user
    x = parseInt(x );//this converts fromstring to integer
    if (isNaN (x ) || x <= 0) {//for NaN it means not a number alsoif it is lessthen or =to 0
        alert( "Please enter a valid number greater than 0");//if its lessthen 0 alert to give us more than zero
        return ;
      }
    var display = document.getElementById("display"); // Get the display element
    display.innerHTML = ''; // Clear previous output
      
    var divisibleNumbers = [];//we creat an array to store the divisble numbers
    
    for(let i =1 ;i<=x;i++){//loop from 1 to the input number
        if(i%3===0 &&i%5 ===0){//condition is divisibke
            divisibleNumbers.push(i);//add number to the array
        }
    }
    if(divisibleNumbers.length>0){//displaying the results we had above in the display
        display.textContent="number divisble by both 3 and 5 : "+divisibleNumbers.join(",");

    }else{
        display.textContent="nonumber are divisibleby 3 abd 5 ";

    }



    }