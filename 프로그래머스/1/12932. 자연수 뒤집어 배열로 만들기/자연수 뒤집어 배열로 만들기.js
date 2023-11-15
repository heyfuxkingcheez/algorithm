function solution(n) {
    var answer = [];
    let str = String(n)
    let result = [...str]
    result.forEach((e) => {
      answer.push(Number(e))
        
    })
    
    let a = answer.reverse()
    
    
    return a;
}