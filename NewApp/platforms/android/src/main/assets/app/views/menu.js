var labelModule = require("ui/label");
var layout = require("ui/layouts/grid-layout");
var stackLayout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");

var x = 0;

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

        switch (x) {
            case 0:
                drawStack(valor, numTypes);
                break;
            case 1:
                drawGrid(valor, numTypes);
                break;
        }      
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
        arraylbl[cont].width = 100; 

        layout.GridLayout.setColumn(arraylbl[cont], num_label);
        gridLayout.addChild(arraylbl[cont]);
    
        var column = new layout.ItemSpec(1, layout.GridUnitType.auto);
        gridLayout.addColumn(column);

        var row = new layout.ItemSpec(1, layout.GridUnitType.auto);    
        gridLayout.addRow(row);        
        num_label += 1;
   }

   var btn = new buttonModule.Button();
    btn.text = "Change Layout";
    btn.on(buttonModule.Button.tapEvent, function() {
        changeLayout();
    });

    layout.GridLayout.setRow(btn, 1);
    gridLayout.addChild(btn);

    gridLayout.backgroundColor = "#7FFFD4";
    page.content = gridLayout;
}

drawStack = function(jsonValue, numCol) {
    var stack = new stackLayout.StackLayout();
    var num_label = 0;

    for (cont = 0; cont < numCol; cont++) {
        var arraylbl = new Array(cont);
        arraylbl[cont] = new labelModule.Label();
        arraylbl[cont].text = jsonValue.fields[cont].type ;
        arraylbl[cont].className = "lbl" + cont;
        arraylbl[cont].backgroundColor = "#0f0";
        arraylbl[cont].width = 100;
        stack.addChild(arraylbl[cont]);
        num_label += 1;
    }

    var btn = new buttonModule.Button();
    btn.text = "Change Layout";
    btn.on(buttonModule.Button.tapEvent, function() {
       changeLayout();
    });

    stack.addChild(btn);
    page.content = stack;
}

changeLayout = function() {
    if (x == 0) {
        x = 1;
    }
    else if (x == 1) {
        x = 0;
    }
    readJson();
}