function solution(m, n, puddles) {
    const MOD = 1000000007;

    // dp 배열을 0으로 초기화
    const dp = Array.from({ length: n }, () => Array(m).fill(0));
    
    // 시작점 초기화
    dp[0][0] = 1;

    // puddles 위치를 dp 배열에서 0으로 설정
    for (let [x, y] of puddles) {
        dp[y - 1][x - 1] = -1; // 물 웅덩이를 -1로 표시
    }

    // dp 배열을 채움
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 물 웅덩이인 경우 건너뜀
            if (dp[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }
            // 왼쪽에서 오는 경우
            if (j > 0) dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;
            // 위쪽에서 오는 경우
            if (i > 0) dp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD;
        }
    }

    return dp[n - 1][m - 1];
}
