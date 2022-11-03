const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, '', 'text.txt');

fs.readFile(filepath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    console.log(content);
})