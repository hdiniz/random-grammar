const antlr4 = require('antlr4');
const { RandomLexer } = require('../generated/RandomLexer');
const { RandomParser } = require('../generated/RandomParser');
const { RandomVisitor } = require('../generated/RandomVisitor');
const { Generator, ElementGenerator, RangeGenerator } = require('../generators')

function treeBuilder(input) {
  const stream = new antlr4.InputStream(input);
  const lexer = new RandomLexer(stream);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new RandomParser(tokens);
  const errorListener = new RequestErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);
  const tree = parser.request();

  if (errorListener.error != null) {
    throw errorListener.error;
  }

  return tree;
}

class RequestErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.error = null;
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.error = new Error(msg);
  }
}

export class RequestParser extends RandomVisitor {

  constructor() {
    super();
  }

  parse(input) {
    const tree = treeBuilder(input);
    return this.visitRequest(tree)[0];
  }

  visitSingle(ctx) {
    this.count = 1;
    const generator = this.visit(ctx.space());
    return {
      count: 1,
      generator: generator
    };
  }

  visitTake(ctx) {
    const count = parseInt(ctx.count.text);
    this.count = count;
    const generator = this.visit(ctx.space());
    return {
      count: count,
      generator: generator
    };
  }

  visitPick(ctx) {
    const elemsCtx = ctx.elem();
    const elems = [];
    for (let i = 0; i < elemsCtx.length; i++) {
      elems.push(this.visitElem(elemsCtx[i]));
    }
    return new ElementGenerator(elems);
  }

  visitElem(ctx) {
    const elem = ctx.getText();
    return elem;
  }

  visitRange(ctx) {

    let lower = parseInt(ctx.lower.getText());
    let upper = parseInt(ctx.upper.getText());

    if (lower == NaN || upper == NaN) {
      throw new Error(`invalid range lower=${ctx.lower.getText()} > upper=${ctx.upper.getText()}`);
    }

    lower = ctx.l.text == '[' ? lower : lower + 1;
    upper = ctx.r.text == ']' ? upper : upper - 1

    if (lower > upper) {
      throw new Error(`invalid range lower=${lower} > upper=${upper}`);
    }

    return new RangeGenerator(lower, upper);
  }

  visitLimit(ctx) {
    let limit = parseInt(ctx.getText());
    if (limit == NaN || limit < 0) {
      throw new Error(`invalid range limit=${ctx.getText()}`);
    }

    return new RangeGenerator(0, limit);
  }

}
