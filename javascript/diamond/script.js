function generateDiamond(){//function to make pyramid
    var x = document.getElementById( "inputNumber").value;//gets the input from html from the user
    x = parseInt(x );//this converts fromstring to integer
    if (isNaN (x ) || x <= 0) {//for NaN it means not a number alsoif it is lessthen or =to 0
      alert( "Please enter a valid number greater than 0");//if its lessthen 0 alert to give us more than zero
      return ;
    }
    var display= document.getElementById("display");//we asssign the element display in the ht,l to a variable
    display.innerHTML ='';//this bascally clears the  display element
  
  //the below code is responsible on the above part of the diamond
  
    for (var i=1;i<= x; i++) {//forloop 
      var space= " ".repeat(x-i);//creats space before stars.repeat repeats the somethihng
      var stars="*".repeat(2*i-1);//creat stars
      var line =space+stars;//combation of stars and spaces
      var paragraph=document.createElement("p");
      paragraph.textContent=line;//adding line to p 
      display.appendChild(paragraph);//add to display


    }

    //now we work on the lower part pf the diamond
    for(var i = x; i>=1;i--){
        var space=" ".repeat(x-i);//creat spacee
        var stars=" *".repeat(2*i-1);//creating stars
        var line=space+stars//combanation of starss and spaces
        var paragraph=document.getElementById("p");
        paragraph.textContent=line;// we add a lineto p
        display.appendChild(paragraph);//addparagraph to the element display


    }


    }
  
  