function solution(s) {
    let answer =[]
    let str = ""
    const result = s.split(" ").forEach((data) => {
    for(let i =0; i<data.length; i++) {
        str += i % 2 == 0 ? data[i].toUpperCase() : data[i].toLowerCase()
    }
         answer.push(str)
        str = ""
    })
    return answer.join(" ")
}