const printTree = function (rowNumbers) {
  let spaceInRow = "";
  let asterisksInRow = "";
  for (let currentRow = 1; currentRow <= rowNumbers; currentRow++) {
    for (let index = rowNumbers - currentRow; index > 0; index--) {
      spaceInRow += " ";
    }

    for (let index2 = currentRow; index2 > 0; index2--) {
      asterisksInRow += " *";
    }

    console.log(`${spaceInRow} ${asterisksInRow}`);
    spaceInRow = "";
    asterisksInRow = "";
  }
};

printTree(8);
