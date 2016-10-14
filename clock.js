class Clock {
  constructor() {
    this.date = new Date();
    this.hr = this.date.getHours();
    this.min = this.date.getMinutes();
    this.sec = this.date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    if (this.sec > 59){
      this.sec %= 60;
      this.min += 1;
    }
    if (this.min > 59){
      this.min %= 60;
      this.hr += 1;
    }
    if (this.hr > 23){
      this.hr %= 24;
    }
    const now = `${this.hr}:${this.min}:${this.sec}`;
    console.log(now);
  }

  _tick() {
    this.sec += 1;
    this.printTime();
  }
}

const clock = new Clock();
