function solution(n) {
    var answer = 0;
    let arr = [];
    for (let i = 1; i <= n; i++) {
      let b = n % i === 0
      if(b) {
          arr.push(i, b);
          
      }
      
    
      }
   answer += arr.length/2
    return answer;
    }
    
