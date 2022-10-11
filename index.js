$("#mainPage").css({"color":"rgb(28, 30, 117)", "text-align":"center","font-size": "300%"})
$(".operator").css({"color":"black", "text-align":"left","font-size": "200%"})
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
    var a=parseInt(document.getElementById("Number").value);
   var b=1
for (var i =1;i<=a;i++){
 b=b*i    
}

document.getElementById("resultfact").innerHTML="The result=" + b

}


