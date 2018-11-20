/*jshint esversion: 6 */

var fs = require("fs");

var fileName = "njs-new-file-3.txt";
var fileContents = `
var fs = require("fs");

var fileName = "njs-new-file-3.txt";
var fileContents = "";
fs.writeFile(fileName, fileContents, function(err){
    try 
    {
        if(err)
        {
            throw err;
        }
        console.log("Saved. . .");
    }
    catch(ex)
    {
        console.log("Not saved. . ." + ex.name + ": " + ex.message);
    }
});
`;
fs.writeFile(fileName, fileContents, function(err){
    try 
    {
        if(err)
        {
            throw err;
        }
        console.log("Saved. . .");
    }
    catch(ex)
    {
        console.log("Not saved. . ." + ex.name + ": " + ex.message);
    }
});
