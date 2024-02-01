const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function() {
  it('should stub calculateNumber and log the correct message', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Ensure that calculateNumber was called with the correct arguments
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);

    // Ensure that console.log was called with the correct message
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');

    // Restore the original functions to avoid interfering with other tests
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
