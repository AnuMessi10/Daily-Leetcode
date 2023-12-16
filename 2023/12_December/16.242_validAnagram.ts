function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length)
        return false;

    const charMap = new Map<string, number>();

    for(const sChar of s)
        charMap.set(sChar, (charMap.get(sChar) ?? 0) + 1);

    for(const tChar of t){
        if(!charMap.has(tChar) || charMap.get(tChar) === 0)
            return false;
        charMap.set(tChar, charMap.get(tChar) - 1);
    }

    return true;
};