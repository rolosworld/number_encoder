/*
 Copyright (c) 2016 Rolando González Chévere <rolosworld@gmail.com>

 This file is part of number_encoder.

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
'use strict';

export let MAPS = {
    b64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    b62: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    b36: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    hex: '0123456789abcdef',
    bin: '01'
};

export function NumberEncoder( map ) {

    let base = map.length;

    let pam = [];
    for ( let i = 0; i < map.length; i++ ) {
        pam[ map.charCodeAt( i ) ] = i;
    }

    return {
        encode: function( value ) {
	    let out = [];

	    while ( value ) {
                out.unshift( map.charAt( value % base ) );
                value = Math.floor( value / base );
	    }

	    return out.join( '' );
        },

        decode: function( encoded ) {
	    let len = encoded.length;

	    let out = '';
	    if ( len ) {
                out = 0;
                for ( let i = 0; i < len; i++ ) {
		    out = base * out + pam[ encoded.charCodeAt( i ) ];
                }
	    }

	    return out;
        }
    };
};
