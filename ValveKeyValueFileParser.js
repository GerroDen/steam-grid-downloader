const fs = require("fs");
const antlr4 = require("antlr4");
const { ValveKeyValueFileFormatLexer } = require("./ValveKeyValueFileFormat/ValveKeyValueFileFormatLexer");
const { ValveKeyValueFileFormatParser } = require("./ValveKeyValueFileFormat/ValveKeyValueFileFormatParser");

class Visitor {
    visitChildren(ctx) {
        if (ctx instanceof ValveKeyValueFileFormatParser.ValveKeyValueFileFormatContext) {
            const rootPair = ctx.children.map((child) => child.accept(this));
            return Object.fromEntries(rootPair);
        }
        if (ctx instanceof ValveKeyValueFileFormatParser.PairContext) {
            return ctx.children.map((child) => child.accept(this));
        }
        if (ctx instanceof ValveKeyValueFileFormatParser.KeyContext) {
            return ctx.getText().replace(/^"|"$/g, "");
        }
        if (ctx instanceof ValveKeyValueFileFormatParser.ValueContext) {
            const value = ctx.children[0];
            return value.accept(this);
        }
        if (ctx instanceof ValveKeyValueFileFormatParser.ObjectContext) {
            const pairs = ctx.children
                .slice(1, -1)
                .map((child) => child.accept(this));
            return Object.fromEntries(pairs);
        }
    }
    visitTerminal(ctx) {
        return ctx.getText();
    }
    visitErrorNode(ctx) {
        return [];
    }
}

function parseFile(filename) {
    const input = fs.readFileSync(filename, { encoding: "utf-8" }).replace(/[^\x00-\x7F]/g, "");
    const chars = new antlr4.InputStream(input);
    const lexer = new ValveKeyValueFileFormatLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ValveKeyValueFileFormatParser(tokens);
    const tree = parser.valveKeyValueFileFormat();
    return tree.accept(new Visitor());
}

module.exports = {
    parseFile
};
