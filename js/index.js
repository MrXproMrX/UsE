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

// -------------------------------===========-------------------------------

$( ".leadership__button" ).click(function() {
  $(this ).each(function( i ) {
    if ( this.style.position !== "relative" ) {
      this.style.position = "relative";
      let Catalog_max__pro__ul_link = document.querySelectorAll('.leadership__list__item');
      for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
          Catalog_max__pro__ul_link[i].addEventListener('click',function(){
              for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
                  Catalog_max__pro__ul_link[j].classList.remove('leadership__active');
              }
              this.classList.add('leadership__active');
          })
      }
      
    } else {
      this.style.position = "";
      let Catalog_max__pro__ul_link = document.querySelectorAll('.leadership__list__item');
      for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
          Catalog_max__pro__ul_link[i].addEventListener('click',function(){
              for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
                  Catalog_max__pro__ul_link[j].classList.remove('leadership__active');
              }
              this.classList.add('leadership__active_12');
          })
      }
    }
  });
});

// -------------------------------===========-------------------------------


// Saylovchilar uchun eslatma-----===========-------------------------------

var i=0;
	$(".saylovchilar_uchun__menu__link").each(function(){
  length
	i++;
	$(this).attr("href","#mrx-"+i);
});

var i=0;
	$(".saylovchilar_uchun__item").each(function(){
  length
	i++;
	$(this).attr("id","mrx-"+i);
});


// directions_in id end
$('.saylovchilar_uchun__list .saylovchilar_uchun__item').hide();
$('.saylovchilar_uchun__list .saylovchilar_uchun__item:first').show();
$('.saylovchilar_uchun__menu li:first').addClass('saylovchilar_uchun__active');

// Change tab class and display content
$('.saylovchilar_uchun__menu a').on('click', function(event){
  event.preventDefault();
  $('.saylovchilar_uchun__menu li').removeClass('saylovchilar_uchun__active');
  $(this).parent().addClass('saylovchilar_uchun__active');
  $('.saylovchilar_uchun__list .saylovchilar_uchun__item').hide();
  $($(this).attr('href')).show();
});


// Saylovchilar uchun eslatma-----===========-------------------------------


// -------------------------------===========-------------------------------

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.axborotnomalar__pagination__item');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('axborotnomalar__pagination__active');
          }
          this.classList.add('axborotnomalar__pagination__active');

      })
  }
});

// -------------------------------===========-------------------------------


// -------------------------------===========-------------------------------

const buttons_3 = document.querySelectorAll('.msk_yangiliklari_in__share__button');
buttons_3.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('msk_yangiliklari_in__active');
    
    buttons_3.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('msk_yangiliklari_in__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------