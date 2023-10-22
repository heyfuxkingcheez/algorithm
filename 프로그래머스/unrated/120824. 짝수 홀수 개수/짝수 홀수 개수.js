function solution(num_list) {
    var answer = [];
    let count = 0;
    let count1 = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            count += 1;
        } else {
            count1 += 1;
        }
    }
    answer.push(count);   
    answer.push(count1);
    return answer;
}