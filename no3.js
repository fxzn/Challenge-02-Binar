const array = [9, 4, 7, 7, 4, 3, 2, 2, 8];
array.sort(function (a, b) {
  return a - b;
});

array.sort(function (a, b) {
  return b - a;
});


console.log("Array setelah diurutkan: ", array);
console.log("Angka Terbesar ke-dua: ", array[1]);
