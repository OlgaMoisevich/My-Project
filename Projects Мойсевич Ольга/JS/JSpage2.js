var women=document.getElementById('women');


women.onclick = function(event) {
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
