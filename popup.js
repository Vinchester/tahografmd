/*var modal = document.getElementById("myModal");
var chechID = document.getElementsByClassName("Images");
var modalImg = document.getElementById("img01");
var captionText = document.getElementsByClassName("caption");
function popup (clicked_id){
  var img = document.getElementById(clicked_id);

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() {
    modal.style.display = "none";
  }
}*/ //If you want to add a popup effect on your image ,then you need to add this on your image "onclick="popup(this.id)""
let screenWidth = window.screen.width;
console.log(screenWidth);
if (screenWidth >= 480){
  function changephoto(photo_id){
    document.getElementById(photo_id).style.display = "none";
    document.getElementById(photo_id + "S").style.display = "inline-block";
    document.getElementById(photo_id + "S").classList.add('transition');
  }

  function changephotoback(photo_idSec){
    document.getElementById(photo_idSec).style.display = "none";
    document.getElementById(photo_idSec.slice(0 ,-1)).style.display = "inline-block";
  }

  let images = document.querySelectorAll('.carousel img');
  let current = 0;

  window.addEventListener('load',slider());
  setInterval(slider,5000);
  function slider(){
    for (let i = 0;i < images.length;i++){
      images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');

    if(current+1 == images.length){
      current=0;
    }
    else{
      current++;
    }
  }
}
if(screenWidth < 480){
  //onclick="popupphoto(this.id)"
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = document.getElementById("img01");
  function popupphoto(value){
      img = document.getElementById(value);
      modal.style.display = "block";
      modalImg.src = img.src;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
  modal.style.display = "none";
  }   
}
// document.querySelector(".carousel").onclick = slider;