function solution(age) {
    var answer = '';
    let result = [];
    let engStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] 
    
    
    let str = String(age);
    
    let one = str[str.length-1];
    let ten = str[str.length-2];
    let hundred = str[str.length-3];
    let thausand = str[str.length-4];
    
    let onenum = Number(str[str.length-1]);
    let tennum = Number(str[str.length-2]);
    let hundrednum = Number(str[str.length-3]);
    let thausandnum = Number(str[str.length-4]);
    
    
    if (thausand !== undefined && 999<age<=1000){
        result.push(thausandnum)
    }
    if (hundred !== undefined && 99<age<=999) {
        result.push(hundrednum)        
    }
    if (ten !== undefined && 9 < age <= 99) {
        result.push(tennum)      
    }
    if (one !== undefined && 0<= age <= 9) {
        result.push(onenum)
        console.log(result)
    }
    
    for (let i = 0; i < result.length; i++) {
      answer +=  engStr[result[i]]
       
    }
    console.log(answer)
   
    return answer;
}