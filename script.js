const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
let calculation = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.classList.contains('num')) {
            calculation += button.value;
            screen.innerText = calculation;
        }
        if (button.classList.contains('op')) {
            calculation += button.value;
            screen.innerText = calculation;
        }
        if (button.classList.contains('eq')) {
            screen.innerText = eval(calculation);
        }
        if (button.classList.contains('clear')) {
            calculation = '';
            screen.innerText = calculation;
        }
    });
});
