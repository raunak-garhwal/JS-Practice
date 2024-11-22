const input = document.querySelector("input");
let firstThreeNumbers = "";

input.addEventListener("input", (e) => {
    const inputValue = e.target.value;

    if (inputValue.length === 4){
        firstThreeNumbers = inputValue.substring(0, 3);
        input.value = `+(${firstThreeNumbers}) - ${inputValue[inputValue.length - 1]}`;
    }
});