/**
 
You are given an array coins[] representing different denominations 
of coins and an integer amount representing a total amount of money.
 Return the fewest number of coins needed to make up that amount.

If it is impossible to make the amount, return -1.

 */


var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0; // Base case

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
};



var coinChange2 = function (coins, amount){
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;

    for(let i=1; i<=amount; i++){
        for(let coin of coins){
            if(i- coin >=0){
                dp[i] = Math.min(dp[i], dp[i-coin]+1)
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
}









console.log(coinChange2([1, 2, 5], 11))