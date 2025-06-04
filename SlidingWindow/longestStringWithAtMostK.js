// given a string, find a substring with at most K distinct characters:

/*
    s = 'eceba', k = 2
    outpout: 3 (ece)


*/

const atMostK = (str, k) =>{

    let left = 0;
    let max = 0;
    let set = new Set();

    for(let right = 0; right<str.length; right++){
        set.add(str[right]);

        while(set.size>k){
            set.delete(str[left]);
            left ++
        }
        max = Math.max(max, right-left +1)
    }

    return max


}

/**
    'eceba'
      {e,c,e}
 */

const atMostK2 = (str, k)=>{

    let left = 0;
    let max = 0;
    let set = new Set();


    for(let right=0; right<str.length; right++){
       set.add(str[right]);

       while(set.size>k){
          set.delete(str[left]);
          left++
       }
       max =Math.max(max, right-left+1)
    }

    return max
}


console.log(atMostK('eceba', 2))