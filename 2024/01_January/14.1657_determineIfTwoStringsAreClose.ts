function closeStrings(word1: string, word2: string): boolean {
    const w1Length = word1.length;

    if (w1Length !== word2.length)
        return false;

    if (word1 === word2)
        return true;

    const w1Arr = new Array(26).fill(0), w2Arr = new Array(26).fill(0), base = 'a'.charCodeAt(0);

    for (let i = 0; i < w1Length; ++i) {
        w1Arr[word1[i].charCodeAt(0) - base]++;
    }

    for (let i = 0; i < w1Length; ++i) {
        const n = word2[i].charCodeAt(0) - base;

        if (w1Arr[n] === 0) return false;

        w2Arr[n]++;
    }

    w1Arr.sort((a, b) => b - a)
    w2Arr.sort((a, b) => b - a)

    for (let i = 0; i < 26; ++i)
        if (w1Arr[i] !== w2Arr[i])
            return false;

    return true;
};
