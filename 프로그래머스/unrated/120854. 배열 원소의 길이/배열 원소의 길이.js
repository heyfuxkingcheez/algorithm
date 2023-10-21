function solution(strlist) {
    var answer = [];
    for (let i =0; i < strlist.length; i++) {
        let result = strlist[i].length;
        answer.push(result);
    }
    return answer;
}