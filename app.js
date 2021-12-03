function convert() {
  // get value from input
  const feet = parseInt(document.getElementById('feet').value);
  console.log(feet);
  //   convert feet to inches
  const inches = feet * 12;
  // display value
  document.getElementById('inches').innerText = inches;
}
