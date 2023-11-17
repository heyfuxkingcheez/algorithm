function solution(x) {
    var answer = true;
    let strArr = String(x)

    let result = 0
    for(let i = 0; i < strArr.length; i++) {
       result += Number(strArr[i])
    }
    console.log(result)
    if(x % result === 0) {
        answer = true
    } else {
        answer = false
    }
    return answer;
}