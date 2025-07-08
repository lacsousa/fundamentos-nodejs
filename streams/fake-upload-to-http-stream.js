import { Readable, Writable, Transform } from 'node:stream';


class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      if (i > 100) {
        this.push(null); // No more data to read
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf); // Push the current number as a buffer
      }
    }, 100); // Delay of 1s
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half'
});

