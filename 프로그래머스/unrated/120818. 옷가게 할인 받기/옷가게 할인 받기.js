function solution(price) {
    var answer = 0;
    if (price >= 100000 && price < 300000) {
        let result1 = Math.floor(price *0.95);
        answer += result1
        return answer;
    } else if (price >= 300000 && price < 500000) {
        let result2 = Math.floor(price * 0.9);
        answer += result2
        return answer;
    } else if (price >= 500000 && price <= 1000000) {
        let result3 = Math.floor(price *0.8);
        answer += result3
        return answer;
    } else if (price >= 0 && price < 100000){
        answer += Math.floor(price);
        return answer;
    }
}