/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function

var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

function firstItem(arr, cb){
	cb(arr[0]);
}

firstItem(foods, (firstItem) => {
  console.log('The first item is ' + firstItem);
});




// Write a function called getLength that passes the length of the array into the callback
function getLength(arr, cb){
 cb(arr.length);
}
getLength(foods, (length) => {
  console.log('The length of the array is ' + length);
});

// Write a function called last which passes the last item of the array into the callback
function last(arr, cb){
 cb(arr.pop());
}
last(foods, (lastItem) => {
  console.log('The last item in the array is ' + lastItem);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
function sumNums(a, b, cb){
	cb(a+b);
}
sumNums(5, 10, (sum) => {
  console.log('The sum is ' + sum);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
//This says that it should add the two numbers, but I am assuming it means to multiply them.
function multiplyNums(a, b, cb){
	cb(a*b);
}
multiplyNums(5, 10, (product) => {
  console.log('The product is ' + product);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
function contains(arr, item, cb){
if(arr.indexOf(item) !== -1){
	cb(true);
}else{
	cb(false);
}
}
contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

function removeDuplicates(arr, cb){
	for (i=0; i<arr.length; i++){
		if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
	cb(arr.splice(i,i+1));
		}
	}
}
removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});
//This one is most concise, but it does alter the original array, so here is a longer version that does not.
function removeDuplicates(arr, cb){
	var final = [];
     var removed = [];
	for (i=0; i<arr.length; i++){
		if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
	removed.push(arr.slice(i,i+1));
		}
	}
	
	var merged = ([].concat.apply([], removed));
	 
	 for (j=0; j<merged.length; j++){
		if (merged.indexOf(merged[j]) !== merged.lastIndexOf(merged[j])){

	 final = merged.splice(j,j+1);
	
		}
		
	}cb(final);
}
removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
  });

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
function forEach(arr, cb){
	for(i=0; i<arr.length; i++){
		cb(arr[i], i);
	}
}
forEach(foods, (value, index) => {
  console.log(`${value} is at index ` + index);
});
