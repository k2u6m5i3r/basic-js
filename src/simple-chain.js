const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    ans: [],
    getLength() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.ans.length;
    },
    addLink(value) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here

        this.ans.push("" + value);
        return this;
    },
    removeLink(position) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (position > 0 && position < this.ans.length && !isNaN(position)) {
            this.ans.splice(position - 1, 1);
        } else {
            this.ans.length = 0;
            throw new Error('You can\'t remove incorrect link!')
        }
        return this;
    },
    reverseChain() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.ans = this.ans.reverse();
        return this;
    },
    finishChain() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let tempStr = `( ${this.ans.join(' )~~( ')} )`
        this.ans.length = 0;
        return tempStr;
    }
};

module.exports = {
    chainMaker
};
