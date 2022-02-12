import {MAPS, NumberEncoder} from './number_encoder.mjs';

debugger;
let b64coder = NumberEncoder(MAPS.b64);
let ecd = b64coder.encode(1234);
console.log(ecd);
console.log(b64coder.decode(ecd));
