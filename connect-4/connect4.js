window.onload = () => {
  const c4 = document.createElement("div");
  const dropRow = document.createElement("div");
  const grid = document.createElement("div");

  let turn = 0;

  c4.className = "c4";
  dropRow.className = "drop row";
  grid.className = "grid";

  c4.appendChild(dropRow);
  c4.appendChild(grid);

  const dropCells = [];
  let dropPosition = 0;
  const cells = [];
  const width = 10;
  const height = 10;

  for (var i = 0; i < width; i++) {
    dropCells[i] = document.createElement("div");
    dropCells[i].className = "cell";
    dropRow.appendChild(dropCells[i]);
  }

  for (var i = 0; i < height; i++) {
    const row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row);
    cells[i] = [];
    for (var j = 0; j < width; j++) {
      cells[i][j] = document.createElement("div");
      cells[i][j].className = "cell";
      row.appendChild(cells[i][j]);
    }
  }

  function render() {
    for (var i = 0; i < width; i++) {
      dropCells[i].className =
        "cell " + (dropPosition === i ? (turn === 0 ? "red" : "blue") : "");
    }
  }

  render();

  function drop() {
    for (var i = 0; i < height; i++) {
      if (
        i === height - 1 ||
        cells[i + 1][dropPosition].className.includes("red") ||
        cells[i + 1][dropPosition].className.includes("blue")
      ) {
        cells[i][dropPosition].className += turn === 0 ? " red" : " blue";
        break;
      }
    }
    turn = turn ^ 1;
  }

  window.onkeydown = event => {
    console.log(event);
    switch (event.key) {
      case "ArrowLeft":
      case "A":
      case "a":
        dropPosition--;
        break;
      case "ArrowRight":
      case "D":
      case "d":
        dropPosition++;
        break;
      case "ArrowDown":
      case "S":
      case "s":
        drop();
        break;
      case "ArrowUp":
        turn = turn ^ 1;
        break;
    }
    render();
  };

  document.getElementsByTagName("body")[0].appendChild(c4);
};
