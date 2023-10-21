function solution(message) {
    var answer = 0;
    let result = function () {
        answer += 2 * message.length;
        
    }
    result();
   
    
    return answer;
}