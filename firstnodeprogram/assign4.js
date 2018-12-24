/* Write a node.JS program that creates a txt file with the text passed as a parameter. */
const fs=require('fs');
var content='merry xmas \n and a very \n hpy new yr';

fs.writeFile('wish.txt',content,err=>{

    if(err)
    console.error(err);
    console.log("content successfully saved in wish.txt");
});