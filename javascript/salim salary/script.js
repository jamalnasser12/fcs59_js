// var x= document.getElementById("inputNumber").value;//gets the salary from html from the user
// var y = document.getElementById("inputMonth").value;//gets the month from html from the user

function results() {

  var salary = document.getElementById("inputNumber").value; //gets the salary from html from the user
  var month = document.getElementById("inputMonth").value; //gets the month from html from the user
  var savingPercentage=document.getElementById("inputSavings").value;//gets the savings from the userfrom html
  var rentPercentage=document.getElementById("inputRent").value;//gets the rent from user
  var electricityPercentage=document.getElementById("inputElec").value;//gets the elect from the user

  salary = parseInt(salary);//changing salary from str to num
  savingPercentage=parseInt(savingPercentage);//chnage saving fromstr to numb
  rentPercentage=parseInt(rentPercentage);//change  rent from str to nub
  electricityPercentage=parseInt(electricityPercentage);//chage elec from str to numb

  if (isNaN(salary) || salary <= 0||isNaN(savingPercentage)||isNaN(rentPercentage)||isNaN(electricityPercentage)){ //if the elements are empty 
     //for NaN it means not a number alsoif it is lessthen or =to 0
      alert("Please enter a valid salarry greater than 0"); //if its lessthen 0 alert to give us more than zero charbel ik you hate alert im sorry ill try to fix it if i finish the questions early
      return;
    
  }
  //in the following variables we calculate  each percentage of the rent saving electricity
  var savingAmount= (savingPercentage/100)*salary;
  var rentAmount= (rentPercentage/100)*salary;
  var electricityAmount=(electricityPercentage/100)*salary;


  var totalExpenceses= savingAmount+rentAmount+electricityAmount;//calcul the total amount of the expenses

  var remainder=salary-totalExpenceses;//here we calculate the rest after theexpneses

  var yearlyrent=rentAmount*12;//calcu yearly rent
  var yearlyelectricity=electricityAmount*12;//calc the years elec

  var salaryPowerTwo=salary*salary//salary squaar
  var additionalsave=50;//the extra 50$
  var savingDiv=additionalsave/savingAmount;//the divisioon equ
//the below code explanaition
//  ` this means multiple line as a string
//when we use ${}it means we take the result of the variable inside the {}and place it
//and by using the above variable and results we put eavh varale in its prespective result inside of a p element so we sent it inside the dislay element inside the html
//another note .toFixed(2)formats the nummber to a specific decimal
  var resultsHtml =`<p><strong>Salary Information for ${month}:</strong></p>
  <p><strong>Salary:</strong> $${salary}</p>
  <p><strong>Savings Allocation:</strong> $${savingAmount.toFixed(2)} (${savingPercentage}% of salary)</p>
  <p><strong>Rent Allocation:</strong> $${rentAmount.toFixed(2)} (${rentPercentage}% of salary)</p>
  <p><strong>Electricity Allocation:</strong> $${electricityAmount.toFixed(2)} (${electricityPercentage}% of salary)</p>
  <p><strong>Total Expenses (Savings + Rent + Electricity):</strong> $${totalExpenceses.toFixed(2)}</p>
  <p><strong>Remainder after expenses:</strong> $${remainder.toFixed(2)}</p>
  <p><strong>Estimated Yearly Rent Costs:</strong> $${yearlyrent.toFixed(2)}</p>
  <p><strong>Estimated Yearly Electricity Costs:</strong> $${yearlyelectricity.toFixed(2)}</p>
  <p><strong>Salary Squared:</strong> ${salaryPowerTwo}</p>
  <p><strong>How much would be left if $${additionalsave} was divided by your savings amount:</strong> ${savingDiv.toFixed(2)} times</p>`
;

var display=document.getElementById("display");//we asssign the element display in the ht,l to a variable
  display.innerHTML=resultsHtml;//this bascally clears the  display element


}

