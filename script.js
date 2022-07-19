const input = document.querySelector('[data-input]');
const errorImage = document.querySelector('[data-error-image]');
const errorText = document.querySelector('[data-error-text]');
const submitButton = document.querySelector('[data-submit]');

submitButton.addEventListener('click', () =>{
    if(input.value != 'text'){
        errorImage.style.display = 'Block';
        errorText.style.display = 'Block';
    }
})