const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(){
    this.towers = [[3, 2, 1], [], []];
  }

  promptMove(callback){
    console.log(this.towers);
    reader.question("from?:", (fr) => {
      console.log(`${fr}`);
      reader.question("to?", (to) => {
        console.log(`${to}`);
        callback(fr, to);
      })
    });
  }

  // move
  // if (this.towers[to].length === 0 || this.towers[to][this.towers.length - 1]) {
  //     this.towers[to].push(this.towers[fr].pop);
  // }

  isValidMove(fr, to){
    if (fr < 3 && fr >= 0) {
      if (to < 3 && to >=0) {
        if (this.towers[fr].length === 0) {
          return false;
        }
        else if (this.towers[to].length === 0 || this.towers[to][this.towers.length - 1]) {
            return true;
        }
        else {
          return false;
        }
      }
      else{
        return false;
      }
    }
    else {
      return false;
    }
  }

  move(fr, to){

    if (this.isValidMove(fr, to)){
       this.towers[to].push(this.towers[fr].pop());
       return true;
    } else {
      return false;
    }
  }

  print(){
    console.log(JSON.stringify(this.towers));
  }

  isWon(){
    if(this.towers[0].length === 0 ){
      if(this.towers[1].length === 3 || this.towers[2].length === 3  ){
        return true;
      } else{
        return false;
      }
    } else {
      return false;
    }
  }

  run(completionCallback) {
    this.promptMove(move(fr, to));
  }
}



let game = new Game();
console.log(game.isWon());
// game.promptMove();
// console.log(game.isValidMove(0, 2));
// game.move(0,2);
// game.print();
// game.run(game.move());












// class Hanoi {
//   run(){
//     until three disks on another tower
//       getmove
//         player enters move
//         check if valid move
//         move
//     end
//
//
//
//
//   }
// }
