function solution(operations) {
    var answer = [];
    
    operations.forEach(operations => {
        let splitNode = operations.split(' ')
        if(splitNode[0] === 'I' && !isNaN(splitNode[1])){
            answer.push(Number(splitNode[1]))
        }else if(splitNode[0] === 'D' && splitNode[1] === '1') {
            if(answer.length > 0) {
                let maxIndex = answer.indexOf(Math.max(...answer))
                answer.splice(maxIndex, 1)
            }
        }else if(splitNode[0] === 'D' && splitNode[1] === '-1') {
            if(answer.length > 0){
                let minIndex = answer.indexOf(Math.min(...answer))
                answer.splice(minIndex, 1)
            }
        }
    } )
    if(answer.length === 0) {
        return [0, 0]
    }         
    return [Math.max(...answer), Math.min(...answer)]
}