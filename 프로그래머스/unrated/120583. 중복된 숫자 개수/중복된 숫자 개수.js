function solution(array, n) {
    var answer = 0;
   let arr = array.filter(function(array){
        return array === n;
    })
   answer += arr.length;
    return answer;
}