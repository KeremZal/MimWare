const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active'); -
    offScreenMenu.classList.toggle('active');
})

var swiper = new Swiper(".banner-bg .swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },

});


var swiper = new Swiper(".video .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener('scroll', function () {
  const animasyonOge = document.querySelector('.indust-boxs');
  const windowHeight = window.innerHeight;
  const elementTop = animasyonOge.getBoundingClientRect().top;
  if (elementTop < windowHeight) {
    animasyonOge.classList.add('animation');

  }

  const animasyonOge2 = document.querySelector('.indust-boxs2');
  const windowHeight2 = window.innerHeight;
  const elementTop2 = animasyonOge2.getBoundingClientRect().top;
  if (elementTop2 < windowHeight2) {
    animasyonOge2.classList.add('animation2');
  }

  const animasyonOge3 = document.querySelector('.indust-boxs3');
  const windowHeight3 = window.innerHeight;
  const elementTop3 = animasyonOge3.getBoundingClientRect().top;
  if (elementTop3 < windowHeight3) {
    animasyonOge3.classList.add('animation2');
  }


  const animasyonOge4 = document.querySelector('.indust-boxs4');
  const windowHeight4 = window.innerHeight;
  const elementTop4 = animasyonOge4.getBoundingClientRect().top;
  if (elementTop4 < windowHeight4) {
    animasyonOge4.classList.add('animation4');
  }

  const elipsesanimasyon1 = document.querySelector('.right1');
  const elipswindowHeight1 = window.innerHeight;
  const elipselementTop1 = elipsesanimasyon1.getBoundingClientRect().top;
  if (elipselementTop1 < elipswindowHeight1) {
    elipsesanimasyon1.classList.add('elipses-animation1');
  }

  const elipsesanimasyon2 = document.querySelector('.right2');
  const elipswindowHeight2 = window.innerHeight;
  const elipselementTop2 = elipsesanimasyon1.getBoundingClientRect().top;
  if (elipselementTop2 < elipswindowHeight2) {
    elipsesanimasyon2.classList.add('elipses-animation1');
  }
  const elipsesanimasyon3 = document.querySelector('.right3');
  const elipswindowHeight3 = window.innerHeight;
  const elipselementTop3 = elipsesanimasyon3.getBoundingClientRect().top;
  if (elipselementTop3 < elipswindowHeight3) {
    elipsesanimasyon3.classList.add('elipses-animation1');
  }
  const elipsesanimasyon4 = document.querySelector('.right4');
  const elipswindowHeight4 = window.innerHeight;
  const elipselementTop4 = elipsesanimasyon4.getBoundingClientRect().top;
  if (elipselementTop4 < elipswindowHeight4) {
    elipsesanimasyon4.classList.add('elipses-animation1');
  }

  const elipsesanimasyon5 = document.querySelector('.right5');
  const elipswindowHeight5 = window.innerHeight;
  const elipselementTop5 = elipsesanimasyon5.getBoundingClientRect().top;
  if (elipselementTop5 < elipswindowHeight5) {
    elipsesanimasyon5.classList.add('elipses-animation1');
  }

  const elipsesanimasyon6 = document.querySelector('.left1');
  const elipswindowHeight6 = window.innerHeight;
  const elipselementTop6 = elipsesanimasyon6.getBoundingClientRect().top;
  if (elipselementTop6 < elipswindowHeight6) {
    elipsesanimasyon6.classList.add('elipses-animation2');
  }

  const elipsesanimasyon7 = document.querySelector('.left2');
  const elipswindowHeight7 = window.innerHeight;
  const elipselementTop7 = elipsesanimasyon7.getBoundingClientRect().top;
  if (elipselementTop7 < elipswindowHeight7) {
    elipsesanimasyon7.classList.add('elipses-animation2');
  }

  const elipsesanimasyon8 = document.querySelector('.left3');
  const elipswindowHeight8 = window.innerHeight;
  const elipselementTop8 = elipsesanimasyon8.getBoundingClientRect().top;
  if (elipselementTop8 < elipswindowHeight8) {
    elipsesanimasyon8.classList.add('elipses-animation2');
  }

  const elipsesanimasyon9 = document.querySelector('.left4');
  const elipswindowHeight9 = window.innerHeight;
  const elipselementTop9 = elipsesanimasyon9.getBoundingClientRect().top;
  if (elipselementTop9 < elipswindowHeight9) {
    elipsesanimasyon9.classList.add('elipses-animation2');
  }

  const elipsesanimasyon10 = document.querySelector('.left5');
  const elipswindowHeight10 = window.innerHeight;
  const elipselementTop10 = elipsesanimasyon10.getBoundingClientRect().top;
  if (elipselementTop10 < elipswindowHeight10) {
    elipsesanimasyon10.classList.add('elipses-animation2');
  }

  const elipsesanimasyon11 = document.querySelector('.deneme20');
  const elipswindowHeight11 = window.innerHeight;
  const elipselementTop11 = elipsesanimasyon11.getBoundingClientRect().top;
  if (elipselementTop11 < elipswindowHeight11) {
    elipsesanimasyon11.classList.add('opacity-animation');
  }

});







var swiper = new Swiper(".mimware-video .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove: false,
});
