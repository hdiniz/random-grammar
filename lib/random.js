"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
function random(request) {
    const parser = new parser_1.RequestParser();
    const parseResult = parser.parse(request);
    return parseResult.generator.take(parseResult.count);
}
exports.random = random;
//# sourceMappingURL=random.js.map