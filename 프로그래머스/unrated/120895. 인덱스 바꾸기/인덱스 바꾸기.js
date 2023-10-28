function solution(my_string, num1, num2) {
    var answer = '';
    let array = [...my_string];
    console.log(array)
    
    function switchvalue(arr, index1, index2) {
            [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; 
    }
    switchvalue(array, num1, num2);
    
        console.log(array)
    answer = array.join("")
 
    return answer;
}