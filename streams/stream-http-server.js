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

const server = http.createServer(async (req, res) => {

  const buffers = [];
  
  for  await (const cunk of req) {
    buffers.push(cunk);
  } // for await is very useful to read data from a stream asynchronously
    // Nothing more than reading all data from a stream until it ends
  
  const fullStreamContent = Buffer.concat(buffers).toString();
  console.log('Full stream content:', fullStreamContent);

  res.end(fullStreamContent);


  //  return req
  //     .pipe(new InverseNumberStream()) // Transform the numbers to their inverses
  //      .pipe(res); // Pipe the readable stream to the response and redirect the output
});

server.listen(3334);