function solution(clothes) {
    let answer = 0;
    let clothMap = new Map()
    let items = [];
    
    for(const [name, type] of clothes) {
        if(clothMap.has(type)){
            clothMap.set(type, clothMap.get(type) + 1)
        }else {
            clothMap.set(type, 1)
        }
    }
    
    for(const [key, value] of clothMap) {
        items.push(value)
    }
    
    answer = items.reduce((acc, curr) => acc * (1 + curr), 1)
    
    return answer - 1;
}