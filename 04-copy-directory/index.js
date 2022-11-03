const fs = require('fs')
const path = require('path');


fs.readdir(__dirname, (err, files) => {
    if (err) {
        throw err
    }
    if (!files.includes('files-copy')) {
        fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
            if (err) {
                throw err
            }
            // console.log("folder creat!");
        })
    } else {
        fs.readdir(path.join(__dirname, 'files-copy'), (err, files) => {
            if (err) {
                throw err;
            }
            for (let i in files) {
                fs.unlink(path.join(__dirname, 'files-copy', files[i]), err => {
                    // console.log("f_del");
                })
            }
        })
    }
    fs.readdir(path.join(__dirname, "files"), (err, files) => {
        if (err) {
            throw err
        }

        for (let i in files) {
            fs.copyFile(path.join(__dirname, "files", files[i]), path.join(__dirname, "files-copy", files[i]), err => {
                if (err) {
                    throw err;
                }
                // console.log("file copy!");
            });
        }
    });
});
console.log("files copy!");