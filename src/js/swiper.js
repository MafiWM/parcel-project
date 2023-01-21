
// Initialize Swiper 

  
    var swiper = new Swiper(".mySwiperGallery", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
 

 
    var swiper = new Swiper(".mySwiperRewiews", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
