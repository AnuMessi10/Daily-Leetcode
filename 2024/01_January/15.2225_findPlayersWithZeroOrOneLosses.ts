const MAX_PLAYER_ID = 100001;

function findWinners(matches: number[][]): number[][] {
  const players = new Array(MAX_PLAYER_ID).fill(0),
    answer: number[][] = [[], []];

  for (const [winner, loser] of matches) {
    if (players[winner] >= 0) players[winner] = 1;

    if (players[loser] < 0) players[loser] -= 1;

    if (players[loser] >= 0) players[loser] = -1;
  }

  for (let i = 0; i < MAX_PLAYER_ID; ++i)
    if (players[i] === 1) answer[0].push(i);
    else if (players[i] === -1) answer[1].push(i);

  return answer;
}
