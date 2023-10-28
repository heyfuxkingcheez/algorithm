function solution(array) {
    var answer = [];
    console.log(Math.max(...array))
    console.log(array.indexOf(Math.max(...array)))
    answer.push(Math.max(...array))
    answer.push(array.indexOf(Math.max(...array)))
    return answer;
}