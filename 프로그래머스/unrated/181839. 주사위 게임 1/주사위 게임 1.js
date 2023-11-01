function solution(a, b) {
    var answer = 0;
    let a짝 = a % 2 === 0
    let a홀 = a % 2 !== 0
    let b짝 = b % 2 === 0
    let b홀 = b % 2 !== 0
    
    if (a홀&&b홀) {
       answer += a**2 + b**2
    } else if (a홀 || b홀) {
        answer += 2 * (a + b)
    } else if (a짝 && b짝) {
        answer += Math.abs(a - b)
    }
    return answer;
}