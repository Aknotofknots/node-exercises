
// this is an example of  write files to the module that you're in
/*
const fs = require('fs'); // imports the module file system
console.log(__dirname);
fs.writeFile('hej.js','(function(){console.log("hej")}());', (err) => {
    if(err)
        throw err;
    console.log('it\'s saved');
});*/

//This is an example of reading a textfile stream and putting the resulting bytes of that stream in an array
// and then print out the length and the the contents of every index in the array.

App = {
    fs: require('fs'),

/**
     * @description Creates a text file
     * @param {string} filename - name of the file.
     * @param {string} textContent - text content of the file
     */
    createTextFile: (filename, textContent) => {
        fs.writeFile(`${filename}.txt`, textContent, (err) => {
            if(err){
                console.log('seems something didn\'t turn out as expected: ', err );
            }
            console.log('created a new textfile in your home directory');
        });
    },

    /**
     *
     * @param fileName name of the textFile in you project directory
     */
    readAndShowTextFile: function (fileName) {
        let data = [];

            this.loadTextFile(fileName).on('data', (chunks) => {
            console.log(chunks);
            for(const bytes of chunks){
                data.push(bytes);
            }
            console.log("this is the text as bytes: " + data);
        })
            .on('end', () => {
              console.log(data.length);
              console.log(data.forEach((item) => {
                  console.log(item.length);
              }))
            })
    },

    /**
     * @description reads the textfile as a stream
     * @param fileName the name of the file in your project directory
     * @return ReadStream object
     */
    loadTextFile: (fileName) => {
        return fs.createReadStream(fileName + '.txt', {encoding: "hex"});
    },
};
