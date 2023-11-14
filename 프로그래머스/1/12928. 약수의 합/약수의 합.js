function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++) {
        const result = n / i
        if(Number.isInteger(result)) {
            answer += result
            
            
        }
        
    }
    
    return answer ;
}