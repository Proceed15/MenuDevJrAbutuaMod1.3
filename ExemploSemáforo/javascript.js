function changeTrafficLight(){
    //If's e Elses
    if (document.getElementById("yellow-light").className==="yellow-light yellow-light"){
        document.getElementById("red-light").className="red-light red-light";
        document.getElementById("yellow-light").className="yellow-light light-off";         
    }
    else {
        if (document.getElementById("red-light").className==="red-light red-light"){
            document.getElementById("red-light").className="light light-off";     
            document.getElementById("green-light").className="green-light green-light"; 
        }
        else {
            document.getElementById("green-light").className="green-light light-off";
            document.getElementById("yellow-light").className="yellow-light yellow-light";
        }
    }
}