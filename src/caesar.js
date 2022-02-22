// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function _takesSymbolAndShiftReturnsString(symbol, shift) {
    //setting variables
    const lowAValue = "a".charCodeAt(0);
    const lowZValue = "z".charCodeAt(0);
    const value = symbol.charCodeAt(0);
    let shiftedValue = value + shift;
    //return anything that is not a letter back unchanged
    if (value < lowAValue || value > lowZValue) return symbol;
    // if shifted is inside a - z range just return shifted value
    if (shiftedValue >= lowAValue && shiftedValue <= lowZValue) {
      return String.fromCharCode(shiftedValue);
    } else {
      if (shiftedValue < lowAValue) {
        //if shifted is lower then a find differance and subtract from z index
        const diff = lowAValue - shiftedValue;
        shiftedValue = lowZValue - diff + 1;
        return String.fromCharCode(shiftedValue);
      } else if (shiftedValue > lowZValue) {
        //if shifted is higher then z find difference and add to a index
        const diff = shiftedValue - lowZValue;
        shiftedValue = lowAValue + diff - 1;
        return String.fromCharCode(shiftedValue);
      }
    }
  }

  function caesar(input, shift, encode = true) {
    //invert shift for decoding
    if (!encode) shift *= -1;
    if (shift === 0 || shift < -25 || shift > 25 || !shift) return false;
    // set input as array and make all lower case
    const inputArray = [...input.toLowerCase()];
    // map over array and return shifted letters
    const caesarArray = inputArray.map((symbol) => {
      return _takesSymbolAndShiftReturnsString(symbol, shift);
    });
    return caesarArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
