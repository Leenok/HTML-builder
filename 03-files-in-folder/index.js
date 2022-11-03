const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname, 'secret-folder');

fs.readdir(filepath, (err, files) => {
    if (err) throw err;
    // console.log(files);
    for (let i in files) {
        fs.stat(path.join(filepath, files[i]), (err, stats) => {
            if (err) {
                console.log(err);
            } else {
                if (stats.isFile()) {
                    console.log(`${files[i]} - ${path.extname(files[i])} - ${stats.size} kb`);
                }

            }
        })
    }

})