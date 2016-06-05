import _ from 'underscore';
import events from 'events';

class Timer extends events.EventEmitter {
  constructor() {
    super();
    this.frame = 60;
    this.reset();
  }

  start(options) {
    this.started = true;
    this.timer = setInterval(() => {
      this.remaining--;
      this.emit('tick');

      if (!this.remaining) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    this.reset();
    clearInterval(this.timer);
    this.emit('stop');
  }

  reset() {
    this.remaining = this.frame;
    this.started = false;
  }
}

export default Timer;
