// Generated from Random.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RandomParser.

function RandomVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RandomVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RandomVisitor.prototype.constructor = RandomVisitor;

// Visit a parse tree produced by RandomParser#request.
RandomVisitor.prototype.visitRequest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RandomParser#single.
RandomVisitor.prototype.visitSingle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RandomParser#take.
RandomVisitor.prototype.visitTake = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RandomParser#limit.
RandomVisitor.prototype.visitLimit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RandomParser#range.
RandomVisitor.prototype.visitRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RandomParser#pick.
RandomVisitor.prototype.visitPick = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RandomParser#number.
RandomVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RandomParser#elem.
RandomVisitor.prototype.visitElem = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RandomVisitor = RandomVisitor;