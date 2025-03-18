function calc(oper){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    //With oper as the parameter it gets the the id of each button
    //with the property this and returns the id for the button pressed
    //the if's them compare the id received in the oper for the current
    //operation and performs the task, it can be done in sequence by each
    if(oper.id == "+"){
        var result = num1 + num2;
    }
    else if(oper.id == "-"){
        var result = num1 - num2;
    }
    else if(oper.id == "*"){
        var result = num1 * num2;
    }
    else if(oper.id == "/"){
        var result = num1 / num2;
    }
    //For parameters such as 'sum', 'sui', 'multi' and 'divid' now know as + * - and /
    //in the button use the switch case below
    /*
    switch(op){
        case 'sum': result = num1 + num2; break;
        case 'sui': result = num1 + num2; break;
        case 'multi': result = num1 + num2; break;
        case 'divid': result = num1 + num2; break;
    }
    */
    document.getElementById("result").value = result;

    var newHistory = "<p>" + num1 + " " + oper.id + " " + num2 + " = " + result + "</p>";
    var history = document.getElementById("history");
    history.innerHTML = newHistory + history.innerHTML;

    if(history.children.length > 10){
        history.removeChild(history.childNodes[10]);
    }
    //document.getElementById("history").innerHTML += "<div>" + num1 + " " + oper.id + " " + num2 + " = " + result + "</div>";
}