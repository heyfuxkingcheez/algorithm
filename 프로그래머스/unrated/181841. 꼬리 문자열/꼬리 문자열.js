function solution(str_list, ex) {
    var answer = '';
    let arr = [];
    str_list.forEach((e) => {
        if(e.includes(ex) == false) {
            answer += e
        }
    })
    
      return answer
    }
      

  
 
