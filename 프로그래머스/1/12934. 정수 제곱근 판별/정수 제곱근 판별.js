function solution(n) {
    var answer = 0;
    let result = 0;
    result = Math.sqrt(n)
    if(Number.isInteger(result)) {
        console.log(Number.isInteger(result))
        answer = (result+1)*(result+1)
    } else {
        answer -= 1
    }
    return answer;
}