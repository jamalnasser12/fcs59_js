function generatePyramid(){//function to make pyramid
  var x = document.getElementById( "inputNumber").value;//gets the input from html from the user
  x = parseInt(x );//this converts fromstring to integer
  if (isNaN (x ) || x <= 0) {//for NaN it means not a number alsoif it is lessthen or =to 0
    alert( "Please enter a valid number greater than 0");//if its lessthen 0 alert to give us more than zero
    return ;
  }
  var display= document.getElementById("display");//we asssign the element display in the ht,l to a variable
  display.innerHTML ='';//this bascally clears the  display element



  for (var i=1;i<= x; i++) {//forloop 
    var line= "";//makes a empty string variable



    for (var o =1;o <=i;o++) {//for loop 
      line=line +o+ " ";
    }

    var paragraph = document.createElement("p" );//this line adds a p element in the html
    paragraph.textContent = line.trim();//puts text in the p element and the trim removes any ehitespaces like actual space 
    display.appendChild(paragraph);//adds the p to the display
  }
}
