function solution(my_string) {
    var answer = [];
    
    let regex = /[^0-9]/g;
    let numbers = my_string.replace(regex, "")
    console.log('number', typeof numbers)
    numbersArr = numbers.split("");
    console.log(numbersArr)
    answer = numbersArr.map(Number).sort() 
    
    return answer;
}