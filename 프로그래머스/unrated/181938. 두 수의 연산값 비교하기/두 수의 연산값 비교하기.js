function solution(a, b) {
 
    let result = String(a) + String(b)
    let resultb = 2 * a * b
    if(result < resultb) {
        return resultb
    } else {
        return Number(result) 
    }
    console.log(result, resultb)
    
}