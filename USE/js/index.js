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


  if (mobileVersion) {
    mobileVersion.addEventListener("click", () => {
        const newWin = window.open("/", "example", "width=480px,height=600px");
        newWin.onload = function () {
            let div = newWin.document.createElement("div"),
                body = newWin.document.body;
            body.insertBefore(div, body.firstChild);
        };
    });
}