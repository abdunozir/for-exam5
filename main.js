// let n =314;
// let b = 8;
// let arr =[]

// while(n>0) {
//     let c = n%10
//     n = Math.floor(n/10)
//     console.log(c);
//     arr.push(c)
// }
// // console.log(arr);
// let sum =0
// for(let i=0; i<arr.length; i++) {
//     sum = i*arr[i]**b
// }
// console.log(sum);

// =================problem1

// let n = "314";
// let a = 8;
// console.log(reverseSanoq(n, a));
// function reverseSanoq(n, a){
//   if(a == 16){
//     return n = parseInt(n, 16);
//   } else if(a == 2){
//     return n = parseInt(n, 2);
//   } else if (a == 8){
//     return n = parseInt(n, 8);
//   }
// }

// =================problem2

// let arr = [-2, 5, -10, 12, 3, -4, -5]
// let natija = true;

// if (arr[0] <0){
//  for (let i=0; i<=arr.length; i++) {
//     if ( i %2 ==0 && arr[i] > 0){
//         natija = i;
//         break;
//     }
//     else if (i %2 == 1 && arr[i] <0){
//         natija = i;
//         break;
//     }
//  }
// }
//  else {
//     for (let i=0; i<=arr.length; i++) {
//         if ( i %2 ==0 && arr[i] < 0){
//             natija = i;
//             break;
//         }
//         else if (i %2 == 1 && arr[i] >0){
//             natija = i;
//             break;
//         }
//      }
// }
// console.log(natija);

// =================problem3

// let obj = {
//     arr: [15, 20, 12, 4, -13, 5]
// }
// let n =+prompt("siz kiritgan raqam 0 katta va arr ni lengthidan kichik bo'lishi kerak arr length =5 : ")
// let n =-6 bu tekshirish uchun raqam

// if(n > 5) {
//     alert("siz kiritgan raqam arr lengtidan uzun Iltimos boshqattan kiriting")
// }

// if(n<=5) {
//     obj.arr.forEach((item, index)=> {
//         if(index==n) {
//             console.log(item);
//         }

//     })
// }

// if(n<0) {
//     if(n===-1) {
//         console.log(obj.arr[5]);
//     }
//     if(n===-2) {
//         console.log(obj.arr[4]);
//     }
//     if(n===-3) {
//         obj.arr.forEach((item, index)=> {
//         })
//         console.log(obj.arr[3]);
//     }
//     if(n===-4) {
//         obj.arr.forEach((item, index)=> {
//         })
//         console.log(obj.arr[2]);
//     }
//     if(n===-5) {
//         obj.arr.forEach((item, index)=> {
//         })
//         console.log(obj.arr[1]);
//     }
//     if(n===-6) {
//         obj.arr.forEach((item, index)=> {
//         })
//         console.log(obj.arr[0]);
//     }
// }

// problem5=================

// let obj = {
//     x: 1,
//     y: 2,
// }
// let arr =[]

// for(let i=0; i<1; i++) {
//     arr.push(Object.keys(obj)[0])
//     arr.push(Object.values(obj)[0])
// }
// for(let i=1; i<2; i++) {
//     arr.push(Object.keys(obj)[1])
//     arr.push(Object.values(obj)[1])
// }
// console.log(arr);

// problem7=================

// let arr = [1, "t", 15, "t"];
// let arr2 = [2, 4];
// // let arr = [1, 5, 12, 5, -10];
// // let arr2 = [12, 6, 1];
// let c = [];
// let newArr = [];
// let count = 0;

// for (let i = 0; i < arr2.length; i++) {
//     arr[arr.length] = arr2[i];
// }
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//         if (arr[j] != arr[i]) {
//             count = 0;
//         } else {
//             count = 1;
//             break;
//         }
//     }
//     if (count == 0) {
//         newArr[newArr.length] = arr[i];
//     }
// }

// console.log(newArr);

// problem4========

// const string ={
//     reverse: function(str){
//         for(let i=str.length; i>0; i--){
//             return str
//         }
//     },
//     indexOf: function(ch, str){
//         for(let i=0; i<str.length; i++) {
//             if(ch == i) {
//                 return i
//             }else {
//                 return -1
//             }
//         }
//     },
//     lastIndexOf: function(ch, str){
//         for(let i=0; i<str.length; i++) {
//             if(ch == i) {
//                 return i
//             }else {
//                 return -1
//             }
//         }
//     },
//     slice: function(start, end, str){
//         for(let i=0; i<str.length; i++) {
//             if(start <=i && end>=i) {
//                 return str[i]
//             }else {
//                 console.log(undefined);
//             }
//         }
//     },
//     trim: function (str){
//         for(let i=0; i<str.length; i++) {
//             if(i==" ") {
//                 str.pop()
//             }
//         }
//     }
// }

// problem8========

// let arr =[
//   [1, 1, 1, 1],
//   [5, 2, 2, 100],
//   [9, 4, 2, 1]

// ]
// for(let i=1; i<arr[0].length; i++) {
// arr[0][i] += arr[0][i-1]
// }
// for(let i=1; i<arr.length; i++) {
//  arr[i][0] += arr[i-1][0]
// }
// for(let i=1; i<arr.length; i++) {
//    for(let j=1; j<arr[i].length; j++) {
//      let top = arr[i-1][j];
//      let left = arr[i][j-1]
//      arr [i][j] += top>left? left: top
//    }
// }
// console.table(arr);
// console.log(arr[arr.length-1][arr[0].length-1]);

// problem 8 ustozniki
// const matrix = [
//     [1, 1, 1, 1],
//     [5, 2, 2, 100],
//     [9, 4, 2, 1],
//   ];

//   const getMinimalCell = function (table, i, j) {
//     const top = table[i - 1]?.[j];
//     const left = table[i][j - 1];
//     let sum = 0;

//     if (top !== undefined && left !== undefined) {
//       sum += top > left ? left : top;
//     }
//     if (top !== undefined && left === undefined) {
//       sum = table[i - 1][j];
//     }

//     if (top === undefined && left !== undefined) {
//       sum = table[i][j - 1];
//     }
//     return sum;
//   };

//   const getMinRoute = function (matrix, i, j, res = []) {
//     res[res.length] = [i, j];
//     const left = matrix[i][j - 1];
//     const top = matrix[i - 1]?.[j];

//     if (top !== undefined && left !== undefined) {
//       if (left > top) {
//         getMinRoute(matrix, i - 1, j, res);
//       } else getMinRoute(matrix, i, j - 1, res);
//     }

//     if (top !== undefined && left === undefined) {
//       getMinRoute(matrix, i - 1, j, res);
//     }

//     if (top === undefined && left !== undefined) {
//       getMinRoute(matrix, i, j - 1, res);
//     }
//     return res;
//   };

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       matrix[i][j] += getMinimalCell(matrix, i, j);
//     }
//   }

//   const res = getMinRoute(matrix, matrix.length - 1, matrix[0].length - 1);
//   console.log(res.reverse());
//   console.table(matrix);
