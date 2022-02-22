// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function _polybuisDecode(input, polybuisSquare) {
    const splitInput = input.split(" ");
    //checking if input without spaces is even
    const withoutSpace = splitInput.join("");
    if (withoutSpace.length % 2 !== 0) return false;
    // going through split input and coverting to leters
    const decoded = splitInput.reduce((acc, item) => {
      let value = [];
      //using a for loop to go two by two to convert to string
      for (let i = 0; i < item.length; i += 2) {
        const first = item[i];
        const second = item[i + 1];
        //using math to find the index of where the letter would be in my flat ploybuis square
        const polybuisIndex = parseInt(5 * (second - 1) + (first - 1));
        if (`${first}${second}` === "42") {
          value.push(`(${polybuisSquare[polybuisIndex]})`);
        } else {
          value.push(polybuisSquare[polybuisIndex]);
        }
      }
      // at joined array to acc and return it. This will make an array of words from the array of numbers
      acc.push(value.join(""));
      return acc;
    }, []);
    //added the spaces back and convert everything to lowercase
    return decoded.join(" ").toLowerCase();
  }

  function _polybuisEncode(input, polybuisSquare) {
    //convert string to an array of uppercase
    const inputArray = [...input.toUpperCase()];
    //map over array to convert the letters to numbers without touching spaces
    return inputArray
      .map((letter) => {
        //skip spaces
        if (letter === " ") return letter;
        //find index of letter in my flat polybuis square
        const index = polybuisSquare.findIndex((let) => {
          return let.includes(letter);
        });
        // convery index to what the grid numbers would look like using math
        const first = (index % 5) + 1;
        const second = Math.floor(index / 5) + 1;
        return `${first}${second}`;
      })
      .join("");
  }

  function polybius(input, encode = true) {
    //flat polybuis square
    const polybuisSquare = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I/J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    //encode input to array loop through and convert to number
    return encode
      ? _polybuisEncode(input, polybuisSquare)
      : _polybuisDecode(input, polybuisSquare);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
