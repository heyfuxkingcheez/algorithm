function solution(arr1, arr2) {
    var answer = 0;
    let result1 = 0
    let result2 = 0;
    if(arr1.length > arr2.length){
        answer += 1
    } else if (arr1.length < arr2.length) {
        answer -= 1
    } else { 
        arr1.forEach((e) => {
            result1 += e
        })
        arr2.forEach((e) => {
            result2 += e
        })
        if(result1 > result2) {
            answer += 1
        } else if(result1 < result2) {
            answer -= 1
      } else {
          answer += 0
      }
    }
    return answer;
}