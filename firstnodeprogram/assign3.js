const fs = require('fs');

fs.readdir('./', function(err, items) {
    if(err)
    return console.error(err);
    console.log(items);

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
}); 

/* const testFolder = './';
const fs = require('fs');

fs.readdir(testFolder, (err, files1) => {
    if (err) 
return console.error(err);
  files1.forEach(file => {
    console.log(file);
  });
})  */

/* var fs = require("fs");

console.log("Going to read directory /tmp");
fs.readdir("./",function(err, files) {
if (err) 
return console.error(err);

files.forEach( function (file) {
console.log( file );
});
});  */