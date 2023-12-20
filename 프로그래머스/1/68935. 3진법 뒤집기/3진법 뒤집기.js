function solution(n) {
    var answer = 0;
    const result = n.toString(3).split("").reverse().join('')
    console.log(parseInt(result, 3))
    return parseInt(result, 3);
}