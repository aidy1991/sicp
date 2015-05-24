#!/usr/bin/env jsc

// 立方根に対するニュートン法は y が x の立方根である場合において以下の値により良く近似される。
// x/y2 +2y. 3
// この式を用いて square-root に類似した cube-root を実装せよ。 (Section 1.3.4にてこれらの square-root と cube-root の抽象化としての汎用なニュートン法の実装方法を学習します。)

function cubeRoot(x){
  return cubeIter(1, x);
}

function improve(guess, x){
  return average(guess,  (x / (guess * guess) + 2*guess) / 3);
}

function average(a, b){
  return (a + b) / 2;
}

function isGoodEnough(a, b){
  return abs(a - b) < 0.0001;
}

function abs(x){
  return (x > 0) ? x : -x;
}

function cubeIter(guess, x){
  improved = improve(guess, x);
  if(isGoodEnough(improved, guess)){
    return improved;
  }else{
    return cubeIter(improved, x);
  }
}

//test
print(cubeRoot(10));
print(cubeRoot(1));
print(cubeRoot(123));
print(cubeRoot(10000000000000000000000000));
print(cubeRoot(0.0000000001));
