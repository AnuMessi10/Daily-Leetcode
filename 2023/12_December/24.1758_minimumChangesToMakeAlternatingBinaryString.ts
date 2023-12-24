function minOperations(s: string): number {
    let counter = 0;

    for (let i = 0 ; i < s.length ; i++) {
        if(i % 2 === 0) 
            counter += Number(s[i] === '1')
        else
            counter += Number(s[i] === '0')
    }
    
    return Math.min(counter, s.length - counter)
};