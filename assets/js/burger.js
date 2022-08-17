$('.header__menu-burger').click(() => {
    $('.header__menu-slide').addClass("header__slide-active", 2000)
  });

  $('.slide-xmark').click(() => {
    $('.header__menu-slide').removeClass("header__slide-active", 2000)
  });