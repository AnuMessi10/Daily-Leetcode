function countCharacters(words: string[], chars: string): number {
  const alphabetMap = new Map<string, number>();

  for (const char of chars) {
    alphabetMap.set(char, (alphabetMap.get(char) || 0) + 1);
  }

  let count = 0;

  for (const word of words) {
    let tempAlphabetMap = new Map(alphabetMap),
      wordFlag = true;

    for (const letter of word) {
      if (tempAlphabetMap.has(letter)) {
        const charCount = tempAlphabetMap.get(letter) as number;

        if (charCount >= 1) tempAlphabetMap.set(letter, charCount - 1);
        else {
          wordFlag = false;
          break;
        }
      } else {
        wordFlag = false;
        break;
      }
    }

    if (wordFlag) count += word.length;
  }

  return count;
}
