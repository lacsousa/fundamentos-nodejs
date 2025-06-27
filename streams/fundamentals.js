// Streams - Fundamentals

//process.stdin
//  .pipe(process.stdout);

import { Readable, Writable } from "stream";

class OneToHundred extends Readable {
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
    }, 1000); // Delay of 1s
  }
}

new OneToHundred().pipe(process.stdout); // Pipe the readable stream to standard output
