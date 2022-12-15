const myInput = document.querySelector("#number");
const button = document.querySelector("#button");
const romanNumber = document.querySelector("#romanNumber");

myInput.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};

button.addEventListener("click", () => {
  let input = Math.floor(myInput.value);
  if (input < 1) {
    alert("Please enter a number between 1 and 9999");
    myInput.value = "";
    romanNumber.value = "";
  } else {
    romanNumber.value = convertToRoman(input);
  }
  console.log(input);
});

const tableRoman = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

function convertToRoman(nbre) {
  if (nbre === 0) {
    return "";
  }
  for (let i = 0; i < tableRoman.length; i++) {
    if (nbre >= tableRoman[i][1]) {
      return tableRoman[i][0] + convertToRoman(nbre - tableRoman[i][1]);
    }
  }
}
