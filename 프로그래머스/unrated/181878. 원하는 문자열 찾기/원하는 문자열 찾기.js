function solution(myString, pat) {
    var answer = 0;
    let lower = myString.toLowerCase()
    let lower1 = pat.toLowerCase()
    console.log(lower, lower1)
    if(lower.includes(lower1)) {
        answer += 1

    }
    return answer;
}