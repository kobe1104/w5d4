const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, cb){
  reader.question(`Is ${el1} > ${el2}?`, function (boolean) {
    if (boolean === "yes") {
      cb(true);
    } else {
      cb(false);
    }
  })
}
//
// askIfGreaterThan(5,8, function(bool) {
//   console.log(bool);
// });
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1) {

    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      });
    }

    if (i == (arr.length - 1)) {
      outerBubbleSortLoop(madeAnySwaps);
    }
}


// innerBubbleSortLoop([4, 3, 2, 1], 0, false, madeAnySwaps=>console.log(madeAnySwaps));

function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps==true){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true)
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
