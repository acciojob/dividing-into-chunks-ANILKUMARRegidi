 const arr = [1, 2, 3, 4, 1,2, 2];

const divide = (arr, n) => {
  let newArr = [];
  let subArr = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] <= n) {
      subArr.push(arr[i]);
      currentSum += arr[i];
    } else {
      newArr.push(subArr);
      subArr = [arr[i]];
      currentSum = arr[i];
    }
  }

  newArr.push(subArr);
  return newArr;
};const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
