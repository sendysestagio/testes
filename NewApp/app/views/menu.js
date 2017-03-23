var page;
var http = require("http");
var layout = require("ui/layouts/stack-layout");
var labelModule = require("ui/label");
var buttonModule = require("ui/button");
var textfieldModule = require("ui/text-field");
var dropdownModule = require("nativescript-drop-down");
var checkboxModule = require("nativescript-checkbox");

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

    fetch("http://10.0.7.102/teste/form2.json").then(response => { return response.json(); }).then(function (r) {

        var myJSON = r;
        var fieldsSize = myJSON.fields.length;

        switch(myJSON.type){

            case "form":
                        var newStackLayout = new layout.StackLayout();
                        var labelArray = new Array(fieldsSize);
                        var textfieldArray = new Array(fieldsSize);
                        var dropdownArray = new Array(fieldsSize);
                        var checkboxArray = new Array(fieldsSize);
                        var buttonArray = new Array(fieldsSize);

                        for( i = 0 ; i < fieldsSize ; i++ ){
        
                            switch(myJSON.fields[i].type){

                                case "textbox":
                                                textfieldArray[i] = new textfieldModule.TextField;
                                                textfieldArray[i].name = myJSON.fields[i].name;
                                                textfieldArray[i].val = myJSON.fields[i].val;
                                                textfieldArray[i].txt = myJSON.fields[i].txt;
                                                textfieldArray[i].List = myJSON.fields[i].List;

                                                newStackLayout.addChild(textfieldArray[i]);

                                                break;
                                
                                case "label":
                                                labelArray[i] = new labelModule.Label;
                                                labelArray[i].name = myJSON.fields[i].name;
                                                labelArray[i].val = myJSON.fields[i].val;
                                                labelArray[i].txt = myJSON.fields[i].txt;
                                                labelArray[i].List = myJSON.fields[i].List;

                                                newStackLayout.addChild(labelArray[i]);

                                                break;

                                case "combo":
                                                dropdownArray[i] = new dropdownModule.DropDown;
                                                dropdownArray[i].name = myJSON.fields[i].name;
                                                dropdownArray[i].val = myJSON.fields[i].val;
                                                dropdownArray[i].txt = myJSON.fields[i].txt;

                                                dropdownArray[i].items = "";

                                                for( j = 0 ; j < myJSON.fields[i].List.length ; j++ ){
                                                    dropdownArray[i].items += myJSON.fields[i].List[j].val;

                                                }

                                                newStackLayout.addChild(dropdownArray[i]);

                                                break;

                                case "checkbox":
                                                checkboxArray[i] = new checkboxModule.CheckBox;
                                                checkboxArray[i].name = myJSON.fields[i].name;
                                                checkboxArray[i].val = myJSON.fields[i].val;
                                                checkboxArray[i].txt = myJSON.fields[i].txt;
                                                checkboxArray[i].List = myJSON.fields[i].List;

                                                newStackLayout.addChild(checkboxArray[i]);

                                                break;

                                case "button":
                                                buttonArray[i] = new buttonModule.Button;
                                                buttonArray[i].name = myJSON.fields[i].name;
                                                buttonArray[i].val = myJSON.fields[i].val;
                                                buttonArray[i].txt = myJSON.fields[i].txt;
                                                buttonArray[i].List = myJSON.fields[i].List;

                                                console.log(myJSON.fields[i].func);
                                                switch(myJSON.fields[i].func){

                                                        case "alert":
                                                                     buttonArray[i].on(buttonModule.Button.tapEvent, function() {
                                                                        alert("Oi");
                                                                     });
                                                                     break;

                                                        default:
                                                                break;
                                                    }

                                                newStackLayout.addChild(buttonArray[i]);

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