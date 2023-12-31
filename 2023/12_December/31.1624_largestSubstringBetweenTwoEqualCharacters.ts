function maxLengthBetweenEqualCharacters(s: string): number {
    const charPosMap = new Map<string, number>();
    let ans = -1;

    for (let i = 0; i < s.length; i++) 
        if (!charPosMap.has(s[i]))
            charPosMap.set(s[i], i);
        else 
            ans = Math.max(ans, i - charPosMap.get(s[i]) - 1);

    return ans;
};