function solution(n, control) {
    var answer = 0;
     let strArr = control.split("")
    console.log(strArr)
    for(let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'w'){
            n += 1
        } else if (strArr[i] === "s") {
            n -= 1
        } else if (strArr[i] === "d") {
            n += 10
        } else if (strArr[i] === "a") {
            n -= 10
        }
        
    } 
    return n;
}