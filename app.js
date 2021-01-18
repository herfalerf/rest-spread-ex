// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//Refactor
const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

//findMin
const findMin = (...args) => args.reduce((min, currVal) => (currVal < min ? currVal : min));

//mergeObjects

const mergeObjects = (...args) => Object.assign({}, ...args);

//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) =>
	args.reduce(
		(result, next) => {
			result.push(next * 2);
			return result;
		},
		[ arr ]
	);

const num1 = [ 1, 2, 3, 4 ];
const num2 = [ 5, 6, 7, 8 ];

const removeRandom = (items) => {
	let idx = Math.floor(Math.random() * items.length);
	return [ ...items.slice(0, idx), ...items.slice(idx + 1) ];
};

const extend = (array1, array2) => (extdArr = [ ...array1, ...array2 ]);

const addKeyValue = (obj, key, val) => ({ ...obj, [key]: val });

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const combine = (obj1, obj2) => (newObj = { ...obj1, ...obj2 });

const update = (obj, key, val) => ({ ...obj, [key]: val });

// const update = (obj, key, val) => {
// 	return { ...obj, [key]: val };
// };
