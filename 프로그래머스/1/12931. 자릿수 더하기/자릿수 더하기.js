function solution(n)
{
    var answer = 0;
    const numStr = String(n)
    console.log(numStr)
    const numArr = [...numStr]
    console.log(numArr)
    for(let i =0; i < numArr.length; i++) {
        console.log(answer += Number(numArr[i]))
        
    }
    
    return answer;
}