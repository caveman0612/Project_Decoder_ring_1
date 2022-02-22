// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function _substitutionencode(input, alphabet, stdAlphabet) {
    return input
      .map((item) => {
        if (item === " ") return item;
        const index = stdAlphabet.indexOf(item);
        return alphabet[index];
      })
      .join("");
  }

  function _substitutionDecode(input, alphabet, stdAlphabet) {
    return input
      .map((item) => {
        if (item === " ") return item;
        const index = alphabet.indexOf(item);
        return stdAlphabet[index];
      })
      .join("");
  }

  function substitution(input, alphabet, encode = true) {
    const set = new Set(alphabet);
    if (set.size !== 26) return false;
    input = [...input.toLowerCase()];
    stdAlphabet = "abcdefghijklmnopqrstuvwxyz";
    return encode
      ? _substitutionencode(input, alphabet, stdAlphabet)
      : _substitutionDecode(input, alphabet, stdAlphabet);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
