var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1} 
//     slides[slideIndex-1].style.display = "block"; 
//     setTimeout(showSlides, 4000); // Change image every 2 seconds
// }

// function heartRed(){
//   var heart=document.getElementsByClassName('red-heart');
//   heart.src='images/like.png';
// }

        

        // LIKE


var men=document.getElementById('men');


men.onclick = function(event) {
  var target = event.target; 
        if (!event.target.classList.contains('like')) return;
 imgsrc(target); 
};


 function imgsrc(image){
          
        if (image.src.indexOf("gray-like.png")>0){

               image.src="images/red-like.png"
        }else{
               image.src="images/gray-like.png"
        }

};


     // FORM


var formElement=document.forms['INFO'];
    formElement.onsubmit=validateInfoForm;

    function validateInfoForm() {
        var formElement=document.forms['INFO'];

        var fioElement=formElement.elements['FIO'];
        var pswElement=formElement.elements['PASSWORD'];

        var fioValue=fioElement.value;
        var pswValue=parseInt(pswElement.value);

        if ( fioValue.length>30 ) {
            alert('Введите пожалуйста Username не длиннее 30 символов!');
            fioElement.focus();
            return false;
        }

        if ( isNaN(pswValue) ) {
            alert('Введите пожалуйста в поле PASSWORD корректную цифру!');
            pswElement.focus();
            return false;
        }
}


var formEl=document.forms['SUBSCRIBE'];
    formEl.onsubmit=validateInfoForm1;

    function validateInfoForm1() {
        var formElement=document.forms['SUBSCRIBE'];

        var fioElement=formElement.elements['MAIL'];
        
        var fioValue=fioElement.value;
       
        if ( fioValue.length>30 ) {
            alert('Введите пожалуйста Username не длиннее 30 символов!');
            fioElement.focus();
            return false;
        }
}