function solution(num_list) {
    var answer = 0;
    let answer1 = 1;
    
    let result = 0;
    for (let i of num_list) {
     answer1 *= i
     answer += i
    }
    console.log(answer)
    if(Math.pow(answer, 2) < answer1) {
        result += 0
    } else if (Math.pow(answer, 2) > answer1) {
        result += 1
    } 
    
    return result;
}