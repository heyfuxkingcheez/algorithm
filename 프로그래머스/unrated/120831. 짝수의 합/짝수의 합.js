function solution(n) {
    var answer = 0;
    let arr =[];
    for (let i = 0; i <= n; i+=2){
        arr.push(i);
        }
    for (let i =0; i<arr.length; i++){
            answer += arr[i]
        
    }
    return answer;
}