function generatePassword(){
    let hasUppercase = document.getElementById('uppercase').checked;
    let hasLowercase = document.getElementById('lowercase').checked;
    let hasNumbers = document.getElementById('numbers').checked;
    let hasSymbols = document.getElementById('symbols').checked;

    if(!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols) {
        passwordResult.value = '';
        return
    }

    let charsets = [];
    let uppercase = [];
    let lowercase = [];
    let numbers = [];
    let symbols = [':', ';', '<', '>', '?',  '=', '@', '[', ']', '/', '|', '~', '_', '-', '{', '}',];

    for(let i = 65; i < 91; i++){
        uppercase.push(String.fromCharCode(i));
    }

    for(let i = 97; i < 123; i++){
        lowercase.push(String.fromCharCode(i));
    }

    for(let i = 48; i < 58; i++){
        numbers.push(String.fromCharCode(i));
    }

    for(let i = 32; i < 48; i++){
        symbols.push(String.fromCharCode(i));
    }

    if(hasUppercase) {
        charsets = charsets.concat(uppercase);
    }

    if(hasLowercase) {
        charsets = charsets.concat(lowercase);
    }

    if(hasNumbers) {
        charsets = charsets.concat(numbers);
    }

    if(hasSymbols) {
        charsets = charsets.concat(symbols);
    }

    let password = '';

    for(let i = 0; i < passwordLength.value; i++) {
        let randomCharsetIndex = Math.floor(Math.random() * charsets.length);
        let charset = charsets[randomCharsetIndex];
        password += charset[Math.floor(Math.random() * charset.length)];
    }

    passwordResult.value = password;
}
generatePassword();

passwordCopy.onclick = function() {
    navigator.clipboard.writeText(passwordResult.value);
}

tippy('#passwordCopy', {
    animation: 'fade',
    content: "Copied",
    trigger: 'click',
});

passwordChange.onclick = function() {
    passwordChange.style.transform += 'rotate(360deg)';
    generatePassword();
}


lengthMinusBtn.onclick = function() {
    passwordLength.value--;
    lengthValue.innerHTML = passwordLength.value;
}

passwordLength.oninput = function() {
    lengthValue.innerHTML = passwordLength.value;
}

lengthPlusBtn.onclick = function() {
    passwordLength.value++;
    lengthValue.innerHTML = passwordLength.value;
}


generatePasswordBtn.onclick = function () {
    generatePassword();
}
