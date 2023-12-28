function solution(today, terms, privacies) {
    var answer = [];
    let [year , month, day] = today.split('.')
    let todayCnt = +year * 12 * 28 + +month * 28 + +day
    let obj = {}
    for(let j = 0; j < terms.length; j++) {

        let a = terms[j].split(' ')[0]

        let b = terms[j].split(' ')[1]
        obj[a] = Number(b)
        
    }
 
    
    for(let i = 0; i < privacies.length; i++) {
    let type = privacies[i].split(' ')[1]
    let start = privacies[i].split(' ')[0]
    let [Year, Month, Day] = start.split('.')
    let Cnt = +Year * 12 * 28 + +Month * 28 + +Day + +obj[type] * 28
    if(+Cnt <= +todayCnt) {
        answer.push(i + 1)
    }
        
    }
    return answer;
}