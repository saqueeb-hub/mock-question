var arr = [2, 6, 8, 3, 5, 7, 'a', 'b', 'e', 'u', ' y', 'z', 'i', 'o', 8, 8];
var mf = 1;
var m = 0;
var item;
for (var i = 0; i < arr.length; i++) {
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr[i];
    }
  }
  m = 0;
}
console.log(item + '(' + mf + ' items)');

function vowel(arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === 'a' ||
      arr[i] === 'e' ||
      arr[i] === 'i' ||
      arr[i] === 'o' ||
      arr[i] === 'u'
    ) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

console.log(vowel(arr));

function isPrime(n) {
  if (n == 1 || n == 0) return false;

  for (var i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

for (var i = 1; i <= arr.length; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
console.log('----------------------------');
const even = [];
for (var a = 1; a <= arr.length; a++) {
  if (a % 2 == 0) {
    console.log(a);
  }
}
