import { Readable, Writable, Transform } from 'node:stream';


class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      if (i > 5) {
        this.push(null); // No more data to read
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf); // Push the current number as a buffer
      }
    }, 500); // Delay of 0.5s
  }
}

fetch('http://localhost:3334', { // Fetch API is built-in in Node.js v18+ and works similar to the browser to call HTTP endpoints in another application
  method: 'POST',
  body: new OneToHundredStream(),
   duplex: 'half'
}).then(response => {
  return response.text()
}).then(data => {
    console.log('Response from server:', data);
});


