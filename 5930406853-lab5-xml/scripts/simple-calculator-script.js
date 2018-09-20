var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.key-number'), // number buttons
  operator = document.querySelectorAll('.key-operator'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  toggle = document.getElementById('toggle'); // toggle buttonหหห


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

clear.addEventListener("click", function () {
  input.innerHTML = "";
})

toggle.addEventListener('click', function () {
  if (input.textContent.charAt(0) == '-') {
    input.textContent = input.textContent.slice(1);
  }
  else {
    input.textContent = '-' + input.textContent;
  }
});

result.addEventListener("click", function () {
  var getInput = input.textContent.replace(/×/gi, "*");
  alert(getInput)
  var postResult = eval(getInput);
  input.textContent = postResult;
});
