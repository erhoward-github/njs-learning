var fs = require("fs");

fs.open("njs-new-file-2.txt", "w", function(err, file){
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
        console.log("Not saved. . ." + ex.message);
    }
});

