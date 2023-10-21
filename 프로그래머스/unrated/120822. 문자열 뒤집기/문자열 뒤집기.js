function solution(my_string) {
    let result = my_string.split("");
    let result1 = result.reverse();
    let result2 = result1.join("");
    return result2;
}