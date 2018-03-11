#!/usr/bin/env node

var path = require('path');
var matter = require('gray-matter');
var fixture = path.join.bind(path, __dirname, 'fixtures');
var fs = require('fs');

// check path to directory argument
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var dirname = process.argv[2];

// check path to directory ends with tralling slash
if (dirname.slice(-1) != "/") {
    dirname += '/';
}

// read all files in path to directory
fs.readdir(dirname, function(err, filenames) {
    if (err) {
        return console.log(err);
    }

    filenames.forEach(function(filename) {
        // check we only process Markdown files
        if (filename.split('.').pop() == "md") {
            fs.readFile(dirname + filename, 'utf-8', function(err, content) {
                if (err) {
                    return console.log(err);
                }
    
                // add alias to front matter from slug
                var file = matter(content);
                file.data.aliases = [file.data.slug];

                // check tmp folder exist and create if not
                if (!fs.existsSync(dirname + "tmp")){
                    fs.mkdirSync(dirname + "tmp");
                }

                // write the modified file with the alias added
                fs.writeFile(dirname + "tmp/" + filename, file.stringify(file.data), function(err) {
                    if(err) {
                        return console.log(err);
                    }        
                });
            });
        }
    });
});

