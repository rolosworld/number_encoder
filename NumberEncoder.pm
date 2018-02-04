package NumberEncoder;
use warnings;
use strict;

sub new {
    my ( $self, $map ) = @_;
    my $obj = {};

    $$obj{map} = [ split( '', $map ) ];
    $$obj{base} = scalar( @{$$obj{map}} );

    my @pam = ();
    for ( my $i = 0; $i < $$obj{base}; $i++ ) {
        $pam[ ord( $$obj{map}[$i] ) ] = $i;
    }
    $$obj{pam} = \@pam;

    return bless( $obj, $self );
}

sub encode {
    my ( $self, $value ) = @_;
    my @out = ();

    while ( $value ) {
        unshift( @out, $$self{map}[ $value % $$self{base} ] );
        $value = int( $value / $$self{base} );
    }

    return join( '', @out );
}

sub decode {
    my ( $self, $encoded ) = @_;
    my @enc = split( '', $encoded );
    my $len = scalar( @enc );

    my $out;
    if ( $len ) {
        $out = 0;
        for ( my $i = 0; $i < $len; $i++ ) {
            $out = $$self{base} * $out + $$self{pam}[ ord( $enc[ $i ] ) ];
        }
    }

    return $out;
}


our %MAPS = (
    b64 => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    b62 => '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    b36 => '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    hex => '0123456789abcdef',
    bin => '01',
);

1;

__END__

=pod

=head1 NAME

NumberEncoder - Encode a numeric value to a string.

=encoding UTF-8

=head1 LICENSE

 Copyright (c) 2017 Rolando González Chévere <rolosworld@gmail.com>

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

=head2 DESCRIPTION

 Encode numeric value to a string representation using a string with unique characters as the encoder map. 

=head2 MAPS

=over 4

=item b64

Encodes into base64

=item b62

Encodes into base62

=item b36

Encodes into base36

=item hex

Encodes into hexadecimal

=item bin

Encodes into binary

=back


=head2 SYNOPSIS

  my $b64coder = NumberEncoder->new( $NumberEncoder::MAPS{b64} );
  my $ecd = $b64coder->encode( 1234 );
  print( $ecd, "\n" );
  print( $b64coder->decode( $ecd ), "\n" );

=head2 METHODS

=head2 new( $map )

C<< $map >> - String representing the map to be used for the encoding.

Returns a new NumberEncoder object that will use the provided $map to encode or decode.


=head2 encode( $value )

C<< $value >> - Numeric value we want to encode

Returns the encoded value as a string


=head2 decode( $encoded )

C<< $encoded >> - Encoded string we want to decode

Returns the value decoded from the string

=cut
