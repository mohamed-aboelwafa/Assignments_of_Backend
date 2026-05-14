/* 
    // Bonus_3:

    function majority_element(nums){

        const half_of_nums = nums.length / 2; // 3.5

        let old_reps = 0;
        let new_reps = 0;
        let most_element;

        for(let i=0; i<nums.length; i++){
        for(let a=0; a<nums.length; a++){
            if(nums[i]==nums[a]){
                old_reps++;
            }
        }
        if(old_reps > new_reps){
            new_reps = old_reps;
            old_reps = 0;
            most_element = nums[i];
        }else{
            old_reps = 0;
        }

        }

        if(new_reps > half_of_nums)
            {
                return most_element + " is the majority element in the array";
            }
        else if(new_reps == half_of_nums)
            {
                return most_element + " is Most frequent element , but it is equal to half number of element in the array";
            }
        else if(new_reps < half_of_nums)
            {
                return most_element + " is Most frequent element , but it is less than half number of element in the array";
            }
        else
            {
                return "there is no Most frequent element in the array";
            }

    }

    console.log(majority_element([3,2,3])); // 3
    console.log(majority_element([2,2,1,1,1,2,2])); // 2

*/

