const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let subArr = [];
 const newArr = [];
let currentSum = 0;
arr.forEach((element) => {

		if(currentSum + element <= n){
			subArr.push(element);
			currentSum += element;
		}
		else{
			newArr.push(subArr);
			subArr = [element];
			currentSum = element;
		}
	});
	newArr.push(subArr);
	return newArr;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
