var labelModule = require("ui/label");
var layout = require("ui/layouts/grid-layout");

exports.principal = function(args) {

    page = args.object;

    var gridLayout = new layout.GridLayout();

    var num_label = 0;
    
    for (cont = 0; cont <= 9; cont++) {
        num_label += 1;

        // array
        var arraylbl = new Array(cont);

        // array label
        arraylbl[cont] = new labelModule.Label();

        // text label
        arraylbl[cont].text = "Text" + cont;

        // name label
        arraylbl[cont].className = "lbl" + cont;


        // enquanto o contador é menor ou igual que 4 fica na linha 0
        if (cont <= 4) {
            layout.GridLayout.setColumn(arraylbl[cont], cont);
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

        console.info(arraylbl[cont].text);
    }

    page.content = gridLayout;
}