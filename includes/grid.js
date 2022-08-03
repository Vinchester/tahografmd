var photos = document.getElementsByClassName("picture");
var cards = document.getElementsByName("colu");
var cardforce = document.getElementsByClassName("itemforce");
var gridbut = document.getElementById("gridicon");
var carda = document.getElementsByName("cardgrid");
var photowidth = document.getElementById("picture");
var describee = document.getElementsByClassName("describe");
var textdescr = document.querySelectorAll(".describe p");
var a = 0;
gridbut.onclick = function(){
    if(a == 0){
        gridbut.src = "img/gridon.png";
        for (const card of cards){
            card.setAttribute("class","w-100");
            card.style.marginBottom = "20px";
            for(const crd of carda){
                crd.setAttribute("class", "cardchange");
            }
            for(const descr of describee){
                descr.style.marginLeft = `${photowidth.offsetWidth}px`;
                descr.style.marginTop = "50px";
                descr.style.position = "absolute";
            }
            for(const text of textdescr){
                text.style.fontSize = "15px";
            }
            for(const pht of photos){
                pht.style.marginTop = "4vh";
            }
        }
        a = 1;
    }else if(a == 1){
        gridbut.src = "img/gridoff.png";
        for (const card of cards){
            card.setAttribute("class","col-sm-4 p-2");
            for(const crd of carda){
                crd.setAttribute("class", "card");
            }
        }
        for(const descr of describee){
            descr.style.marginLeft = "0px";
            descr.style.marginTop = "0px";
            descr.style.position = "relative";
        }
        for(const text of textdescr){
            text.style.fontSize = "10px";
        }
        for(const pht of photos){
            pht.style.marginTop = "0";
        }
        a = 0;
    }        
}