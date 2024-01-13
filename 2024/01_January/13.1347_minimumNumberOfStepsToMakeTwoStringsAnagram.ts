function minSteps(s: string, t: string): number {
    const arr = new Array(26).fill(0), n = s.length, base = 'a'.charCodeAt(0);

    let diff = 0;

    for (let i = 0; i < n; i++) {
        arr[t[i].charCodeAt(0) - base]--;
        arr[s[i].charCodeAt(0) - base]++;
    }

    for (const elem of arr) 
        if (elem > 0)
            diff += elem;

    return diff;
};