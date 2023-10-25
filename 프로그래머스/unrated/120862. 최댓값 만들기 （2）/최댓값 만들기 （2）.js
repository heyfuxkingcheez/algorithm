function solution(numbers) {
    var answer = 0;
    let arr = numbers.sort(function(a, b) {
                 return b - a;
                 })
    console.log(arr)
   let max = arr[0] * arr[1] 
   let min = arr[arr.length - 2] * arr[arr.length-1]
   max > min ? answer = max : answer = min ;
    
 return answer;
}