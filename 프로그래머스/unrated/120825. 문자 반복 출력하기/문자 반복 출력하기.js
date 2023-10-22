function solution(my_string, n) {
    var answer = '';
    let splitt = my_string.split("");
    for (let i = 0; i < splitt.length; i++) {
       let result = splitt[i].repeat(n)
        answer += result;
        
    }
    return answer;
}