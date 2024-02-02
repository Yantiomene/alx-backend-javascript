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

describe('Available Payments', function() {
  it('should return correct status code and result for /available_payments endpoint', function(done) {
    request.get(`${apiUrl}/available_payments`, function(error, response, body) {
      assert.strictEqual(error, null);
      assert.strictEqual(response.statusCode, 200);
      const expectedResult = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        },
      };
      assert.deepStrictEqual(JSON.parse(body), expectedResult);
      done();
    });
  });
});

describe('Login Endpoint', function() {
  it('should return correct status code and result for /login endpoint', function(done) {
    const userName = 'Betty';
    const requestBody = { userName };

    request.post(
      {
        url: `${apiUrl}/login`,
        json: requestBody,
      },
      function(error, response, body) {
        assert.strictEqual(error, null);
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(body, `Welcome ${userName}`);
        done();
      }
    );
  });
});
