function calc(oper){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var sum = document.getElementById("sum");
    var sui = document.getElementById("sui");
    var multi = document.getElementById("multi");
    var divid = document.getElementById("divid");

    if(oper.id == "sum"){
        var result = num1 + num2;
    }
    else if(oper.id == "sui"){
        var result = num1 - num2;
    }
    else if(oper.id == "multi"){
        var result = num1 * num2;
    }
    else if(oper.id == "divid"){
        var result = num1 / num2;
    }
    document.getElementById("result").value = result;

}