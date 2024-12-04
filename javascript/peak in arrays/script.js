function find_peak(array){
    let peaks = [];

            // Loop through the array, excluding the first and last elements
            for (let i = 1; i < array.length - 1; i++) {
                if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
                    peaks.push(i); // Record the index of the peak
                }
            }

            return peaks;
        

}
function array_in(){//this is resposoble forthe data getting in
    const input = document.getElementById("arrayInput").value;
    const array = input.split(',').map(Number); //change the input string to an array of numbers

    if (array.length < 3) {
        document.getElementById("output").innerText = "Array must have at least 3 elements to find peaks.";
        return;
    }

    const peaks = find_peak(array);

    if (peaks.length > 0) {
        document.getElementById("output").innerText = "Peaks found at indices: " + peaks.join(', ');
    } else {
        document.getElementById("output").innerText = "No peaks found.";
    }
}


