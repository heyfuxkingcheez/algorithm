function solution(n, k) {
    var answer = [];
    for (let i = 0; i <= n; i++) {
        if(1 <= (k*i) && (k*i) <= n) {
            answer.push(k * i)
        }
    }
    return answer;
}