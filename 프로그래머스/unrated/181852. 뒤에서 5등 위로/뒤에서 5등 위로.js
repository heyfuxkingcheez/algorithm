function solution(num_list) {
    
    let arr = num_list.sort((a, b) => {
        return a - b
    })
    console.log(arr)
    let answer = arr.slice(5, arr.length)
    
    return answer;
}