const btn = document.getElementById('btn');
const input = document.getElementById('input');
const inputChange = document.getElementById('changed-input');

// console.log(btn);
// console.log(input);
// console.log(inputChange);

btn.addEventListener('click', function () {
  if (input.value.length > 0) {
    const typedValue = input.value;
    inputChange.textContent = typedValue;
    input.value = '';
  } else {
    alert('type something please');
  }
});
