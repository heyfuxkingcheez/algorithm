function solution(a, b) {
    var answer = '';
    let days = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
    let num = 0;
    for(let i = 0; i < a - 1; i++) {
        num += month[i]
    }
    num += b
    
    console.log(num)
    let result = (num - 1) % 7
    
    answer = days[result]
    
   
    return answer;
}