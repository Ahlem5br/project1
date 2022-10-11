
function calculateSum(){
    var a=document.getElementById("firstNumber").value;
    var b=document.getElementById("secondNumber").value;
    document.getElementById("resultSum").innerHTML="The result=  "+(parseInt(a)+parseInt(b))
    
}

function calculateSubtract(){
    var a=document.getElementById("firstNumbersubt").value;
    var b=document.getElementById("secondNumbersubt").value;
    document.getElementById("resultSub").innerHTML="The result=  "+(parseInt(a)-parseInt(b))
    
}

function calculateMulti(){
    var a=document.getElementById("firstNumbermult").value;
    var b=document.getElementById("secondNumbermult").value;
    document.getElementById("resultmulti").innerHTML="multiplication=  "+(parseInt(a)*parseInt(b))
    
}
function calculateFact(){
    if((document.getElementById("Number").value).length===0){
        alert('Enter a valid number!')
    }
    else{
    var a=parseInt(document.getElementById("Number").value);
   var b=1

for (var i =1;i<=a;i++){
 b=b*i    
}
    }

document.getElementById("resultfact").innerHTML="The result=" + b

}


