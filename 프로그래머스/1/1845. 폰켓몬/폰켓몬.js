function solution(nums) {
    var answer = 0;
    let poketmonSet = [...new Set(nums)]
    
    let possibleMons = nums.length / 2

    
    if(possibleMons >= poketmonSet.length) {
        console.log(poketmonSet.length)
        answer = poketmonSet.length
    } else {
        console.log(possibleMons)
        answer = possibleMons
    }
    
    return answer;
}