function solution(num_list, n) {
    var answer = [];
    let b = num_list.slice(0, n)
    console.log(b)
    let a = num_list.slice(n, num_list.length)
    console.log(a)    
    
    answer = [...a, ...b]
   
    return answer;
}