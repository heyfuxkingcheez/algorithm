function solution(k, m, score) {
    var answer = 0;
    let arr =[]
    let result = score.sort((a,b) => b - a)
    let a = Math.floor(score.length / m)
    for (let i = 0; i <= score.length; i+=m) {
        let b = result.slice(i, i+m)
        if(b.length === m) {
             arr.push(b)
        }
    }
   for(let i = 0; i < arr.length; i++) {
       let arrValue = arr[i]
       let arrValueLast = arrValue[arrValue.length - 1]
       answer += arrValueLast * m
   }

    
    
    
    return answer;
}