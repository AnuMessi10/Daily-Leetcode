function makeEqual(words: string[]): boolean {
  const charMap = new Array(26).fill(0);

  if (words.length === 1) return true;

  for (const word of words)
    for (const letter of word)
      charMap[letter.charCodeAt(0) - "a".charCodeAt(0)]++;

  for (const x of charMap) if (x % words.length !== 0) return false;

  return true;
}
