# next-power-of-ten
A function that returns the next power of 10 (counting up). 

### Install
```sh
$ npm install next-power-of-ten
```

### Usage
```js
var nextPowerOfTen = require( 'next-power-of-ten' );

nextPowerOfTen( 0 ); // 1
nextPowerOfTen( 10 ); // => 10
nextPowerOfTen( 57 ); // => 100
nextPowerOfTen( -57 ); // => -10
nextPowerOfTen( 570 ); // => 1000
nextPowerOfTen( -957 ); // => -100 
```