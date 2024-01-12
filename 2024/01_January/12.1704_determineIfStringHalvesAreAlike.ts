const vowelSet = new Set<string>([
  "a",
  "e",
  "i",
  "o",
  "u",
  "A",
  "E",
  "I",
  "O",
  "U",
]);

function halvesAreAlike(s: string): boolean {
  let count = 0,
    n = s.length / 2;
  for (let i = 0; i < n; i++)
    count += Number(vowelSet.has(s[i])) - Number(vowelSet.has(s[i + n]));

  return count === 0;
}
