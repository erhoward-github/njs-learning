var fs = require("fs");
var fileName = "njs-new-file-1.xml";
var content = `
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Data</to>
  <from>Jean Luc Picard</from>
  <heading>Reminder</heading>
  <body>Make it so!</body>
</note> 
`;
fs.appendFile(fileName, content, function(err){
    try 
    {
        if(err)
        {
            throw err;
        }
        console.log("Saved. . .");
    } 
    catch(error) 
    {
        console.log("Not saved. . .");
    }
});
