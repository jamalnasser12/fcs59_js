function sumOfOdd(){
    var x = document.getElementById( "inputNumber").value;//gets the input from html from the user
    x = parseInt(x );//this converts fromstring to integer
    if (isNaN (x ) || x <= 0) {//for NaN it means not a number alsoif it is lessthen or =to 0
        alert( "Please enter a valid number greater than 0");//if its lessthen 0 alert to give us more than zero
        return ;
      }
      let sum =0;
      for(let i= 1;i<=x;i++){
        if(i %2 !==0){//chdck if odd
            sum=sum +i;// add the odd number

        }
      }
      var display=document.getElementById("display");//callling element by id
      display.innerHTML="";//clear the dispay
      display.textContent="sum of the odds from 1 to "+x+"is"+sum;//displaying the sum




    }
