var labelModule = require("ui/label");
var layout = require("ui/layouts/grid-layout");
var stackLayout = require("ui/layouts/stack-layout");

exports.principal = function(args) {
    page = args.object;
    readJson();
}

readJson = function() {
    fetch("http://10.0.7.102/teste/form.json").then(response => { 
        return response.json();
     })
     .then(function (r) {
        // get number of types
        var valor = r;
        var numTypes = Object.keys(valor.fields).length;
        var numCol = numTypes;

        drawGrid(valor, numTypes);

	});    
}

drawGrid = function(jsonValue, numCol) {
    var gridLayout = new layout.GridLayout();
    var num_label = 0;
    
    for (cont = 0; cont < numCol; cont++) {
        var arraylbl = new Array(cont);
        arraylbl[cont] = new labelModule.Label();
        arraylbl[cont].text = jsonValue.fields[cont].type ;
        arraylbl[cont].className = "lbl" + cont;
        arraylbl[cont].backgroundColor = "#0f0";

        // layout.GridLayout.setColumn(arraylbl[cont], num_label);
        
       // gridLayout.addChild(arraylbl[cont]);
    
      //  var column = new layout.ItemSpec(1, layout.GridUnitType.auto);
      //  gridLayout.addColumn(column);

     //   var row = new layout.ItemSpec(1, layout.GridUnitType.auto);    
       // gridLayout.addRow(row); 

      


        num_label += 1;
    }

    gridLayout.backgroundColor = "#7FFFD4";
    page.content = gridLayout;
}