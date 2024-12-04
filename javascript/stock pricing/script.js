function maxProfit(){//function to calcuate the max proft
    let min=prices[0];//var for minimum price
    let max=0;//for max price
    let temp="";


    for(let i = 0;i<price.length;i++){//loopp through pricess
        if(prices[i]<min){
            min=price[i];


        }let curentprofit=price[i]-min;//calclating profite
        if(curentprofit>max){//change the maxtothe new profit
            max=curentprofit
        }
        return max;

    }
    function calMax(){
        let input=document.getElementById("prices").ariaValueMax;//get the user input from html
        let price=input.split(",")

    }





}