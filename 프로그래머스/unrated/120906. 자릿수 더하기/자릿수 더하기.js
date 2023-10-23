function solution(n) {
    var answer = 0;
    let str = String(n);
    let newArr = Array.from(str);
    for (let i = 0; i < newArr.length; i++) {
        let num = Number(newArr[i]);
        answer += num;
    }
    
    
    return answer;
}