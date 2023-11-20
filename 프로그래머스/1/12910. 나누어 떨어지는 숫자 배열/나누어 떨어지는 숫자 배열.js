function solution(arr, divisor) {
    var answer = [];
    arr.forEach(a => {
        if(a % divisor === 0) {
            answer.push(a)
        } 
    })
    if(answer[0] == null) {
        answer.push(-1)
    }
    answer.sort((a, b) =>  {
  return a - b;
});
    return answer;
}