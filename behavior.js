document.addEventListener("DOMContentLoaded", function(event) {
    var isImageSmall= true;
  
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
    if (isImageSmall) {
      thumbnailElement.className ="";
      isImageSmall= false;
    } else {
      thumbnailElement.className ="small";
      isImageSmall= true; 
    }
  });
  });
