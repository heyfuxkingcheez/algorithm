function solution(phone_number) {
    var answer = '';
    let result = phone_number.slice(-4);
    answer = "*".repeat(phone_number.length - 4) + result
    
    return answer;
    
}

