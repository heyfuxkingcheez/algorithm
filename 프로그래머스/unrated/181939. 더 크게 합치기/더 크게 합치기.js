function solution(a, b) {
    var answer = 0;
    let ab = String(a) + String(b)
    let ba = String(b) + String(a)
    if(Number(ab) > Number(ba)) {
        answer += Number(ab)
    } else if(Number(ab) === Number(ba)) {
        answer += Number(ab)
    } else {
        answer += Number(ba)
    }
    return answer;
}