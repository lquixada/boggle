
class Timer {
  constructor(options) {
    var opt = options || {};

    this.frame = opt.frame || 60;
    this.remaining = this.frame;
  }

  start(options) {
    this.onTick = options.onTick || _.noop;
    this.timer = setInterval(() => {
      this.remaining--;
      this.onTick();

      if (!this.remaining) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    this.remaining = this.frame;
    clearInterval(this.timer);
  }
}

export default Timer;
