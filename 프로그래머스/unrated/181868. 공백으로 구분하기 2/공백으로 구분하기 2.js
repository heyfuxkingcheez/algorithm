function solution(my_string) {
    var answer = [];
    let a = my_string.split(" ")
    
    a.forEach((e) => {
        if(e.length >= 1) {
            answer.push(e)
            console.log(answer)
        }
    })
    return answer;
}