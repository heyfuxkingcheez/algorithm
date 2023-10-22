function solution(str1, str2) {
    var answer = 0;
    let included = str1.includes(str2);
    let result = included ? answer = 1 : answer = 2;
    return answer;
}