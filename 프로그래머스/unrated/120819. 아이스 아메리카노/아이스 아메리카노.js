function solution(money) {
    var answer = [];
    let iceAmericano = Math.floor(money / 5500);
    answer.push(iceAmericano);
    let changes = money - 5500 * iceAmericano;
     answer.push(changes);
   
    return answer;
}