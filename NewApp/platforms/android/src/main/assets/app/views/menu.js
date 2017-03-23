var page;

exports.principal = function(args){
    page = args.Object;
}

exports.sou = function(){
    fetch("http://10.0.7.102/teste/cores.json").then(response => { return response.json(); }).then(function (r) {
        var jsonfile = r;
     //   var bgpage = page.getElementByView("oi");
        var redbg = jsonfile.red;
        console.log(redbg);

    //    bgpage.style.background = "#f00";

        return redbg;
    })
}