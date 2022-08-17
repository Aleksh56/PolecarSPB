$(document).ready(function(){

    // Hero slider

    $('.hero__slider').slick({
      arrows: true,
      autoplay: true,
      adaptiveHeight: true,
      mobileFirst: true
    });

    function deleteTextInSlickSliderButtons(){
      $('.slick-prev').html('<i class="fa-solid fa-angle-left"></i>')
      $('.slick-next').html('<i class="fa-solid fa-angle-right"></i>')
    }

    deleteTextInSlickSliderButtons()
  });