function solution(sides) {
    var answer = 0;
    let arr = sides.sort(function (a, b) {
        return a-b;
    })
    let [first, second, third] = arr;
    let sum = first + second
    if(third < sum) {
        answer ++;
    } else {
        answer += 2;
    }
    
    return answer;
}