var labelModule = require("ui/label");
var layout = require("ui/layouts/grid-layout");

exports.principal = function(args) {
    page = args.object;

    readJson();
    drawGrid();

}

drawGrid = function() {
    var gridLayout = new layout.GridLayout();

    var num_label = 0;
    
    for (cont = 0; cont <= 9; cont++) {
        // array
        var arraylbl = new Array(cont);

        // array label
        arraylbl[cont] = new labelModule.Label();

        // text label
        arraylbl[cont].text = "Text" + cont;

        // name label
        arraylbl[cont].className = "lbl" + cont;

        // color label
        arraylbl[cont].backgroundColor = "#0f0";

        // enquanto o contador é menor ou igual que 4 fica na linha 0
        if (cont <= 4) {
            layout.GridLayout.setColumn(arraylbl[cont], num_label);
        }

        // quando o contador chegar a 5, a linha muda para 1
        else if (cont == 5) {
            num_label = 1;
            layout.GridLayout.setRow(arraylbl[cont], 1);
            num_label = 0;
        }
        else {
            layout.GridLayout.setRow(arraylbl[cont], 1);    
            layout.GridLayout.setColumn(arraylbl[cont], num_label);
        }
        
        gridLayout.addChild(arraylbl[cont]);
    
        var column = new layout.ItemSpec(1, layout.GridUnitType.auto);
        gridLayout.addColumn(column);

        var row = new layout.ItemSpec(1, layout.GridUnitType.auto);    
        gridLayout.addRow(row); 
        num_label += 1;
        console.info(arraylbl[cont].text);
    }

    gridLayout.backgroundColor = "#f00";
    page.content = gridLayout;
}

readJson = function() {
    fetch("http://10.0.7.102/teste/form.json").then(response => { 
        return response.json();
     })
     .then(function (r) {
        // get number of types
        var valor = r;
        var numTypes = Object.keys(valor.type).length;
        console.info("Types: " + numTypes);
    
        porraMeu(valor, numTypes);

	});    
}

porraMeu = function(valueJson, number) {
    console.info(number);
    console.info(JSON.stringify(valueJson));

    var testingArray = new Array(number);        
    console.info("passou o array");

    // get name of types
    for (i = 0; i <= number; i++) {
         testingArray[i] = valueJson.fields[i].type;
         console.info(testingArray[i]);
    }
}