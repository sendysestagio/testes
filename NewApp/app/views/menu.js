var page;
var http = require("http");
var layout = require("ui/layouts/stack-layout");
var labelModule = require("ui/label");
var buttonModule = require("ui/button");
var textfieldModule = require("ui/text-field");
var dropdownModule = require("nativescript-drop-down");
var checkboxModule = require("nativescript-checkbox");
var observable = require("data/observable");

exports.principal = function(args) {
    console.log("Welcom to Hugo's Branch");
    page = args.object;
    var testOb = new observable.Observable(page);
    
};


function ola() {
    alert("oi");
}

exports.createTextView = function() {

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
                                                myFunctions.set("Function1" , myJSON.fields[i].func)

                                                console.log(myJSON.fields[i].func );
                                                buttonArray[i].on(buttonModule.Button.tapEvent, function() {
                                                    testOb[myJSON.fields[i].func]();

                                                } , this);

                                                newStackLayout.addChild(buttonArray[i]);

                                                break;

                                default:
                                        break;

                            }

                        }

                        var buttonSubmit = new buttonModule.Button();
                        buttonSubmit.text = "Submit";
                        newStackLayout.addChild(buttonSubmit);

                        page.content = newStackLayout;

                        break;

            default:
                    return;
        }

});

};