function solution(nums) {
    var answer = -1;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            for(let k = j+1; k<nums.length; k++) {
                function isPrime(N) {
                      // 1은 소수가 아니다.
                     if (N === 1) return false;
                       // 2부터 N제곱근까지의 수로 N을 나눴을 때
                     for (let i = 2; i <= Math.sqrt(N); i++) {
                        // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
                     if (N % i === 0) return false;
                     }
                        // 모두 나누어 떨어지지 않으면 N은 소수이다.
                     return true;
}
                let result = nums[i] + nums[j] + nums[k]
                if(isPrime(result)) {
                    answer += 1
                }
            }
        }
    }
    return answer + 1;
}