function generatePassword() {
    // Retrieve user inputs
    const length = document.getElementById('length').value;
    const uppercaseCheckbox = document.getElementById('uppercase').checked;
    const lowercaseCheckbox = document.getElementById('lowercase').checked;
    const specialchar = document.getElementById('specialchar').checked;

    // Defenir os sets de caracteres
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Juntar os caracteres selecionados
    let allChars = '';
    if (uppercaseCheckbox) allChars += uppercase;
    if (lowercaseCheckbox) allChars += lowercase;
    if (specialchar) allChars += specialChars;

    // Gerar password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    // Enviar a password gerada para o h1 
    const generatedPasswordElement = document.getElementById('generated-password');
    generatedPasswordElement.innerText = password;
}