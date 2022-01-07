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

    wholeTree += "\n";
    spaceInRow = "";
    asterisksInRow = "";
  }
  return wholeTree;
};

let textFile = null;
const makeTextFile = function (text) {
  let data = new Blob([text], { type: "text/plain" });

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }

  textFile = window.URL.createObjectURL(data);

  // returns a URL you can use as a href
  return textFile;
};

document.getElementById("inputfile").addEventListener("change", function () {
  let fileReader = new FileReader();
  fileReader.onload = function () {
    document.getElementById("output").textContent = printTree(
      fileReader.result
    );
  };

  fileReader.readAsText(this.files[0]);
});

const create = document.getElementById("create");
const textValue = "text";
create.addEventListener(
  "click",
  function () {
    const link = document.getElementById("downloadlink");
    link.href = makeTextFile(textValue);
    link.style.display = "block";
  },
  false
);
