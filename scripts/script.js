const printTree = function (rowNumbers) {
  let wholeTree = "";
  if (typeof rowNumbers == "undefined") {
    rowNumbers = 25;
  }

  let spaceInRow = "";
  let asterisksInRow = "";
  for (let currentRow = 1; currentRow <= rowNumbers; currentRow++) {
    for (let index = rowNumbers - currentRow; index > 0; index--) {
      spaceInRow += " ";
      wholeTree += " ";
    }

    for (let index2 = currentRow; index2 > 0; index2--) {
      asterisksInRow += " *";
      wholeTree += " *";
    }

    console.log(`${spaceInRow} ${asterisksInRow}`);
    wholeTree += "\n";
    spaceInRow = "";
    asterisksInRow = "";
  }
  return wholeTree;
};

printTree(8);

printTree();

document.getElementById("inputfile").addEventListener("change", function () {
  let fileReader = new FileReader();
  fileReader.onload = function () {
    document.getElementById("output").textContent = printTree(
      fileReader.result
    );
  };

  fileReader.readAsText(this.files[0]);
});
