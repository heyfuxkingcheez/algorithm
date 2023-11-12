function solution(num_list) {
    var answer = 0;
    let numEven = 0;
    let numOdd = 0;
    for (let i = 1; i < num_list.length; i+=2){
        numEven += num_list[i]
    }console.log(numEven)
    for (let j = 0; j< num_list.length; j+=2){
        numOdd += num_list[j]
    }console.log(numOdd)
    numEven > numOdd ? answer += numEven : answer += numOdd;
    
    return answer;
}