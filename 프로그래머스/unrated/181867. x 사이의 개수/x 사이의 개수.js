function solution(myString) {
    var answer = [];
    let arr = myString.split("x")
    console.log(arr)
    arr.forEach((data) => answer.push(data.length))
    return answer;
}