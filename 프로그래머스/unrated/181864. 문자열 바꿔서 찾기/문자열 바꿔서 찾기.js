function solution(myString, pat) {
    var answer = 0;
    let a = ""
    for(let i =0; i < myString.length; i++){
    myString[i] === "A" ? a += "B" : a += "A"
        
    }
    console.log(a)
    if(a.includes(pat)){
        answer += 1
    } else { 
        answer += 0
    }
    return answer;
}