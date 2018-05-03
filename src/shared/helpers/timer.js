import events from 'events';

export class Timer extends events.EventEmitter {
  constructor() {
    super();
    this.frame = 60;
    this.reset();
  }

  start() {
    this.started = true;
    this.reset();
    this.tick();
    this.timer = setInterval(() => {
      this.tick();

      if (!this.remaining) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    this.started = false;
    this.emit('stop');
    clearInterval(this.timer);
  }

  reset() {
    this.remaining = this.frame;
  }

  tick() {
    this.remaining--;
    this.emit('tick');
  }
}
