#!/usr/bin/env jsc

function improve(guess, x){
  return average(guess,  x / guess);
}

function average(a, b){
  return (a + b) / 2;
}

function sqrt(x){
  return sqrtIter(1, x);
}
function sqrt2(x){
  return sqrtIter2(1, x);
}

function isGoodEnough(a, b){
  return abs(a - b) < 0.0001;
}

function abs(x){
  return (x > 0) ? x : -x;
}

function sqrtIter(guess, x){
  if(isGoodEnough(guess * guess, x)){
    return guess;
  }else{
    return sqrtIter(improve(guess, x), x);
  }
}

function sqrtIter2(guess, x){
  var improved = improve(guess, x);
  if(isGoodEnough(improved, guess)){
    return improved;
  }else{
    return sqrtIter2(improved, x);
  }
}

//test
// print(sqrt(10));
// print(sqrt(100));
// print(sqrt(1));
// print(sqrt(144));
// print(sqrt(0.00001));
//print(sqrt(10000000000000));

print(sqrt2(0.00001));
print(sqrt2(10000000000000));
