function solution(num_str) {
    var answer = 0;
    let arr = [...num_str];
    console.log(arr)
    for (let i of num_str) {
        let toNum = Number(i)
        answer += toNum
        
    }
    return answer;
}