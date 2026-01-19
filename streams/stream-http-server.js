import http from 'node:http';
import { Transform } from 'node:stream';


class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformedNumber = -parseInt(chunk.toString(), 10);

    console.log(`Transformed number: ${transformedNumber}`);
    
    callback(null, Buffer.from(String(transformedNumber)));
  }
}

// req => Readable Stream
// res => Writable Stream

const server = http.createServer((req, res) => {
    return req
        .pipe(new InverseNumberStream()) // Transform the numbers to their inverses
        .pipe(res); // Pipe the readable stream to the response and redirect the output
});

server.listen(3334);