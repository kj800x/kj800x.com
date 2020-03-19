let cells = [];

function buildDOM() {
  const board = document.createElement("div");
  board.className = "board";
  for (var i = 0; i < 5; i++) {
    const row = document.createElement("div");
    row.className = "row";
    board.appendChild(row);
    for (var j = 0; j < 5; j++) {
      const cell = document.createElement("div");
      row.appendChild(cell);
      cell.setAttribute("role", "button");
      cell.onclick = (idx => () => {
        window.board.revealed[idx] = true;
        render();
      })(i * 5 + j);
      cells.push(cell);
    }
  }
  document.getElementsByTagName("body")[0].appendChild(board);

  function buildKey(player) {
    const keyContainer = document.createElement("div");
    keyContainer.className = "keyContainer hidden";
    const keyBoard = document.createElement("div");
    keyBoard.className = "keyboard";
    for (var i = 0; i < 5; i++) {
      const row = document.createElement("div");
      row.className = "row";
      keyBoard.appendChild(row);
      for (var j = 0; j < 5; j++) {
        const cell = document.createElement("div");
        const idx = i * 5 + j;
        cell.className =
          "keycell cell " + window.board.roles[idx]["role" + player];
        row.appendChild(cell);
      }
    }
    keyContainer.appendChild(keyBoard);
    const keySwitch = document.createElement("button");
    keySwitch.innerHTML = "Show/Hide";
    keySwitch.onclick = () => {
      keyContainer.className =
        keyContainer.className === "keyContainer visible"
          ? "keyContainer hidden"
          : "keyContainer visible";
    };
    keyContainer.appendChild(keySwitch);
    return keyContainer;
  }

  const keys = document.createElement("div");
  keys.className = "keys";
  keys.appendChild(buildKey("A"));
  if (DUET) {
    keys.appendChild(buildKey("B"));
  }

  document.getElementsByTagName("body")[0].appendChild(keys);

  render();
}

const displayRole = {
  tan: "Bystander",
  black: "Assassin",
  green: "Spy",
  blue: "Blue Spy",
  red: "Red Spy"
};

function render() {
  for (var i = 0; i < 25; i++) {
    if (board.revealed[i]) {
      cells[i].innerHTML = displayRole[board.roles[i].trueRole];
      cells[i].className = `cell ${board.roles[i].trueRole}`;
    } else {
      cells[i].innerHTML = board.words[i];
      cells[i].className = "cell unknown";
    }
  }
}

window.onload = buildDOM;
