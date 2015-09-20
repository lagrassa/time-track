function main() {
    Parse.initialize('bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf', 'FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2'); 
    var SampleTimeTable = Parse.Object.extend("sampleTimeTable");
    //sampleTimeTable.id = "user@mit.edu";

    var sampleTimeTable = new SampleTimeTable();

    sampleTimeTable.set("class1", 4);
    sampleTimeTable.set("class2", 5);
    sampleTimeTable.set("class3", 9);
    sampleTimeTable.set("class4", 10);
    sampleTimeTable.set("userTableID", "somestring");
    //We call the save method, and pass in success and failure callback functions.
    sampleTimeTable.save(null, {       
        success: function(item) {
        //Success Callback 
    },
    error: function(error) {
        //Failure Callback
    }
    });
    var query = new Parse.Query("sampleTimeTable");
    var timeTable = query.get("N5eyg7Kg1A", {
        success: function(object) {
        console.log("success");
        console.log(object);
    },
    error: function(error) {
        console.log(error);
    }
});
}

main();
