// ==========
// ===== imports
// ==========
import * as chai from 'chai';
const assert = chai.assert;
import * as config from 'config';
// ===========
// ===== models
// ===========

function addNumber(num1: number, num2: number) {
    return num1 + num2;
}

describe('addNumber', () => {
    before((done) => {

        done();
    })
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

