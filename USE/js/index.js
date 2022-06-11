$(document).ready(function(){
    $('.header__from__true').click(function(){
      $('.header__form').fadeTo(500, 1)
      $('.header__form').css('z-index','555').css('opacity','1').css('margin','0')
    })
  });
  
  $(document).ready(function(){
    $('.header__button__false').click(function(){
        $('.header__form').fadeTo(500, 1)
        $('.header__form').css('z-index','0').css('opacity','0').css('margin','-100%')
    })
  });

  $(document).ready(function(){
    $('.burger__start').click(function(){
      $('.header__menu').fadeTo(500, 1)
      $('.header__menu').css('display','block')
      $('.burger__end').css('display','block')
      $('.burger__start').css('display','none')
    })
  });
  
  $(document).ready(function(){
    $('.burger__end').click(function(){
      $('.header__menu').fadeTo(500, 1)
      $('.header__menu').css('display','none')
      $('.burger__end').css('display','none')
      $('.burger__start').css('display','block')
    })
  });