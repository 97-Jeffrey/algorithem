/*
    Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

    Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

    a, b are from arr
    a < b
    b - a equals to the minimum absolute difference of any two elements in arr

    Example 1:

    Input: arr = [4,2,1,3]
    Output: [[1,2],[2,3],[3,4]]
    Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

    Example 2:

    Input: arr = [1,3,6,10,15]
    Output: [[1,3]]

 */

    var minimumAbsDifference = function(arr) {
        arr.sort((a,b)=> a-b)
        
        let min = arr[1] - arr[0];
        let result = []
        for(let i=1; i<arr.length; i++){
            min = Math.min(min, Math.abs(arr[i]-arr[i-1]))
    
        }
    
        for(let i=1; i<arr.length; i++){
            if(Math.abs(arr[i] - arr[i-1])===min){
                result.push([arr[i-1], arr[i]])
            }
        }
    
        return result
    }