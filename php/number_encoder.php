<?php

class NumberEncoder{
    public static $maps = array(
        "b64" => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        "b62" => "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "b36" => "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "hex" => "0123456789abcdef",
        "bin" => "01"
    );

    public function __construct($map){
        $this->map = $map;
        $this->base = strlen($map);
    }

    public function encode($val){
        $mod = 0;
        $out = '';
        $c;

        while ($val >= $this->base) {
            $mod = $val % $this->base;
            $val = $val / $this->base;
            $val = intval( $val, 10 );
            $c = $this->map{$mod};
            $out = $c .= $out;
        }

        $c = $this->map{$val};
        $out = $c .= $out;

        return $out;
    }

    public function decode($encoded) {
        $len = strlen($encoded);

        $out;
        if ($len) {
            $v;
            $out = 0;
            for ($i = 0; $i < $len; $i++) {
                $v = $encoded{$i};
                $v = strpos($this->map, $v);
                $out = $this->base * $out + $v;
            }
        }

        return $out;
    }
}

// usage example
// accept array of unique characters to use as map

// Predefined available maps:
//   NumberEncoder::$maps['b64']
//   NumberEncoder::$maps['b62']
//   NumberEncoder::$maps['b36']
//   NumberEncoder::$maps['hex']
//   NumberEncoder::$maps['bin']

//$base62coder = new NumberEncoder( NumberEncoder::$maps['b62'] );

//$encoded = $base62coder->encode(123123123);

//$decoded = $base62coder->decode($encoded);

//echo $encoded;

?>
