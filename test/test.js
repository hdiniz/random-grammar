const assert = require("chai").assert;
const { Parser, ElementGenerator, RangeGenerator } = require('../lib');

function parse(input) {
  const parser = new Parser();
  return parser.parse(input);
}

describe("request parser", function() {
  it("a,b", function() {
    const result = parse(this.test.title);
    assert.equal(result.count, 1);
    assert.instanceOf(result.generator, ElementGenerator);
    assert.deepEqual(result.generator.elems, ['a', 'b']);
  });
  it("(1, 10)", function() {
    const result = parse(this.test.title);
    assert.equal(result.count, 1);
    assert.instanceOf(result.generator, RangeGenerator);
    assert.equal(result.generator.lower, 2);
    assert.equal(result.generator.upper, 9);
  });
  it("take 2 from a,b", function() {
    const result = parse(this.test.title);
    assert.equal(result.count, 2);
    assert.instanceOf(result.generator, ElementGenerator);
    assert.deepEqual(result.generator.elems, ['a', 'b']);
  });
  it("take 1 from 1,2,3", function() {
    const result = parse(this.test.title);
    assert.equal(result.count, 1);
    assert.instanceOf(result.generator, ElementGenerator);
    assert.deepEqual(result.generator.elems, ['1', '2', '3']);
  });
  it("take 2 from (1, 10)", function() {
    const result = parse(this.test.title);
    assert.equal(result.count, 2);
    assert.instanceOf(result.generator, RangeGenerator);
    assert.equal(result.generator.lower, 2);
    assert.equal(result.generator.upper, 9);
  });
  it("take 2 from (1, 10]", function() {
    const result = parse(this.test.title);
    assert.equal(result.count, 2);
    assert.instanceOf(result.generator, RangeGenerator);
    assert.equal(result.generator.lower, 2);
    assert.equal(result.generator.upper, 10);
  });
  it("take 2 from [1, 10)", function() {
    const result = parse(this.test.title);
    assert.equal(result.count, 2);
    assert.instanceOf(result.generator, RangeGenerator);
    assert.equal(result.generator.lower, 1);
    assert.equal(result.generator.upper, 9);
  });
  it("take 2 from [1, 10]", function() {
    const result = parse(this.test.title);
    assert.equal(result.count, 2);
    assert.instanceOf(result.generator, RangeGenerator);
    assert.equal(result.generator.lower, 1);
    assert.equal(result.generator.upper, 10);
  });
  it("take 2 from [9, 9]", function() {
    const result = parse(this.test.title);
    assert.equal(result.generator.take(result.count).length, 0);
  });
});

describe("request parser exception", function() {
  it("a b", function() {
      assert.throws(() => parse(this.test.title));
  });
  it("(1, b)", function() {
      assert.throws(() => parse(this.test.title));
  });
  it("take 2 from [10, 9]", function() {
    assert.throws(() => parse(this.test.title));
  });
  it("take 2 from [9, a]", function() {
    assert.throws(() => parse(this.test.title));
  });
  it("take a from a,b,c", function() {
    assert.throws(() => parse(this.test.title));
  });
});
