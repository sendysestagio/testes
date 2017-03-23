var page;
var layout = require("ui/layouts/grid-layout");
var labelModule = require("ui/label");
var buttonModule = require("ui/button");

exports.principal = function(args) {
    console.log("Welcom to Hugo's Branch");
    page = args.object;

    /*

    Json Creation of Layout

    Case
    if Json.type == "form"
    then{
        for(i = 0 ; i < Json.type.length ; i++)
        {
            Case
            if Json.type[i] == "textbox"
            then{
                var textbox"[i]" = new TextBoxModule.TextBox;
                textbox[i].id = Json.type[i].name;
                textbox[i].val = Json.type[i].val;
                textbox[i].text = Json.type[i].txt;
                textbox[i].list = Json.type[i].list;
            }

            else if Json.type[i] == "combobox"
            then{
                var combobox"[i]" = new ComboBoxModule.ComboBox;
                combobox[i].id = Json.type[i].name;
                combobox[i].val = Json.type[i].val;
                combobox[i].text = Json.type[i].txt;
                combobox[i].list = Json.type[i].list;
            }
        }
        
    }

    else if Json.type == "listview"
    then{

    }

    .
    .
    .

    page.MANDAR O LAYOUT**

    */
};

exports.createTextView = function() {

    var newGridLayout = new layout.GridLayout();
    var label1 = new labelModule.Label();
    var label2 = new labelModule.Label();
    var label3 = new labelModule.Label();
    var button1 = new buttonModule.Button();
    var firstColumn = new layout.ItemSpec(1, layout.GridUnitType.auto);
    var secondColumn = new layout.ItemSpec(1, layout.GridUnitType.auto);
    var firstRow = new layout.ItemSpec(1, layout.GridUnitType.auto);
    var secondRow = new layout.ItemSpec(1, layout.GridUnitType.auto);

    label1.text = "Olá";
    label1.id = "label1";

    label2.text = "Como vai?";
    label1.id = "label2";

    label3.text = "Tudo bem?";
    label1.id = "label3";

    layout.GridLayout.setColumn(label1, 0);
    layout.GridLayout.setColumn(label2, 1);
    layout.GridLayout.setRow(label3, 1);
    layout.GridLayout.setColumn(label3, 2);
    
    fetch("http://10.0.7.102/teste/form.json").then(response => { return response.json(); }).then(function (r) {

        var myJSON = r;

        switch(myJSON){

            case "form":
                        var newGridLayout = new layout.GridLayout();

                        for( i = 0 ; i < myJSON.fields.length ; i++ ){

                            switch(myJSON.fields[i].type){

                                case "textbox":
                                                var textboxY = new textboxModule.Textbox
                                                textboxY.name = myJSON.fields[i].name;
                                                textboxY.val = myJSON.fields[i].val;
                                                textboxY.txt = myJSON.fields[i].txt;
                                                textboxY.List = myJSON.fields[i].List;

                                                break;

                            }

                        }

                        break;

            default:
                    return;
        }

	});

    newGridLayout.addChild(label1);
    newGridLayout.addChild(label2);
    newGridLayout.addChild(label3);
    
    newGridLayout.addColumn(firstColumn);
    newGridLayout.addColumn(secondColumn);
    newGridLayout.addRow(firstRow);
    newGridLayout.addRow(secondRow);

    page.content = newGridLayout;

    page.getViewById("label1").text = "Comé";

    console.log("oi");
 
};