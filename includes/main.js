let menuelement  = document.getElementById('eto');
let spok = 0;
function flash(){
  if(spok == 0){
    spok = 1;
  }else{
	menuelement.innerHTML = "ETOLL";
    spok = 0;
  }
}
setInterval(flash,1000);

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "vermenu") {
    x.className += " responsive";
	  
  } else {
  x.className = "vermenu";
	    console.log("vermenu");
  }
}