const fs = require('fs')
const path = require('path');

const filepath = path.join(__dirname, '', 'text.txt');
const stream = new fs.ReadStream(filepath, { encoding: 'utf-8' });

stream.on('readable', function () {
    let data = stream.read();
    console.log(data);
})
stream.on('end', function () {
    console.log('');
})
