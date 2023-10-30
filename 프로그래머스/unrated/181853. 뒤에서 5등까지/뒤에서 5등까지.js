function solution(num_list) {
    let result = num_list.sort(function (a, b) {
        return a - b;
    } )
    let answer = result.slice(0, 5)
    
    return answer;
}