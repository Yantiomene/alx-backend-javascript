const request = require('request');
const assert = require('assert');
const apiUrl = 'http://localhost:7865';

describe('Index Page', function() {
  it('should return correct status code and result', function(done) {
    request.get(apiUrl, function(error, response, body) {
      assert.strictEqual(error, null);

      assert.strictEqual(response.statusCode, 200);

      assert.strictEqual(body, 'Welcome to the payment system');

      done();
    });
  });
});

describe('Cart Page', function() {
  it('should return correct status code and result when :id is a number', function(done) {
    const cartId = 12;
    request.get(`${apiUrl}/cart/${cartId}`, function(error, response, body) {
      assert.strictEqual(error, null);
      assert.strictEqual(response.statusCode, 200);
      assert.strictEqual(body, `Payment methods for cart ${cartId}`);
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', function(done) {
    const invalidCartId = 'hello';
    request.get(`${apiUrl}/cart/${invalidCartId}`, function(error, response, body) {
      assert.strictEqual(error, null);
      assert.strictEqual(response.statusCode, 404);
      done();
    });
  });
});
