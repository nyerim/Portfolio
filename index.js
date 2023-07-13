/* 마우스 휠 이벤트 */
$('.event').each(function () {
  $(this).on('wheel', function (evt) {
    evt.preventDefault();

    let delta = evt.originalEvent.deltaY;
    let currentTop = null;
    const nextBox = this.nextElementSibling;
    const prevBox = this.previousElementSibling;

    if (delta > 0) {
      if (nextBox) {
        currentTop = nextBox.offsetTop;
      } else {
        currentTop = this.offsetTop;
      }
    } else {
      if (prevBox) {
        currentTop = prevBox.offsetTop;
      } else {
        return;
      }
    }

    scrollTo({
      top: currentTop,
      behavior: 'smooth',
    });
  });
});

/* swiper */
const mySwiper = new Swiper('.swiper-container', {
  loop: true,
  speed : 1000,
  mousewheel: true,
  coverflowEffect: {
  rotate: 30,
  slideShadows: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  autoplay: {
  delay: 5000,
  },
  });