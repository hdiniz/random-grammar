// Generated from Random.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RandomVisitor = require('./RandomVisitor').RandomVisitor;

var grammarFileName = "Random.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u00101\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u0011\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005$\n\u0005\r\u0005\u000e",
    "\u0005%\u0005\u0005(\n\u0005\u0003\u0006\u0005\u0006+\n\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0002\b",
    "\u0002\u0004\u0006\b\n\f\u0002\u0003\u0003\u0002\u000e\u000f/\u0002",
    "\u0010\u0003\u0002\u0002\u0002\u0004\u0012\u0003\u0002\u0002\u0002\u0006",
    "\u0014\u0003\u0002\u0002\u0002\b\'\u0003\u0002\u0002\u0002\n*\u0003",
    "\u0002\u0002\u0002\f.\u0003\u0002\u0002\u0002\u000e\u0011\u0005\u0004",
    "\u0003\u0002\u000f\u0011\u0005\u0006\u0004\u0002\u0010\u000e\u0003\u0002",
    "\u0002\u0002\u0010\u000f\u0003\u0002\u0002\u0002\u0011\u0003\u0003\u0002",
    "\u0002\u0002\u0012\u0013\u0005\b\u0005\u0002\u0013\u0005\u0003\u0002",
    "\u0002\u0002\u0014\u0015\u0007\u0004\u0002\u0002\u0015\u0016\u0007\u000e",
    "\u0002\u0002\u0016\u0017\u0007\u0005\u0002\u0002\u0017\u0018\u0005\b",
    "\u0005\u0002\u0018\u0007\u0003\u0002\u0002\u0002\u0019(\u0007\u000e",
    "\u0002\u0002\u001a\u001b\u0007\u0006\u0002\u0002\u001b\u001c\u0005\n",
    "\u0006\u0002\u001c\u001d\u0007\f\u0002\u0002\u001d\u001e\u0005\n\u0006",
    "\u0002\u001e\u001f\u0007\u0007\u0002\u0002\u001f(\u0003\u0002\u0002",
    "\u0002 #\u0005\f\u0007\u0002!\"\u0007\f\u0002\u0002\"$\u0005\f\u0007",
    "\u0002#!\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%#\u0003\u0002",
    "\u0002\u0002%&\u0003\u0002\u0002\u0002&(\u0003\u0002\u0002\u0002\'\u0019",
    "\u0003\u0002\u0002\u0002\'\u001a\u0003\u0002\u0002\u0002\' \u0003\u0002",
    "\u0002\u0002(\t\u0003\u0002\u0002\u0002)+\u0007\u0003\u0002\u0002*)",
    "\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,-\u0007\u000e\u0002\u0002-\u000b\u0003\u0002\u0002\u0002./\t",
    "\u0002\u0002\u0002/\r\u0003\u0002\u0002\u0002\u0006\u0010%\'*"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'take'", "'from'", null, null, "'('", 
                     "')'", "'['", "']'", "','", null, null, null, "' '" ];

var symbolicNames = [ null, "UNARY", "TAKE", "FROM", "LENCL", "RENCL", "LPAREN", 
                      "RPAREN", "LBRACKET", "RBRACKET", "COMMA", "WS", "INTEGER", 
                      "ELEM", "SP" ];

var ruleNames =  [ "request", "single", "take", "space", "number", "elem" ];

function RandomParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RandomParser.prototype = Object.create(antlr4.Parser.prototype);
RandomParser.prototype.constructor = RandomParser;

Object.defineProperty(RandomParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RandomParser.EOF = antlr4.Token.EOF;
RandomParser.UNARY = 1;
RandomParser.TAKE = 2;
RandomParser.FROM = 3;
RandomParser.LENCL = 4;
RandomParser.RENCL = 5;
RandomParser.LPAREN = 6;
RandomParser.RPAREN = 7;
RandomParser.LBRACKET = 8;
RandomParser.RBRACKET = 9;
RandomParser.COMMA = 10;
RandomParser.WS = 11;
RandomParser.INTEGER = 12;
RandomParser.ELEM = 13;
RandomParser.SP = 14;

RandomParser.RULE_request = 0;
RandomParser.RULE_single = 1;
RandomParser.RULE_take = 2;
RandomParser.RULE_space = 3;
RandomParser.RULE_number = 4;
RandomParser.RULE_elem = 5;

function RequestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RandomParser.RULE_request;
    return this;
}

RequestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RequestContext.prototype.constructor = RequestContext;

RequestContext.prototype.single = function() {
    return this.getTypedRuleContext(SingleContext,0);
};

RequestContext.prototype.take = function() {
    return this.getTypedRuleContext(TakeContext,0);
};

RequestContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RandomVisitor ) {
        return visitor.visitRequest(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RandomParser.RequestContext = RequestContext;

RandomParser.prototype.request = function() {

    var localctx = new RequestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RandomParser.RULE_request);
    try {
        this.state = 14;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RandomParser.LENCL:
        case RandomParser.INTEGER:
        case RandomParser.ELEM:
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            this.single();
            break;
        case RandomParser.TAKE:
            this.enterOuterAlt(localctx, 2);
            this.state = 13;
            this.take();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SingleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RandomParser.RULE_single;
    return this;
}

SingleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleContext.prototype.constructor = SingleContext;

SingleContext.prototype.space = function() {
    return this.getTypedRuleContext(SpaceContext,0);
};

SingleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RandomVisitor ) {
        return visitor.visitSingle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RandomParser.SingleContext = SingleContext;

RandomParser.prototype.single = function() {

    var localctx = new SingleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RandomParser.RULE_single);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.space();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TakeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RandomParser.RULE_take;
    this.count = null; // Token
    return this;
}

TakeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TakeContext.prototype.constructor = TakeContext;

TakeContext.prototype.TAKE = function() {
    return this.getToken(RandomParser.TAKE, 0);
};

TakeContext.prototype.FROM = function() {
    return this.getToken(RandomParser.FROM, 0);
};

TakeContext.prototype.space = function() {
    return this.getTypedRuleContext(SpaceContext,0);
};

TakeContext.prototype.INTEGER = function() {
    return this.getToken(RandomParser.INTEGER, 0);
};

TakeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RandomVisitor ) {
        return visitor.visitTake(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RandomParser.TakeContext = TakeContext;

RandomParser.prototype.take = function() {

    var localctx = new TakeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RandomParser.RULE_take);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(RandomParser.TAKE);
        this.state = 19;
        localctx.count = this.match(RandomParser.INTEGER);
        this.state = 20;
        this.match(RandomParser.FROM);
        this.state = 21;
        this.space();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SpaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RandomParser.RULE_space;
    return this;
}

SpaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpaceContext.prototype.constructor = SpaceContext;


 
SpaceContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PickContext(parser, ctx) {
	SpaceContext.call(this, parser);
    SpaceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PickContext.prototype = Object.create(SpaceContext.prototype);
PickContext.prototype.constructor = PickContext;

RandomParser.PickContext = PickContext;

PickContext.prototype.elem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElemContext);
    } else {
        return this.getTypedRuleContext(ElemContext,i);
    }
};

PickContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RandomParser.COMMA);
    } else {
        return this.getToken(RandomParser.COMMA, i);
    }
};

PickContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RandomVisitor ) {
        return visitor.visitPick(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LimitContext(parser, ctx) {
	SpaceContext.call(this, parser);
    SpaceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LimitContext.prototype = Object.create(SpaceContext.prototype);
LimitContext.prototype.constructor = LimitContext;

RandomParser.LimitContext = LimitContext;

LimitContext.prototype.INTEGER = function() {
    return this.getToken(RandomParser.INTEGER, 0);
};
LimitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RandomVisitor ) {
        return visitor.visitLimit(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RangeContext(parser, ctx) {
	SpaceContext.call(this, parser);
    this.l = null; // Token;
    this.lower = null; // NumberContext;
    this.upper = null; // NumberContext;
    this.r = null; // Token;
    SpaceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RangeContext.prototype = Object.create(SpaceContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RandomParser.RangeContext = RangeContext;

RangeContext.prototype.COMMA = function() {
    return this.getToken(RandomParser.COMMA, 0);
};

RangeContext.prototype.LENCL = function() {
    return this.getToken(RandomParser.LENCL, 0);
};

RangeContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

RangeContext.prototype.RENCL = function() {
    return this.getToken(RandomParser.RENCL, 0);
};
RangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RandomVisitor ) {
        return visitor.visitRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RandomParser.SpaceContext = SpaceContext;

RandomParser.prototype.space = function() {

    var localctx = new SpaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RandomParser.RULE_space);
    var _la = 0; // Token type
    try {
        this.state = 37;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            localctx = new LimitContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this.match(RandomParser.INTEGER);
            break;

        case 2:
            localctx = new RangeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 24;
            localctx.l = this.match(RandomParser.LENCL);
            this.state = 25;
            localctx.lower = this.number();
            this.state = 26;
            this.match(RandomParser.COMMA);
            this.state = 27;
            localctx.upper = this.number();
            this.state = 28;
            localctx.r = this.match(RandomParser.RENCL);
            break;

        case 3:
            localctx = new PickContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 30;
            this.elem();
            this.state = 33; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 31;
                this.match(RandomParser.COMMA);
                this.state = 32;
                this.elem();
                this.state = 35; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===RandomParser.COMMA);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RandomParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INTEGER = function() {
    return this.getToken(RandomParser.INTEGER, 0);
};

NumberContext.prototype.UNARY = function() {
    return this.getToken(RandomParser.UNARY, 0);
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RandomVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RandomParser.NumberContext = NumberContext;

RandomParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RandomParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RandomParser.UNARY) {
            this.state = 39;
            this.match(RandomParser.UNARY);
        }

        this.state = 42;
        this.match(RandomParser.INTEGER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RandomParser.RULE_elem;
    return this;
}

ElemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElemContext.prototype.constructor = ElemContext;

ElemContext.prototype.ELEM = function() {
    return this.getToken(RandomParser.ELEM, 0);
};

ElemContext.prototype.INTEGER = function() {
    return this.getToken(RandomParser.INTEGER, 0);
};

ElemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RandomVisitor ) {
        return visitor.visitElem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RandomParser.ElemContext = ElemContext;

RandomParser.prototype.elem = function() {

    var localctx = new ElemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RandomParser.RULE_elem);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        _la = this._input.LA(1);
        if(!(_la===RandomParser.INTEGER || _la===RandomParser.ELEM)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RandomParser = RandomParser;
