const { stdin, stdout } = process;
const fs = require('fs')
const path = require('path')

fs.open(path.join(__dirname, 'text.txt'), 'w', (err) => {
    if (err) {
        throw err;
    }
})

stdout.write("Write something...\n");
stdin.on('data', data => {
    const dataString = data.toString();
    fs.appendFile(path.join(__dirname, 'text.txt'), dataString, (err) => {
        if (err) throw err;
    })
});