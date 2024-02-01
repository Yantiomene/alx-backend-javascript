// 5-payment.test.js

const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('should log correct message and be called once with 100 and 20', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');

    sinon.assert.calledOnce(consoleLogSpy);

    calculateNumberStub.restore();
  });

  it('should log correct message and be called once with 10 and 10', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');

    sinon.assert.calledOnce(consoleLogSpy);

    calculateNumberStub.restore();
  });
});
