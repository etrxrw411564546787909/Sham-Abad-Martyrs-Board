function popup() { 
    document.getElementById("eskanr").style.display = "block";
    document.getElementById("eskanr").style.top = "851px";

}

function close(){
    document.getElementById("eskanr").style.display = "none";
}

function popup_rosta(){
    document.getElementById("rosta").style.display = "block";
    document.getElementById("rosta").style.top = "851px";
}

function close_rosta(){
    document.getElementById("rosta").style.display = "none";
}

let personlist = [];
function save() {
    let person = {
        firstname: ""
        ,Number:""
        , eskan: ""
        , input: ""
        , output: ""
        , tedad: ""

    }
    person.firstname = document.getElementById("firstname").value;
    person.Number = document.getElementById("Number").value;
    person.eskan = document.getElementById("eskan").value;
    person.input = document.getElementById("input").value;
    person.output = document.getElementById("output").value;
    person.tedad = document.getElementById("tedad").value;
    personlist.push(person)

    show();
    clear();

}

function show() {
    let html = "";
    for (m = 0; m < personlist.length; m++) {

        let person = personlist[m];

        html +=
            '<tr>'
            + "<td>"
            + person.firstname
            + "</td>"
            + "<td>"
            + person.Number
            + "</td>"
            + "<td>"
            + person.eskan
            + "</td>"
            + "<td>"
            + person.input
            + "</td>"
            + "<td>"
            + person.output
            + "</td>"
            + "<td>"
            + person.tedad
            + "</td>"
            + "</tr>"
    }


    document.getElementById("result").innerHTML = html;
}

function clear() {
    document.getElementById("firstname").value = "";
    document.getElementById("Number").value = "";
    document.getElementById("eskan").value = "";
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
    document.getElementById("tedad").value = "";

}

function eskaner(){
    document.getElementById("etaa").style.display = "block";
}

function close_skaner(){
    document.getElementById("etaa").style.display = "none";
}