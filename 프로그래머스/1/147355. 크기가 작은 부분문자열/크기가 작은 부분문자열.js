function solution(t, p) {
    var answer = 0;
    for(let i = 0; i <=  t.length-p.length; i++) {
        let result = t.substr(i, p.length)
        if(Number(result) <= Number(p)) {
            answer ++
        } else {
            answer += 0
        }
    }
    return answer;
}