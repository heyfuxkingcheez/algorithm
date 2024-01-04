function solution(k, score) {
    var answer = [];
    let arr = []
    for(const s of score) {
        arr.push(s)
        arr.sort((a, b) =>  a - b).reverse()
        let b = arr.slice(0, k)
        answer.push(b[b.length-1])
        
    }
    return answer;
}