function getparagraph(){
    var inputs = [];
    for(var i=1;i<=6;i++){
        inputs.push(document.getElementById("Name"+i).value);  
    }
    inputs.join(" ");
    document.getElementById("display2").innerHTML=inputs.join(" ");
}