function solution(numbers) {
    var answer = 0;
    let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let difference = numArr.filter(x => !numbers.includes(x));
    console.log(difference)
    difference.forEach((d) => {
        answer += d
    })
    return answer;
}