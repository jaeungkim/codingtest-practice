function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1, b = 2;
    let mod = 1234567;

    for (let i = 3; i <= n; i++) {
        let temp = (a + b) % mod;
        console.log(temp);
        a = b;
        b = temp;
    }

    return b; // dp[n]
}
