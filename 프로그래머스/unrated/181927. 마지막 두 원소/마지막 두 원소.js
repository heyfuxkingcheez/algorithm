function solution(num_list) {
    var answer = [];
    let result = num_list[num_list.length - 1] - num_list[num_list.length - 2];
    let result1 = num_list[num_list.length -1]
    
    if(result <= 0) {
        num_list.push(result1 *2)
    }  else {
        num_list.push(result)
    } 
    return num_list;
}