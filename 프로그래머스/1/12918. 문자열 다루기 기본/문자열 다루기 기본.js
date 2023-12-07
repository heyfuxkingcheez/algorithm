function solution(s) {
    
    if(s.length === 4 || s.length === 6) {
         var regExp = /[A-Za-z]/
     if(regExp.test(s)) {
         return false
     } else {
         return true
     }
    } else {
        return false
    }
    
}