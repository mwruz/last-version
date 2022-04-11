$('.main-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.option-images__list'
  });
  $('.option-images__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.main-image',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            dots:false,
            infinite:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots:false,
            infinite:false
          }
        }
      ]
  });



    let mainImage = document.querySelector(".main-image");
    let imageItem = document.querySelectorAll(".option-image__item");

    imageItem.forEach(item => {
      item.addEventListener("click", ()=> {
        let imageLink = item.querySelector("a").getAttribute("data-url");
        
        mainImage.src=imageLink;

      })


    })

// INTERACTIVE MAP 

let buttons = document.querySelectorAll('.map-button');
let firstMap = document.querySelector('.mobile-map');
let secondMap = document.querySelector('.interactive-map'); 


buttons.forEach((item, index) => {
  item.addEventListener("click",() => {
    if(index == 0) {
      secondMap.classList.remove('interactive-map-active');
      buttons[1].classList.remove('map-button-active');
      firstMap.classList.add('mobile-map-active');
      item.classList.add('map-button-active');
    }

    if(index == 1) {
      firstMap.classList.remove('mobile-map-active');
      buttons[0].classList.remove('map-button-active');
      secondMap.classList.add('interactive-map-active');
      item.classList.add('map-button-active');
    }
  })
})
    