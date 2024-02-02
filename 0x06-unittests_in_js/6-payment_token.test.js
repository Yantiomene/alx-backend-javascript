const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with successful response when success is true', function(done) {

    getPaymentTokenFromAPI(true)
      .then(result => {
        assert.deepStrictEqual(result, { data: 'Successful response from the API' });
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
