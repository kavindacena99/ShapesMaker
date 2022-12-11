
function colorChange(colors){
    if(colors == 0){
        document.getElementsByClassName("round")[0].style.backgroundColor = "aqua";
    }else if(colors == 1){
        document.getElementsByClassName("round")[0].style.backgroundColor = "green";
    }else if(colors == 2){
        document.getElementsByClassName("round")[0].style.backgroundColor = "red";
    }else if(colors == 3){
        document.getElementsByClassName("round")[0].style.backgroundColor = "yellow";
    }else{
        document.getElementsByClassName("round")[0].style.backgroundColor = "blue";
    }
}
let w = 0;
let h = 0;
let tot = 0;
function changeHeight(val){
    h = val;
    document.getElementsByClassName("round")[0].style.height = val + "px";
    bb();
}
function changeWidth(val){
    w = val;
    document.getElementsByClassName("round")[0].style.width = val + "px";
    bb();
}
function changeRadius(val){
    document.getElementsByClassName("round")[0].style.borderRadius = val + "px";
}