"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class ElementGenerator {
    constructor(elems) {
        this.elems = elems;
    }
    take(count) {
        return lodash_1.sampleSize(this.elems, count);
    }
}
exports.default = ElementGenerator;
//# sourceMappingURL=ElementGenerator.js.map