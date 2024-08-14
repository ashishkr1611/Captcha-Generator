window.onload = generateCaptcha;

function generateCaptcha() {
    var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var captchaLength = 4;
    var captcha = [];
    for (var i = 0; i < captchaLength; i++) {
        var index = Math.floor(Math.random() * characters.length);
        captcha.push(characters.charAt(index));
    }
    var captchaDiv = document.getElementById('captcha');
    captchaDiv.innerHTML = captcha.join('');
}

function validateCaptcha() {
    var inputText = document.getElementById('inputText').value;
    var captchaText = document.getElementById('captcha').innerText;
    if (inputText === captchaText) {
        alert('Correct CAPTCHA');
    } else {
        alert('Incorrect CAPTCHA, please try again');
        generateCaptcha();
    }
}