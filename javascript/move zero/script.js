function func() {
    const input = document.getElementById("numbersInput").value;
    const number=input.split(",").map(num=>parseInt(num.trim()));
    for (let i = 0; i < number.length; i++) {
        if (isNaN(number[i])) {
            document.getElementById("result").innerText = "Please enter a valid array of numbers.";
            return;
        }
    }
    function move_zeros(number) {
    const nonzero=[];
    for (let i=0; i<number.length;i++) {
        if (number[i]!==0) {
         nonzero.push(number[i]);
        }
    }
    const zeroCount=number.length-nonzero.length;
    for(let i = 0;i<zeroCount; i++) {
        nonzero.push(0);
    }
    return nonzero;
    }
    const resultArray = move_zeros(number);
    document.getElementById("result").innerText = `Array after moving zeros: [${resultArray.join(', ')}]`;


}