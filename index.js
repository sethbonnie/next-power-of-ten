module.exports = function( n ) {
	var len = String( Math.abs(n) ).length;
	var power = ( n < 0 ) ? len - 1 : len;
	var sign = ( n < 0 ) ? -1 : 1;

	if ( n === 1 || n === 0 ) {
		return 1;
	}  

	if ( n % 10 === 0 ) {
		return n;
	}

	return sign * Math.pow( 10, power );
};