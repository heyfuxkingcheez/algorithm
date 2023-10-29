function solution(num_list) {
    var answer = 0;
    let a = 1;
   for (let i of num_list) {
       if (num_list.length >= 11) {
           answer += i
       } else if (num_list.length <= 10) {
           a *= i
           answer = a
    }   
   }
     
   
    return answer;
}