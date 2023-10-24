function solution(hp) {
    var answer = 0;
    let a = Math.floor(hp / 5);
    let b = Math.floor((hp - 5 * a) / 3);
    let c = hp - 5 * a - 3 * b
    return a + b + c 
    return ;
}