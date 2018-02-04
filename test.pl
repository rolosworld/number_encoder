use NumberEncoder;

my $b64coder = NumberEncoder->new( $NumberEncoder::MAPS{b64} );
my $ecd = $b64coder->encode( 1234 );
print( $ecd, " eq TS\n" );
print( $b64coder->decode( $ecd ), " == 1234\n" );
