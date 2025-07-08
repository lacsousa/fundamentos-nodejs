// Streams - Fundamentals

//process.stdin
//  .pipe(process.stdout);

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
    }, 1000); // Delay of 1s
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    
    const number = parseInt(chunk.toString(), 10);
    const result = number * 10;
    console.log(`Number: ${number}, Multiplied by 10: ${result}`);
    callback(); // Signal that the write is complete
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformedNumber = -parseInt(chunk.toString(), 10);
    callback(null, Buffer.from(String(transformedNumber)));
  }
}


new OneToHundredStream()
  .pipe(new InverseNumberStream()) // Transform the numbers to their inverses
  .pipe(new MultiplyByTenStream()); // Pipe the readable stream to standard output
