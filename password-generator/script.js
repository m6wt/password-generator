let mix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A",
"B", "C","D", "E", "F", "G", "H", "I", "J","K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
"W", "X", "Y", "Z", "q", "w", "e", "r", "t", "y", "u",
"i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k",
"l", "z", "x", "c", "v", "b", "n", "m", ";","'", ",",
".", "/", "?", "[", "]", "{", "}", "|", "`", "~", "!",
"@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
"=", "+"]
let passwordLength = 12

function generatePassword(mix, length) {
    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * mix.length)
        password += mix[randomIndex]
    }
    return password
}

let genBtn = document.getElementById("gen-btn")
let passwordBox = document.getElementById("password-box")

genBtn.addEventListener("click", function() {
    const password = generatePassword(mix, passwordLength)
    passwordBox.textContent = password
})








