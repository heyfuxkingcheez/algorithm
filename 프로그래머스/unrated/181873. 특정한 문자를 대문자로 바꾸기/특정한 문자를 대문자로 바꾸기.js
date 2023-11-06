function solution(my_string, alp) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++) {
    if(my_string[i] !== alp) {
        answer += my_string[i]
    } else {
        answer += my_string[i].toUpperCase()
    }    }
    return answer;
}