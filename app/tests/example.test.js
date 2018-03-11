"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==========
// ===== imports
// ==========
const chai = require("chai");
const assert = chai.assert;
// ===========
// ===== models
// ===========
function addNumber(num1, num2) {
    return num1 + num2;
}
describe('addNumber', () => {
    before((done) => {
        done();
    });
    beforeEach((done) => {
        done();
    });
    it('should return 2 if num1=1 and num2=1 ', () => {
        //init
        //action
        const result = addNumber(1, 1);
        //asset
        assert.equal(result, 2);
    });
});
//# sourceMappingURL=example.test.js.map