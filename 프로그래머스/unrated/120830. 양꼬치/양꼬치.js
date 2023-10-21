function solution(n, k) {
    var answer = 0;
    let service = Math.floor(n/10)
    let price = n * 12000 + k * 2000 - service * 2000;
     answer += price;    
     return answer;    
  
        
    
   
   
}