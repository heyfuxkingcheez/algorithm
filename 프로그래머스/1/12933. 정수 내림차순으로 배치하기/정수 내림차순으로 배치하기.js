function solution(n) {
    var answer = 0;
    const a = String(n)
    const arr = [...a]
    answer = arr.sort((a, b) => b - a).join("");
    
    
    return Number(answer);
}