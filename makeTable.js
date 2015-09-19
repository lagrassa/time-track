function main() {
    Parse.initialize('bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf', 'FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2'); 
    var sampleTimeTable = Parse.Object.extend("sampleTimeTable");

    var sampleTimeTable = new sampleTimeTable();

    sampleTimeTable.set("week1", [5,6,2]);
    sampleTimeTable.set("week2", [3,2,6]);
    sampleTimeTable.set("week3", [2, 4, 18]);
    sampleTimeTable.set("week4", [3,1,16]);
    //We call the save method, and pass in success and failure callback functions.
    sampleTimeTable.save(null, {       
        success: function(item) {
        //Success Callback 
    },
    error: function(error) {
        //Failure Callback
    }
    });
}

main();
