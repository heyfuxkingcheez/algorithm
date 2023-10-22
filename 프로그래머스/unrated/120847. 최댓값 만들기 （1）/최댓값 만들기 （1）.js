function solution(numbers) {
    var answer = 0;
    let arr = numbers.sort(function(a, b) {
        return b - a;
    })
    let arr1 = arr.slice(0, 2);
    let result = arr1[0] * arr1[1];
    answer += result;
                
    return answer;
}