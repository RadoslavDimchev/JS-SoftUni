function calc() {
  const numOne = document.getElementById('num1').value;
  const numTwo = document.getElementById('num2').value;
  const result = Number(numOne) + Number(numTwo);

  document.getElementById('sum').value = result;
}