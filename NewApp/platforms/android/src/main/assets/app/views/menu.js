var createViewModel = require("./main-view-model").createViewModel;


var page;


exports.load1 = function() {
    page = args.Object;
}

exports.fetchteste = function(){
    fetch("http://10.0.7.102/teste/cores.json").then(response => { return response.json(); }).then(function (r){
        var myJSON = r;
        var nomeValue = myJSON.nome;
        console.log(nomeValue);
    });
};