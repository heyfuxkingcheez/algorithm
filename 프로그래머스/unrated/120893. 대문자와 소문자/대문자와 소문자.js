function solution(my_string) {
    var answer = '';
    let arr = [...my_string];
    let answerArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] === arr[i].toUpperCase() ? answerArr.push(arr[i].toLowerCase()) : answerArr.push(arr[i].toUpperCase());
        
    }
    return answerArr.join("");
}