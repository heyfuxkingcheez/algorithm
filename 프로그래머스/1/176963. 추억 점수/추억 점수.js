function solution(name, yearning, photos) {
    let scoresMap = new Map()
    let results = new Map()
    let answer = []
    
    for(let i = 0; i < name.length; i++) {
        if(!!(yearning[i])){
            scoresMap.set(name[i], yearning[i])
        }
    }
    
    for(const name of scoresMap) {
        for(const [index, photo] of photos.entries()) {
            if(photo.includes(name[0])) {
                results.set(index, (results.get(index) || 0) + name[1])
            } else {
                results.set(index, (results.get(index) || 0))
            }
        }
    }
    for(const result of results) {
        answer.push(result[1])
    }
    
    return answer;
}