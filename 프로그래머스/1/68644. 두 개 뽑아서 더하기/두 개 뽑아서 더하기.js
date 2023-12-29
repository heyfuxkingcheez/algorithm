function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j< numbers.length; j++) {
            let a = numbers[i] + numbers[j]
                answer.push(a)
                 answer.sort(function(a, b)  {
                 return a - b;
            });
        }
        
    }
    let result = [...new Set(answer)]
                   console.log(result)
    return result;
}