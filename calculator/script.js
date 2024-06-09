let string = "";
const inputField = document.querySelector('input');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;
        if (value === '=') {
            try {
                string = eval(string);
                inputField.value = string;
            } catch (error) {
                inputField.value = "Error";
            }
        } else if (value === 'C') {
            string = "";
            inputField.value = string;
        } else {
            string += value;
            inputField.value = string;
        }
    });
});
