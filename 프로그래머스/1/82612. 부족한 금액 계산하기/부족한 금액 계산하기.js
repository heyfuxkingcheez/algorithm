function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i <= count; i++) {
        answer += price * i
    }
    let result = answer - money
    result > 0 ? result : result = 0 ;
    return result;
}