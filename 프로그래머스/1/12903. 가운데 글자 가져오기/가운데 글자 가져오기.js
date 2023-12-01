function solution(s) {
    var answer = '';
    let middle = Math.floor(s.length / 2) 
    console.log(middle)
    if(s.length % 2 === 0) {
       answer =  s.slice(middle-1, middle+1)  
    }
    if (s.length % 2 !== 0){
       answer = s.slice(middle, middle+1)
    }
    return answer;
}