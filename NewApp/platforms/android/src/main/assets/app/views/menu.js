//var createViewModel = require("./main-view-model").createViewModel;

//var http = require("http");

var page;


exports.load1 = function(args) {
    page = args.Object;
}


exports.fetchteste = function(){
    console.log("ENTREI");
    fetch("C:\Users\User\Desktop\database_teste\cores.json").then(response => {
        return response.json();
        console.log("RETURNED"); 
    })
    .then(function (r) {
        var myJSON = r;
        var nomeValue = myJSON.green;
        console.log(nomeValue);
        console.log("123");
        //page.GetViewById("labelteste").text = "123";
    })
}

