$(function(){



   $(".img_hover").hover(function(){
   $(".img1").before('<img src="images/cat-eye.jpeg" alt="" class="img2" >')
   .fadeOut("slow");
 },
   function(){
 $(".img1").fadeIn("slow",function(){
  $(".img2").remove();
 });
   });

});
