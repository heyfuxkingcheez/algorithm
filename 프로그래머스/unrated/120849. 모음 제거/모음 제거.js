function solution(my_string) {
    var answer = '';
    let arr = [];
    let strArr = Array.from(my_string);
    let str = [];
    for (let i = 0; i < strArr.length; i++) {
        str.push(strArr[i].replace(/a|e|i|o|u/g, ""));
        
        
    }
   let wook = str.join('');
    
    return wook;
}