function select(num, arry) {
  const randomIndex = () => Math.floor(Math.random() * arry.length);
  const out = [];

  for (var i = 0; i < num; i++) {
    let choice;
    do {
      choice = randomIndex();
    } while (out.includes(choice));
    out.push(choice);
  }

  return out.map(e => arry[e]);
}

// each player sees 9 green 3 black
// 3 green synced
// 1 black synced
// 1 black stealth (green to other player)
// 1 black innocent (tan to other player)

// so a game has
// 5 assassins:
//   1 - shared
//   1 - innocent to p1
//   1 - stealth to p1
//   1 - innocent to p2
//   1 - stealth to p2

// 3 synced green
// 5 unique A green
// 5 unique B green
// (1 for each is a stealthy assassin)

function buildBoard() {
  const words = select(25, ALL_WORDS);
  const revealed = Array(25) // TODO This is disgusting
    .join()
    .split(",")
    .map(e => false);

  let roles;
  let startingTeam;
  if (DUET) {
    roles = select(25, DUET_ROLES_TEMPLATE);
  } else {
    startingTeam = select(1, ["red", "blue"])[0];
    roles = select(
      25,
      startingTeam === "red"
        ? CLASSIC_RED_START_ROLES_TEMPLATE
        : CLASSIC_BLUE_START_ROLES_TEMPLATE
    );
  }

  return {
    words,
    revealed,
    roles,
    startingTeam
  };
}

window.board = buildBoard();
