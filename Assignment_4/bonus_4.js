
/*
    function longestCommonPrefix(strs){
        let result = "";

        for (let i = 0; i < strs[0].length; i++) {
            let char = strs[0][i];

            for (let j = 1; j < strs.length; j++) {
                if (strs[j][i] !== char) {
                    return result;
                }
            }

            result += char;
        }

        return result;
    }

    console.log(longestCommonPrefix(["flower","flow","flight"])); // fl
    console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
*/