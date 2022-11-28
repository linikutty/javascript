function calculator(x){
    if(document.getElementById("input").value==0){
        document.getElementById("input").value="";
        document.getElementById("input").value=x;
    }
    else {
        document.getElementById("input").value += x;
    }
}

function Clear(){
    //console.log("work")
    document.getElementById("input").value= 0;
}

function total(){
    let num=document.getElementById("input").value;
    let b=eval(num);
    return document.getElementById("input").value=b;
}