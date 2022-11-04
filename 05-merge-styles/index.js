const fs = require('fs');
const path = require('path');

const pathDist = path.join(__dirname, "project-dist");

fs.open(path.join(pathDist, 'bundle.css'), 'w', (err) => {
    if (err) {
        throw err;
    }
    fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
        for (let i in files) {
            fs.stat(path.join(__dirname, 'styles', files[i]), (err, stats) => {
                if (stats.isFile()) {
                    if (path.extname(files[i]) == '.css') {
                        fs.readFile(path.join(__dirname, 'styles', files[i]), 'utf-8', (err, data) => {
                            fs.appendFile(path.join(pathDist, 'bundle.css'), data, (err) => {
                                if (err) {
                                    throw err;
                                }
                            })
                        })
                        // console.log(files[i]);
                    }
                }
            })
        }
    })
})
console.log("file bundle is actual!");