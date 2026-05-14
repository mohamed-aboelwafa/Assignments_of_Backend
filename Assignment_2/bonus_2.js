
/*
    function findKthPositive(arr, k) {
        let left = 0;
        let right = arr.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            const missing = arr[mid] - mid - 1;
            
            if (missing < k) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left + k;
    }

    console.log(findKthPositive([2,3,4,7,11], 5));
    console.log(findKthPositive([1,2,3,4], 2));
*/
