function convert() {
  // get value from input
  const feet = parseInt(document.getElementById('feet').value);
  console.log(feet);
  //   convert feet to inches
  const inches = feet * 12;
  // display value
  document.getElementById('inches').innerText = inches;
}
const answer = document.getElementById('inches');
const btn = document.getElementById('convert');

btn.addEventListener('click', function () {
  answer.classList.add('green');
});
