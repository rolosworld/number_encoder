# number_encoder #
Encode numeric value to a string representation using a map of characters.

basic usage JS:

```javascript
var preferredCoder = NumberEncoder(NumberEncoder.MAPS.b62);

var exampleNumber = 123123123;

var encoded = preferredCoder.encode(exampleNumber);

var decoded = preferredCoder.decode(encoded);

console.log('input number: ' + exampleNumber );

console.log('encoded: ' + encoded);

console.log('decoded: ' + decoded);

console.log('input and output matched: '+ (decoded === exampleNumber?1:0));

```
basic usage PHP:
```php

$preferredCoder = new NumberEncoder( NumberEncoder::$maps['b62'] );

$exampleNumber = 123123123;

$encoded = $preferredCoder->encode($exampleNumber);

$decoded = $preferredCoder->decode($encoded);

echo 'input number: '. $exampleNumber . '<br/>';

echo 'encoded: '. $encoded . '<br/>';

echo 'decoded: '. $decoded . '<br/>';

echo 'input and output matched: '. $decoded == $exampleNumber . '(1 = true, 0 = false)';
```
