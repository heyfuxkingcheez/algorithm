function solution(my_string, is_suffix) {
    var answer = 0;
    for(let i = is_suffix.length-1; i >= 0; i--) {
       
    
    }
    
    is_suffix[is_suffix.length-1] === my_string[my_string.length-1] && my_string.includes(is_suffix) ? answer += 1 : answer = 0;
    
    return answer;
}