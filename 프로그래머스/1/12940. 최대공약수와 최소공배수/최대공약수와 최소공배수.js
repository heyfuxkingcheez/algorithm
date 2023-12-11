function solution(n, m) {
    let answer = 1
    for(let i = 2; i <= Math.min(n,m); i++) {
        if(n % i === 0 && m % i === 0) {
            answer = i
        }
        
    }
    let result = [answer, n*m/answer]
    return result;
}