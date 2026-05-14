
// Part 1: Coding Questions //


/*
    // question_1:

    let a = "123";
    console.log(Number(123)+7);
*/



/*
    // question_2:

    console.log(check_flasy(true));

    function check_flasy(val)
    {
        if(val==false)
        {
            return "Invalid";   
        }
        else
        {
            return "Not a falsy value"
        }
    }

*/



/*
    // question_3:
    
    for(let i=1; i<=10; i++)
    {
        if(i%2==0)
        {
            continue;
        }
        else
        {
            console.log(i);    
        }
    }

*/


/*
    // question_4:

    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let res = nums.filter(function(ele) {return ele%2==0;});
    console.log(res);

*/


/*
    // question_5:

    function merg_arr()
    {
        let nums_1 = [1, 2, 3];
        let nums_2 = [4, 5, 6];

        let sum = [...nums_1 , ...nums_2];

        return sum;
    }

    console.log(merg_arr());
*/


/*
    // question_6:

    function week_days(num) {
    switch(num) {
        case 1:
        return "Sunday";

        case 2:
        return "Monday";

        case 3:
        return "Tuesday";

        case 4:
        return "Wednesday";

        case 5:
        return "Thursday";

        case 6:
        return "Friday";

        case 7:
        return "Saturday";

        default:
        return "Invalid number";
    }

    }

    console.log(week_days(2));
    
*/



/*
    // question_7:
    
    let letters =  ["a", "ab", "abc"];
    let res = letters.map(function(ele) {return ele.length;});
    console.log(res);

*/



/*
    // question_8:
    function check(num)
    {
    if (num==0)
    {
        console.log("zero is not Divisible by both");
    }
    else
    {
        if(num%3==0 && num%5==0)
        {
            console.log("Divisible by both");
        }
        else if(num%3==0 && num%5!=0)
        {
            console.log("Divisible by 3");
        }
        else if(num%3!=0 && num%5==0)
        {
            console.log("Divisible by 5");
        }
        else if (num%3!=0 && num%5!=0)
        {
            console.log("Not Divisible by both");
        }
    }
    }

    check(15);
*/

/*
    // question_9:
    const calc_square = (num) => {return num**2;}
    console.log(calc_square(5));
*/

/*
    // question_10:
    function extract()
    {
        const person = {name: "John", age: 25};
        let {name: personName, age: personAge} = person;
        let res = personName + " is " + personAge + " years old";

        return res;
    }

    console.log(extract());
*/


/*
    // question_11
    function add(...nums)
    {
        let res = 0;

        for(let i=0; i<nums.length; i++)
        {
            res = res + nums[i];
        }

        return res;
    }

    console.log(add(1,2,3,4,5));
*/


/*
    // question_12:

    function delayedSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Success");
        }, 3000);
    });
    }

    delayedSuccess().then(message => {
    console.log(message);
    });

*/


/*
    // question_13 (method_1):

    function findLargest(arr) {
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
        max = arr[i];
        }
    }

    return max;
    }

    console.log(findLargest([1, 3, 7, 2, 4]));
*/


/*
    // question_13 (method_2):

    function findLargest(arr) {
    return Math.max(...arr);
    }

    console.log(findLargest([1, 3, 7, 2, 4]));
*/


/*
    // question_14:

    function getObjectKeys(obj) {
    return Object.keys(obj);
    }

    const person = {name: "John", age: 30};
    console.log(getObjectKeys(person));
*/


/*
    // question_15

    let msg = "The quick brown fox";
    console.log(msg.split(" "));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 2: Essay Questions //

/*
    // question_1:

    ## forEach:
    - accepts a call_back function and apply it on each element of the array
    - you can't use break or continue with forEach

    # Syntax of forEach :
    - EX:
    let arr = [1,2,3,4];
    function callback(ele) {console.log(ele);}
    arr.forEach(callback);

    - or

    - let arr = [1,2,3];
    arr.map( function callback(ele){console.log(ele);} )


    ## for...of:
    - a loop thats loops on each element of an array

    # Syntax of for...of :
    - EX:
    let nums = [1,2,3,4,5];
    for(const n of nums)
    {
        if(n%2!=0)
        {
            continue;
        }
        else{
            console.log(n);    
        }
    }

*/



/*
    // question_2:

    # Hoisting: (Hoisting works with var only)
    - If you want to print a variable before declare it ,
    JavaScript raises the [declaration of variable] to the [top of the scope].

    # if the variable Hoisted , the value of it = undefined

    # TDZ: (TDZ works with let and const only)
    - If you want to print a variable before declare it ,
    the variable enter TDZ

    # if the variable entered TDZ , the value of it != undefined  

    # EX_1:
    console.log(x); // printing of x before declare it  // JS hoisted x // undefined
    var x = 10;

    # EX_2:
    console.log(y); // printing of y before declare it // y entered TDZ // Error
    let y = 20;

    # EX_3:
    console.log(z); // printing of z before declare it // z entered TDZ // Error
    let z = 30;
*/



/*
    // question_3:

    == : 
    - it means (is equal ?)
    - used to compare 2 values even if these values has a deifferent data types
    - EX:
    console.log("5"==5); // true

    === :
    - it means (is equal ?)
    - used to compare data types of 2 values
    - EX:
    console.log("5"==5); // false
    console.log("5"=="5"); // true
*/


/*
    // question_4:

    # try-catch explain:
    in try : put the code that may be contains an error
    in catch : print the error name and message

    # the importance of try-catch:
    - Prevent program to stop due to errors in async operations

    # EX:
    try {
    let result = y; // y is not defined
    } catch (err) {
    console.log(err.name);    // error name
    console.log(err.message); // error message
    }
*/


/*
    // question_5:

    # type conversion:
    - convert data type to another manually
    - EX:
    let msg = "13";
    console.log(typeof(msg)); // String
    console.log(Number(msg)); // type conversion
    console.log(typeof(msg)); // Number

    # type conversion:
    - convert data type to another automatically by JS
    - EX:
    console.log("5" - 2);  // 3     // here 5 converted to number automatically
    console.log("5" + 2);  // "52"  // here 2 converted to string automatically

*/

