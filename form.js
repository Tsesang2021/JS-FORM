function myFunction() {
  let ele = document.getElementById("no").value;
  let text;
  if (isNaN(ele) || ele < 1 || ele > 10) {
    text = "Invalid no";
  } else {
    text = "Input valid";
  }
  document.getElementById("hide").innerHTML = text;
}
