function solution(num_list) {
    var answer = 0;
    let result =[];
    let result1 =[];
    
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0){
            result.push(num_list[i])
        } else {
            result1.push(num_list[i]) 
        }
    } 
   console.log(result)
    console.log(result.join(""))
console.log(result1)
    console.log(result1.join(""))
    
    answer += Number(result.join("")) + Number(result1.join(""))
    return answer;
}