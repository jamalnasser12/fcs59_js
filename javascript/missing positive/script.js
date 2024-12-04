function first_missing_positive(numbers) {
    const n = numbers.length;
    for (let i=0;i<n;i++) {
        if (numbers[i] <= 0 || numbers[i] > n) {
            numbers[i] = n + 1        
        }
    }
    if (num>0&&num<=n) {
        let correct =num-1;
        if (numbers[correct]!==num) {
            let temp = numbers[correct];
            numbers[correct]=num;
            numbers[i]=temp;
            i--;
        }
    }
}
for (let i=0;i<n;i++) {
    if (number[i]!==i+1) {
        return i+1; 
    }
return n+1;
}
console.log(first_missing_positive([3,4,-1,1]));
console.log(first_missing_positive([1,2,0]));