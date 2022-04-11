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



    // $('.links__list').slick({
    //     dots: true,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 1000,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   });
    