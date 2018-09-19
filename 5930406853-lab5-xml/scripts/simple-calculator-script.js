var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.key-number'), // number buttons
  operator = document.querySelectorAll('.key-operator'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'); // clear button
  //toggle = document.getElementById('toggle');

clear.addEventListener("click", function () {
  input.innerHTML = "";
})

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
      input.innerHTML += e.target.innerHTML;
  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    if (input.innerHTML.length == 0) {
      alert("Please enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}

result.addEventListener("click", function () {
  var getInput = input.textContent.replace("×", "*");
  var postResult = eval(getInput);
  input.textContent = postResult;
});