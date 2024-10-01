function solution(n, arr1, arr2) {
    let answer = [];

    for(let i = 0; i < n; i++) {
        let bitwiseOr = arr1[i] | arr2[i];
        
        let binaryString = bitwiseOr.toString(2).padStart(n, '0');
        
        answer.push(binaryString.replace(/1/g, '#').replace(/0/g, ' '));
    }
    return answer;
}