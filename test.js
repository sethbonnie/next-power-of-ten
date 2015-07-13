var assert = require( 'assert' );
var nextPowerOfTen = require( './index' );

describe( 'nextPowerOfTen()', function() {
	it( 'returns 100 given 81', function() {
		assert.equal( nextPowerOfTen(81), 100 );
	});

	it( 'returns -1 given -9', function() {
		assert.equal( nextPowerOfTen(-9), -1 );
	});

	it( 'returns 100 given 11', function() {
		assert.equal( nextPowerOfTen(11), 100 );
	});

	it( 'returns 10 given 10', function() {
		assert.equal( nextPowerOfTen(10), 10 );
	});

	it( 'returns 10 given 7', function() {
		assert.equal( nextPowerOfTen(7), 10 );
	});

	it( 'returns 1000000 given 239476', function() {
		assert.equal( nextPowerOfTen(239476), 1000000 );
	});

	it( 'returns -100000 given -239476', function() {
		assert.equal( nextPowerOfTen(-239476), -100000 );
	});

	it( 'returns -100000 given -100000', function() {
		assert.equal( nextPowerOfTen(-100000), -100000 );
	});


});