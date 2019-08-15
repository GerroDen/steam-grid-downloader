// Generated from ValveKeyValueFileFormat/ValveKeyValueFileFormat.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0006%\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004\u0015\n\u0004\f\u0004\u000e\u0004\u0018\u000b\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006",
    " \n\u0006\r\u0006\u000e\u0006!\u0003\u0006\u0003\u0006\u0003\u0016\u0002",
    "\u0007\u0003\u0003\u0005\u0004\u0007\u0005\t\u0002\u000b\u0006\u0003",
    "\u0002\u0004\u0004\u0002\f\f\u000f\u000f\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002&\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0003\r\u0003\u0002\u0002\u0002\u0005\u000f\u0003\u0002",
    "\u0002\u0002\u0007\u0011\u0003\u0002\u0002\u0002\t\u001b\u0003\u0002",
    "\u0002\u0002\u000b\u001f\u0003\u0002\u0002\u0002\r\u000e\u0007}\u0002",
    "\u0002\u000e\u0004\u0003\u0002\u0002\u0002\u000f\u0010\u0007\u007f\u0002",
    "\u0002\u0010\u0006\u0003\u0002\u0002\u0002\u0011\u0016\u0007$\u0002",
    "\u0002\u0012\u0015\u0005\t\u0005\u0002\u0013\u0015\n\u0002\u0002\u0002",
    "\u0014\u0012\u0003\u0002\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002",
    "\u0015\u0018\u0003\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002",
    "\u0016\u0014\u0003\u0002\u0002\u0002\u0017\u0019\u0003\u0002\u0002\u0002",
    "\u0018\u0016\u0003\u0002\u0002\u0002\u0019\u001a\u0007$\u0002\u0002",
    "\u001a\b\u0003\u0002\u0002\u0002\u001b\u001c\u0007^\u0002\u0002\u001c",
    "\u001d\u0007$\u0002\u0002\u001d\n\u0003\u0002\u0002\u0002\u001e \t\u0003",
    "\u0002\u0002\u001f\u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002",
    "\u0002!\u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"#",
    "\u0003\u0002\u0002\u0002#$\b\u0006\u0002\u0002$\f\u0003\u0002\u0002",
    "\u0002\u0006\u0002\u0014\u0016!\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ValveKeyValueFileFormatLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ValveKeyValueFileFormatLexer.prototype = Object.create(antlr4.Lexer.prototype);
ValveKeyValueFileFormatLexer.prototype.constructor = ValveKeyValueFileFormatLexer;

Object.defineProperty(ValveKeyValueFileFormatLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ValveKeyValueFileFormatLexer.EOF = antlr4.Token.EOF;
ValveKeyValueFileFormatLexer.T__0 = 1;
ValveKeyValueFileFormatLexer.T__1 = 2;
ValveKeyValueFileFormatLexer.STRING = 3;
ValveKeyValueFileFormatLexer.WS = 4;

ValveKeyValueFileFormatLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ValveKeyValueFileFormatLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ValveKeyValueFileFormatLexer.prototype.literalNames = [ null, "'{'", "'}'" ];

ValveKeyValueFileFormatLexer.prototype.symbolicNames = [ null, null, null, 
                                                         "STRING", "WS" ];

ValveKeyValueFileFormatLexer.prototype.ruleNames = [ "T__0", "T__1", "STRING", 
                                                     "ESCAPED_QUOTE", "WS" ];

ValveKeyValueFileFormatLexer.prototype.grammarFileName = "ValveKeyValueFileFormat.g4";



exports.ValveKeyValueFileFormatLexer = ValveKeyValueFileFormatLexer;

