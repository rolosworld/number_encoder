let enc = require('./number_encoder.js');

debugger;
let b64coder = enc.NumberEncoder(enc.MAPS.b64);
let ecd = b64coder.encode(1234);
console.log(ecd);
console.log(b64coder.decode(ecd));
