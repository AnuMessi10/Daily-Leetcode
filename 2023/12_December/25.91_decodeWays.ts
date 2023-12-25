function numDecodings(s: string): number {
    let dp = [1, 0]

    for (let i = s.length - 1; i >= 0; i--) {
        let temp = (s.substring(i, i + 2) <= "26") ? dp[1] : 0;
        dp[1] = dp[0];
        dp[0] = ('0' != s[i]) ? (dp[0] + temp) : 0;
    }
    
    return dp[0];
};