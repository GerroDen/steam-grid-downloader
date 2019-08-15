// Generated from ValveKeyValueFileFormat/ValveKeyValueFileFormat.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "ValveKeyValueFileFormat.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0006 \u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0005\u0005\u0016\n\u0005\u0003\u0006\u0003\u0006\u0006",
    "\u0006\u001a\n\u0006\r\u0006\u000e\u0006\u001b\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0002\u0002",
    "\u001c\u0002\f\u0003\u0002\u0002\u0002\u0004\u000e\u0003\u0002\u0002",
    "\u0002\u0006\u0011\u0003\u0002\u0002\u0002\b\u0015\u0003\u0002\u0002",
    "\u0002\n\u0017\u0003\u0002\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r",
    "\u0003\u0003\u0002\u0002\u0002\u000e\u000f\u0005\u0006\u0004\u0002\u000f",
    "\u0010\u0005\b\u0005\u0002\u0010\u0005\u0003\u0002\u0002\u0002\u0011",
    "\u0012\u0007\u0005\u0002\u0002\u0012\u0007\u0003\u0002\u0002\u0002\u0013",
    "\u0016\u0007\u0005\u0002\u0002\u0014\u0016\u0005\n\u0006\u0002\u0015",
    "\u0013\u0003\u0002\u0002\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016",
    "\t\u0003\u0002\u0002\u0002\u0017\u0019\u0007\u0003\u0002\u0002\u0018",
    "\u001a\u0005\u0004\u0003\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a",
    "\u001b\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d",
    "\u001e\u0007\u0004\u0002\u0002\u001e\u000b\u0003\u0002\u0002\u0002\u0004",
    "\u0015\u001b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'}'" ];

var symbolicNames = [ null, null, null, "STRING", "WS" ];

var ruleNames =  [ "valveKeyValueFileFormat", "pair", "key", "value", "object" ];

function ValveKeyValueFileFormatParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ValveKeyValueFileFormatParser.prototype = Object.create(antlr4.Parser.prototype);
ValveKeyValueFileFormatParser.prototype.constructor = ValveKeyValueFileFormatParser;

Object.defineProperty(ValveKeyValueFileFormatParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ValveKeyValueFileFormatParser.EOF = antlr4.Token.EOF;
ValveKeyValueFileFormatParser.T__0 = 1;
ValveKeyValueFileFormatParser.T__1 = 2;
ValveKeyValueFileFormatParser.STRING = 3;
ValveKeyValueFileFormatParser.WS = 4;

ValveKeyValueFileFormatParser.RULE_valveKeyValueFileFormat = 0;
ValveKeyValueFileFormatParser.RULE_pair = 1;
ValveKeyValueFileFormatParser.RULE_key = 2;
ValveKeyValueFileFormatParser.RULE_value = 3;
ValveKeyValueFileFormatParser.RULE_object = 4;

function ValveKeyValueFileFormatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValveKeyValueFileFormatParser.RULE_valveKeyValueFileFormat;
    return this;
}

ValveKeyValueFileFormatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValveKeyValueFileFormatContext.prototype.constructor = ValveKeyValueFileFormatContext;

ValveKeyValueFileFormatContext.prototype.pair = function() {
    return this.getTypedRuleContext(PairContext,0);
};




ValveKeyValueFileFormatParser.ValveKeyValueFileFormatContext = ValveKeyValueFileFormatContext;

ValveKeyValueFileFormatParser.prototype.valveKeyValueFileFormat = function() {

    var localctx = new ValveKeyValueFileFormatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ValveKeyValueFileFormatParser.RULE_valveKeyValueFileFormat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.pair();
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

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValveKeyValueFileFormatParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.key = function() {
    return this.getTypedRuleContext(KeyContext,0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};




ValveKeyValueFileFormatParser.PairContext = PairContext;

ValveKeyValueFileFormatParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ValveKeyValueFileFormatParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.key();
        this.state = 13;
        this.value();
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

function KeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValveKeyValueFileFormatParser.RULE_key;
    return this;
}

KeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyContext.prototype.constructor = KeyContext;

KeyContext.prototype.STRING = function() {
    return this.getToken(ValveKeyValueFileFormatParser.STRING, 0);
};




ValveKeyValueFileFormatParser.KeyContext = KeyContext;

ValveKeyValueFileFormatParser.prototype.key = function() {

    var localctx = new KeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ValveKeyValueFileFormatParser.RULE_key);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this.match(ValveKeyValueFileFormatParser.STRING);
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValveKeyValueFileFormatParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(ValveKeyValueFileFormatParser.STRING, 0);
};

ValueContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};




ValveKeyValueFileFormatParser.ValueContext = ValueContext;

ValveKeyValueFileFormatParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ValveKeyValueFileFormatParser.RULE_value);
    try {
        this.state = 19;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ValveKeyValueFileFormatParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 17;
            this.match(ValveKeyValueFileFormatParser.STRING);
            break;
        case ValveKeyValueFileFormatParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 18;
            this.object();
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

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValveKeyValueFileFormatParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};




ValveKeyValueFileFormatParser.ObjectContext = ObjectContext;

ValveKeyValueFileFormatParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ValveKeyValueFileFormatParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this.match(ValveKeyValueFileFormatParser.T__0);
        this.state = 23; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 22;
            this.pair();
            this.state = 25; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ValveKeyValueFileFormatParser.STRING);
        this.state = 27;
        this.match(ValveKeyValueFileFormatParser.T__1);
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


exports.ValveKeyValueFileFormatParser = ValveKeyValueFileFormatParser;
