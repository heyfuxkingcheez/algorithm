function solution(n) {
    var answer = 0;
    let result = 0;
    let arr = [];
    for (let i = 1; i <= n; i++) {
            answer ++
            arr.push(answer)
            
    }
    arr.forEach((e) =>{
        if(n % 2 === 0) {
            e % 2 === 0 ? result += (e*e) : result += 0
        } else if ( n % 2 !== 0) {
            e % 2 !== 0 ? result += e : result += 0
        }
        console.log(result)
    })
    
     return result;   
}
    
    
    
