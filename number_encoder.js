/*
 Copyright (c) 2016 Rolando González Chévere <rolosworld@gmail.com>
 
 This file is part of Meta.
 
 number_encoder is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License version 3
 as published by the Free Software Foundation.
 
 number_encoder is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with number_encoder.  If not, see <http://www.gnu.org/licenses/>.
*/
function NumberEncoder(mapName) {
  if(mapName !== 'b64' &&
     mapName !== 'b62' &&
     mapName !== 'b36' && 
     mapName !== 'hex' &&
     mapName !== 'bin'){
    return console.error('NumberEncoder invalid argument.');
  }
  
    this.maps = {
    b64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    b62: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    b36: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    hex: '0123456789abcdef',
    bin: '01'
    };
  
    var map = this.maps[mapName];
    var base = map.length;
    
  
    this.encode = function(value) {
            var mod = 0;
            var out = '';
            var c;

            while (value >= base) {
                mod = value % base;
                value = value / base;
                value = parseInt( value, 10 );
                c = map.charAt( mod );
                out = c.concat( out );
            }

            c = map.charAt( value );
            out = c.concat( out );

            return out;
        },

        this.decode = function(encoded) {
            var len = encoded.length;

            var out;
            if (len) {
                var v;
                out = 0;
                for (var i = 0; i < len; i++) {
                    v = encoded.charAt( i );
                    v = map.indexOf( v );
                    out = base * out + v;
                }
            }
            return out;
        }
     return this;
}
/*
  var b64coder = NumberEncoder('b64');
  var ecd = b64coder.encode(1234);
  console.log(ecd);
  console.log(b64coder.decode(ecd));
*/
