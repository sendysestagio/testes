var pageviewmodel = require("../views/menu");
var pageview = new pageviewmodel([]);

exports.principal = function(args){
    page = args.Object;
}

exports.sou = function(){
    fetch("http://10.0.7.102/teste/cores.json").then(response => { return response.json(); }).then(function (r) {
        var jsonfile = r;
        var redbg = jsonfile.red;
        console.log(redbg);

        pageview.background = redbg;
    })
}