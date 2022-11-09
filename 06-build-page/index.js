const fs = require('fs');
const path = require('path');
const projDir = path.join(__dirname, 'project-dist');

fs.mkdir(projDir, err => {
    if (err) {
        throw err;
    }

    console.log("folder create");
    fs.open(path.join(__dirname, 'project-dist', 'index.html'), 'w', (err) => {
        if (err) {
            throw err;
        }
        console.log('html creat!');
        // write html 
        fs.readFile(path.join(__dirname, 'template.html'), 'utf-8', (err, contentTemplate) => {
            if (err) {
                throw err;
            }
            fs.readFile(path.join(__dirname, 'components', 'articles.html'), 'utf-8', (err, atriclContent) => {
                if (err) {
                    throw err;
                }
                contentTemplate = contentTemplate.replace(/\{\{articles\}\}/, atriclContent);

                fs.readFile(path.join(__dirname, 'components', 'header.html'), 'utf-8', (err, HeaderContent) => {
                    if (err) {
                        throw err;
                    }
                    contentTemplate = contentTemplate.replace(/\{\{header\}\}/, HeaderContent);

                    fs.readFile(path.join(__dirname, 'components', 'footer.html'), 'utf-8', (err, FooterContent) => {
                        if (err) {
                            throw err;
                        }
                        contentTemplate = contentTemplate.replace(/\{\{footer\}\}/, FooterContent);

                        fs.writeFile(path.join(__dirname, 'project-dist', 'index.html'), contentTemplate, (err) => {
                            if (err) {
                                throw err;
                            }
                            console.log("write html");
                        })

                    })
                })

            })
        })
    });
    fs.open(path.join(__dirname, 'project-dist', 'style.css'), 'w', (err) => {
        if (err) {
            throw err;
        }
        // write style 
        fs.readdir(path.join(__dirname, 'styles'), (err, Stfiles) => {
            if (err) {
                throw err;
            }
            for (let i in Stfiles) {
                console.log(Stfiles[i]);
                fs.readFile(path.join(__dirname, 'styles', Stfiles[i]), 'utf-8', (err, data) => {
                    let dataFl = data.toString();
                    fs.appendFile(path.join(__dirname, 'project-dist', 'style.css'), dataFl, err => {
                        if (err) {
                            throw err;
                        }
                    });
                });

            }
        })
        console.log('style creat!');
    });
    fs.mkdir(path.join(__dirname, 'project-dist', 'assets'), err => {
        if (err) {
            throw err;
        }
        console.log('folder aseet creat!')
    })
    fs.readdir(path.join(__dirname, 'assets'), (err, dir) => {
        if (err) {
            throw err;
        }
        for (let i in dir) {
            fs.readdir(path.join(__dirname, 'assets', dir[i]), (err, files) => {
                if (err) {
                    throw err;
                }
                const fil = files.toString().split(',');
                fs.mkdir(path.join(__dirname, 'project-dist', 'assets', dir[i]), err => {
                    if (err) {
                        throw err;
                    }
                    for (let j in fil) {
                        fs.copyFile(path.join(__dirname, 'assets', dir[i], fil[j]), path.join(__dirname, 'project-dist', 'assets', dir[i], fil[j]), err => {
                            if (err) {
                                throw err;
                            }
                            console.log('copy: ' + fil[j]);
                        })

                    }
                })

            })

        }
    })




})







