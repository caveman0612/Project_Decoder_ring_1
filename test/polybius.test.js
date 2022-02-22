// Write your tests here!

const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybuis.test", () => {
  it("encode thinkful", () => {
    const actual = polybius("thinkful");
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });

  it("encode hello world with space", () => {
    const actual = polybius("Hello world");
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

  it("decode and input without space is not even return false", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });

  it("decode and to hello world", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });

  it("decode to th(i/j)nkful", () => {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.equal(expected);
  });
});
