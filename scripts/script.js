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

let input = document.querySelector("input");

input.addEventListener("change", () => {
  let files = input.files;
  if (files.length == 0) return;

  /* If any further modifications have to be made on the
	Extracted text. The text can be accessed using the
	file variable. But since this is const, it is a read
	only variable, hence immutable. To make any changes,
	changing const to var, here and In the reader.onload
	function would be advisible */

  let file = files[0];
  let reader = new FileReader();

  reader.onload = (e) => {
    const fileContent = Number(e.target.result);

    document.getElementById("output").textContent = printTree(fileContent);

    const create = document.getElementById("create");
    const textValue = printTree(Number(fileContent));
    create.addEventListener(
      "click",
      function () {
        const link = document.getElementById("downloadlink");
        link.href = makeTextFile(textValue);
        link.download = "happy-holidays.txt";
        link.style.display = "block";
      },
      false
    );
  };

  reader.onerror = (e) => alert(e.target.error.name);

  reader.readAsText(file);
});
