function special_Rearrangement(){
    let input = document.getElementById("nums").value;// taking input from html/user
    let nums = input.split(',').map(num => parseInt(num.trim()));//explanatin of new stuff andwhat it do here we change the input string to an array  .split for remobes fromthe innput a specific char .map meansrunning each element in the array in to the function that is inside the ()the parse is for convertng string to int and .trim is for removing spaces

    let even=[];//sting even
    let odd=[];//string odd

    for(let i = 0;i<nums.length;i++){//taking the even numberto even if not go to odd
        if(nums[i]%2===0){
            even.push(nums[i])

            }else{
                odd.push(nums[i]);
            }

        }

        let rearrange=even.concat(odd);//,contantact is a menthod used to join two arrays
        document.getElementById("result").innerHTML = "rearrange list: " + rearrange.join(',');

    }




