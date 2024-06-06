function solution(gems) {
    let gemTypes = new Set(gems).size;
    let gemCount = new Map();
    let start = 0;
    let minLength = gems.length + 1;
    let answer = [0, gems.length - 1];
    
    for (let end = 0; end < gems.length; end++) {
        // 현재 보석을 카운트 맵에 추가
        gemCount.set(gems[end], (gemCount.get(gems[end]) || 0) + 1);

        // 모든 종류의 보석을 포함할 때까지 윈도우 확장
        while (gemCount.size === gemTypes) {
            // 최소 길이 갱신
            if (end - start < minLength) {
                minLength = end - start;
                answer = [start + 1, end + 1];
            }

            // 시작 지점 보석의 개수를 줄이고 윈도우 축소
            gemCount.set(gems[start], gemCount.get(gems[start]) - 1);
            if (gemCount.get(gems[start]) === 0) {
                gemCount.delete(gems[start]);
            }
            start++;
        }
    }

    return answer;
}
