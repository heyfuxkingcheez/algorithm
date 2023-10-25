function solution(cipher, code) {
    var answer = '';
    let arr = [];
    let strArr = [...cipher];
    
   for(let i = 1; i <=cipher.length; i++) {
       if(i % code === 0) {
           console.log(cipher[i-1])
           answer += cipher[i-1] 
       }
   }
    return answer
}