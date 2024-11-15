/*
   Given a string s and a number K, you need to find the length of the longest 
   substring where you can replace no more than K characters to make all the characters 
   in the substring the same.  

   
*/

function characterReplacement(s, K) {
    let start = 0;
    let maxCount = 0;
    let maxLength = 0;
    let storage = {};

    for(let end=0; end<s.length; end++){
        let current = s[end];

        if(!(current in storage)){
            storage[current] = 0
        }
        storage[current] +=1

        
        maxCount = Math.max(maxCount, storage[current]);

        if(end-start+1-maxCount > K){
            if(storage[s[start]] ===0){
                delete storage[s[start]]
            }
            else {
                storage[s[start]] --
            }
            start ++
        }

        maxLength = Math.max(maxLength, end-start +1)



    }

    return maxLength
}

console.log(characterReplacement("aabccbb", 2))