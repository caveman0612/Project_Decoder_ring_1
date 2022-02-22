// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caeser cyper", () => {
  it("thinkful shift by 3", () => {
    const actual = caesar("thinkful", 3);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });

  it("thinkful shift by -3", () => {
    const actual = caesar("thinkful", -3);
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });

  it("qefkhcri and decode by -3", () => {
    const actual = caesar("qefkhcri", -3, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });

  it("encode 'This is a secret message!' and shift by 8", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });

  it("decode 'This is a secret message!' and shift by 8", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });

  it("return false if not inlucding shift", () => {
    const actual = caesar("thinkful");
    expect(actual).to.be.false;
  });
  it("return false if shift over 25 ", () => {
    const actual = caesar("thinkful", 26);
    expect(actual).to.be.false;
  });
  it("return false if shift is under -25", () => {
    const actual = caesar("thinkful", -26);
    expect(actual).to.be.false;
  });
});
