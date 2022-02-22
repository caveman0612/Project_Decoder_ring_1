// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests", () => {
  it("should encode thinkful", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });

  it("should encode something with spaces", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });

  it("should encode with key with symbols", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);
  });

  it("should return false alphabet to short", () => {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });

  it("should return false ", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });

  it("should decode to thinkful", () => {
    const actual = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });

  it("should decode to with spaces", () => {
    const actual = substitution(
      "elp xhm xf mbymwwmfj dne",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "you are an excellent spy";
    expect(actual).to.equal(expected);
  });

  it("should decode to with symbols", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    expect(actual).to.equal(expected);
  });
});
