"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function random(lower, upper) {
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}
class RangeGenerator {
    constructor(lower, upper) {
        this.lower = lower;
        this.upper = upper;
    }
    take(count) {
        if (this.lower == this.upper) {
            return [];
        }
        count = Math.min(count, 100);
        const last = this.upper - this.lower;
        let i = 0;
        const array = [];
        const map = {};
        while (i < count) {
            const pick = random(i, last);
            if (map[pick] != null) {
                array[i] = map[pick] + this.lower;
            }
            else {
                array[i] = pick + this.lower;
            }
            if (map[i] != null) {
                map[pick] = map[i];
                delete map[i];
            }
            else {
                map[pick] = i;
            }
            i++;
            if (i == last + 1)
                break;
        }
        return array;
    }
}
exports.default = RangeGenerator;
//# sourceMappingURL=RangeGenerator.js.map