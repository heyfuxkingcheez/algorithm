function solution(my_strings, parts) {
    var answer = '';
    for(let i = 0; i < my_strings.length; i++) {
        let result = my_strings[i].slice(parts[i][0], parts[i][1]+1)
        answer += result
    }
    return answer;
}