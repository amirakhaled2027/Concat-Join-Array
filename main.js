
let arr1 = ['amira', 'khaled', 'ahmed'];
let arr2 = ['john', 'sara', 'holmes'];

// arr1 = arr1 + arr2;
arr1 += arr2;
console.log(arr1);
console.log(typeof arr1);
//the problem with the previous method it transorms them into string
//solution 
let arr3 = ['amira', 'khaled', 'ahmed'];
let arr4 = ['john', 'sara', 'holmes'];

// arr3.concat(arr4);
console.log(arr3.concat(arr4));
console.log(arr3.concat(arr4, 'mona'));
//to show the array withouth the square brackets. 
console.log(arr3.join());
console.log(arr3.join('-'));
console.log(arr3.join(' $ '));