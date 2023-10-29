function solution(my_string, is_prefix) {
    var answer = 0;
    let strArr = my_string.split("")
    let strArr1 = [];
    
    
   for(let i = 1; i <= strArr.length; i++) {
       let a = strArr.slice(0, i)
       let b = a.join('')
       strArr1.push(b)
       
   }
    console.log(is_prefix)
    console.log(strArr1)
   
    for (let i =0; i < strArr1.length; i++) {
        if(is_prefix === strArr1[i]){
            answer += 1;
        } else {
            answer += 0;
            continue;
        }
    }
    
    

    return answer;
}