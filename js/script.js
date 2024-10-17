//debugger;

const textareaElement = document.getElementById("textarea");
const resultElement = document.getElementById("result");

textareaElement.addEventListener("input", wordCount);


function wordCount() {
    const words = textareaElement.value.split(/[, \t\r\n]+/g).filter((elmt) => elmt !== "");

    if(words.length === 1) {
        resultElement.innerText = `The text contains ${words.length} word`;
    } else {
        resultElement.innerText = `The text contains ${words.length} words`;
    }
}

