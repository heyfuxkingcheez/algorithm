function solution(slice, n) {
    var answer = 0;
    let eat = Math.ceil(n / slice);
    answer += eat;
    return answer;
}