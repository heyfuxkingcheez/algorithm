function solution(my_string, letter) {
    
    let newStr = my_string.replaceAll(letter, "")
    return newStr;
}