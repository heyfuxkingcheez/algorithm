function solution(a, b, n) {
    const getBottle = (bottleCount, cokeCount, a, b) => {
        if (bottleCount / a < 1){
            return cokeCount;
        }
        const newGetBottleCount = Math.floor(bottleCount / a) * b
        const leftCokeCount = (bottleCount % a)
        
        return getBottle(newGetBottleCount+leftCokeCount, cokeCount+newGetBottleCount, a, b )
        
    }
    const answer = getBottle(n,0,a,b)
    return answer;
}