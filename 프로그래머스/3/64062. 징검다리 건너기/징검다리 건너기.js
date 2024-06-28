function solution(stones, k) {
    let answer = 0;
    let index = 0;
    let contiguousArr = [];
    let asdMap = new Map()
    
    
    
    while (index < stones.length - 2){
        if(index < stones.length){
            if(stones[index] > 0) {
                stones[index]--;
                index++;
            }else {
                console.log(stones[index])
                asdMap.set(index, stones[index])
                index++;
            }
        }else { 
            index = 0;
            answer++;
        }
        
    }
    console.log(stones)
   
    return answer
}