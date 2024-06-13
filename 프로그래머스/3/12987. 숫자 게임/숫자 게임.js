function solution(A, B) {
    B.sort((a,b) => a - b)
    A.sort((a,b) => a - b)
    let answer = 0;
    let aCnt = 0;
    for(const b of B) {
        if(A[aCnt] < b) {
            aCnt++;
            answer++;
            continue
        }
    }
    

    return answer;
}