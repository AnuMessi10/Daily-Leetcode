function dailyTemperatures(temperatures: number[]): number[] {
  const t = temperatures;
  const answer = new Array(t.length).fill(0);
  const stack: number[] = [];
  if (t.length <= 1) return answer;
  for (let i = 0; i < t.length; i++) {
    while (t[stack[stack.length - 1]] < t[i]) {
      const top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }
  return answer;
}
