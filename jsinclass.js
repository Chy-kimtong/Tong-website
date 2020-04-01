var attempt = 3
function a(){
var u = document.getElementById('u').value;
var p = document.getElementById('p').value;
if(u=='Welcome to cambodia' && p=='20192020'){
    alert("Log in successfully")
    
    return false;
}
    else{
        attempt--;
        alert ("You have left"+attempt+"attempt");
        if(attemp == 0){
            document.getElementById('u').disabled=true;
            document.getElementById('p').disabled=true;
            document.getElementById('s').disabled=true;
            return false;
}
}
}