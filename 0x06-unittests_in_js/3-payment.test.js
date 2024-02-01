const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with correct arguments and log the result', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    // Ensure that calculateNumber was called with the correct arguments
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);

    // Restore the original function to avoid affecting other tests
    calculateNumberSpy.restore();
  });
});
