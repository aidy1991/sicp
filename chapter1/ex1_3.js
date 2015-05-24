#!/usr/bin/env jsc

function sumSquaresBig2(a, b, c){
	var big1 = big(a, b);
	var tmp = small(a, b);
	var big2 = big(tmp, c);
	return big1 * big1 + big2 * big2;

	function big(s, t){
		return (s < t) ? t : s;
	}

	function small(s, t){
		return (s < t) ? s : t;
	}
}

//test
print(sumSquaresBig2(10, 10, 10));
