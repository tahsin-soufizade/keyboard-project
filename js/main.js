const keyboardWrapper = document.querySelector('.keyboard-wrapper');
const allCharacters = document.querySelectorAll('.char');
const textWrapper = document.querySelector('.text-wrapper');
const clearAllButton = document.querySelector('.clear-btn');
const backButton = document.querySelector('.back-btn');
const nextLineButton = document.querySelector('.nextLine-btn');
const keyBoardIcon = document.querySelector('.keyboard-icon');

// append clicked character to text wrapper
allCharacters.forEach(char => {
    char.addEventListener('click', (e) => {
        const dataKey = e.target.dataset.key;
        if (dataKey) {
            textWrapper.append(dataKey);
        }
    });
});

// clear all characters
clearAllButton.addEventListener('click', () => {
    textWrapper.innerHTML = '';
});

// delete last character
backButton.addEventListener('click', () => {
    // slice all characters whitout last letter
    const updatedText = textWrapper.value.slice(0, -1);
    textWrapper.innerHTML = updatedText;
});

// go next line (new line)
nextLineButton.addEventListener('click', () => {
    textWrapper.append('\n');
});

// set toggle class to keyboard
keyBoardIcon.addEventListener('click', () => {
    keyboardWrapper.classList.toggle('show-keyboard-wrapper');
})