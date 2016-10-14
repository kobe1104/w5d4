const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, cb) {

  if (numsLeft == 0) {
    cb(sum);
    reader.close();
    return;
  }

  reader.question("enter a number", function (num) {
    sum += parseInt(num);
    console.log(sum);
    numsLeft--;
    addNumbers(sum, numsLeft, cb);
  });


  // addNumbers(sum, numsLeft, function(sum) {console.log(`Total sum: ${sum}`)};



};

addNumbers(10, 3, sum => console.log(`total: ${sum}`));
