const palindromes = (string) => {
    const punctuationChars = " !@#$%^&*()_+-=[]{};':\"\\|,.<>?/";
    const charList = string.split("")
                            .filter(c => !punctuationChars.includes(c))
                            .map(c => c.toLowerCase());
    return charList.join("") == charList.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
