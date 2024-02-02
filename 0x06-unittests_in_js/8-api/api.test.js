const request = require('request');
const assert = require('assert');

describe('Index Page', function() {
  const apiUrl = 'http://localhost:7865';
  it('should return correct status code and result', function(done) {
    request.get(apiUrl, function(error, response, body) {
      assert.strictEqual(error, null);

      assert.strictEqual(response.statusCode, 200);

      assert.strictEqual(body, 'Welcome to the payment system');

      done();
    });
  });
});

