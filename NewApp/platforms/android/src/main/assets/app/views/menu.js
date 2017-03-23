var page;
var layout = require("ui/layouts/stack-layout");
var labelModule = require("ui/label");
var buttonModule = require("ui/button");
var textfieldModule = require("ui/text-field");
var comboboxModule = require("ui/combobox"); // <----- Inventado
var checkboxModule = require("ui/checkbox"); // <----- Inventado

exports.principal = function(args) {
    console.log("Welcom to Hugo's Branch");
    page = args.object;

};

exports.createTextView = function() {
/*
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
*/

    fetch("http://10.0.7.102/teste/form.json").then(response => { return response.json(); }).then(function (r) {

        var myJSON = r;
        var fieldsSize = myJSON.fields.length;

        switch(myJSON.type){

            case "form":
                        var newStackLayout = new layout.StackLayout();
                        var labelArray = new Array(fieldsSize);
                        var textfieldArray = new Array(fieldsSize);
                        var comboArray = new Array(fieldsSize);
                        var checkboxArray = new Array(fieldsSize);
                        var buttonArray = new Array(fieldsSize);

                        for( i = 0 ; i < fieldsSize ; i++ ){
        
                            switch(myJSON.fields[i].type){

                                case "textbox":
                                                textfieldArray[i] = new textfieldModule.TextField; // <-- Not Sure
                                                textfieldArray[i].name = myJSON.fields[i].name;
                                                textfieldArray[i].val = myJSON.fields[i].val;
                                                textfieldArray[i].txt = myJSON.fields[i].txt;
                                                textfieldArray[i].List = myJSON.fields[i].List;

                                                newStackLayout.addChild(textfieldArray[i]);

                                                break;
                                
                                case "label":
                                                labelArray[i] = new textfieldModule.TextField; // <-- Not Sure
                                                labelArray[i].name = myJSON.fields[i].name;
                                                labelArray[i].val = myJSON.fields[i].val;
                                                labelArray[i].txt = myJSON.fields[i].txt;
                                                labelArray[i].List = myJSON.fields[i].List;

                                                break;

                                default:
                                        break;

                            }

                        }

                        page.content = newStackLayout;

                        break;

            default:
                    return;
        }

	});

    /*

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
    */

};