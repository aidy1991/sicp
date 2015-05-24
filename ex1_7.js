#!/usr/bin/env jsc

function improve(guess, x){
  return average(guess,  x / guess);
}

function average(a, b){
  return (a + b) / 2;
}

function sqrt(x){
  return sqrt_iter(1, x);
}
function sqrt2(x){
  return sqrt_iter2(1, x);
}

function good_enough(a, b){
  return abs(a - b) < 0.0001;
}

function abs(x){
  return (x > 0) ? x : -x;
}

function sqrt_iter(guess, x){
  if(good_enough(guess * guess, x)){
    return guess;
  }else{
    return sqrt_iter(improve(guess, x), x);
  }
}

function sqrt_iter2(guess, x){
  var improved = improve(guess, x);
  if(good_enough(improved, guess)){
    return improved;
  }else{
    return sqrt_iter2(improved, x);
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
