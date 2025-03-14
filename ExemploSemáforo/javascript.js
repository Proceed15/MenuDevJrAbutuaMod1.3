function changeTrafficLight(){
    console.log("Hello Javascript!")
    console.log(document.getElementById("red-light"))
    console.log(document.getElementById("yellow-light"))
    console.log(document.getElementById("green-light"))

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