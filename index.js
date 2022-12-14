const myInput = document.querySelector("#number");

myInput.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};
