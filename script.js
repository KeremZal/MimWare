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

  const maneganimasyon = document.querySelector('.stun')
  const manegswindowHeight = window.innerHeight;
  const manegelementTop = maneganimasyon.getBoundingClientRect().top;
  if (manegelementTop < manegswindowHeight) {
    maneganimasyon.classList.add('sars');
  }

  const maneganimasyon2 = document.querySelector('.stun2')
  const manegswindowHeight2 = window.innerHeight;
  const manegelementTop2 = maneganimasyon2.getBoundingClientRect().top;
  if (manegelementTop2 < manegswindowHeight2) {
    maneganimasyon2.classList.add('sars');
  }
  const maneganimasyon3 = document.querySelector('.stun3')
  const manegswindowHeight3 = window.innerHeight;
  const manegelementTop3 = maneganimasyon3.getBoundingClientRect().top;
  if (manegelementTop3 < manegswindowHeight3) {
    maneganimasyon3.classList.add('sars');
  }
  const maneganimasyon4 = document.querySelector('.stun4')
  const manegswindowHeight4 = window.innerHeight;
  const manegelementTop4 = maneganimasyon4.getBoundingClientRect().top;
  if (manegelementTop4 < manegswindowHeight4) {
    maneganimasyon4.classList.add('sars');
  }
  const maneganimasyon5 = document.querySelector('.stun5')
  const manegswindowHeight5 = window.innerHeight;
  const manegelementTop5 = maneganimasyon5.getBoundingClientRect().top;
  if (manegelementTop5 < manegswindowHeight5) {
    maneganimasyon5.classList.add('sars');
  }
  const maneganimasyon6 = document.querySelector('.stun6')
  const manegswindowHeight6 = window.innerHeight;
  const manegelementTop6 = maneganimasyon6.getBoundingClientRect().top;
  if (manegelementTop6 < manegswindowHeight6) {
    maneganimasyon6.classList.add('sars');
  }
  const maneganimasyon7 = document.querySelector('.stun7')
  const manegswindowHeight7 = window.innerHeight;
  const manegelementTop7 = maneganimasyon7.getBoundingClientRect().top;
  if (manegelementTop7 < manegswindowHeight7) {
    maneganimasyon7.classList.add('sars');
  }


  const leftmaneganimasyon = document.querySelector('.left-stun')
  const leftmanegswindowHeight = window.innerHeight;
  const leftmanegelementTop = leftmaneganimasyon.getBoundingClientRect().top;
  if (leftmanegelementTop < leftmanegswindowHeight) {
    leftmaneganimasyon.classList.add('sars');
  }
  const leftmaneganimasyon2 = document.querySelector('.left-stun2')
  const leftmanegswindowHeight2 = window.innerHeight;
  const leftmanegelementTop2 = leftmaneganimasyon2.getBoundingClientRect().top;
  if (leftmanegelementTop2 < leftmanegswindowHeight2) {
    leftmaneganimasyon2.classList.add('sars');
  }
  const leftmaneganimasyon3 = document.querySelector('.left-stun3')
  const leftmanegswindowHeight3 = window.innerHeight;
  const leftmanegelementTop3 = leftmaneganimasyon3.getBoundingClientRect().top;
  if (leftmanegelementTop3 < leftmanegswindowHeight3) {
    leftmaneganimasyon3.classList.add('sars');
  }
  const leftmaneganimasyon4 = document.querySelector('.left-stun4')
  const leftmanegswindowHeight4 = window.innerHeight;
  const leftmanegelementTop4 = leftmaneganimasyon4.getBoundingClientRect().top;
  if (leftmanegelementTop4 < leftmanegswindowHeight4) {
    leftmaneganimasyon4.classList.add('sars');
  }
  const leftmaneganimasyon5 = document.querySelector('.left-stun5')
  const leftmanegswindowHeight5 = window.innerHeight;
  const leftmanegelementTop5 = leftmaneganimasyon5.getBoundingClientRect().top;
  if (leftmanegelementTop5 < leftmanegswindowHeight5) {
    leftmaneganimasyon5.classList.add('sars');
  }
  const leftmaneganimasyon6 = document.querySelector('.left-stun6')
  const leftmanegswindowHeight6 = window.innerHeight;
  const leftmanegelementTop6 = leftmaneganimasyon6.getBoundingClientRect().top;
  if (leftmanegelementTop6 < leftmanegswindowHeight6) {
    leftmaneganimasyon6.classList.add('sars');
  }
  const leftmaneganimasyon7 = document.querySelector('.left-stun7')
  const leftmanegswindowHeight7 = window.innerHeight;
  const leftmanegelementTop7 = leftmaneganimasyon7.getBoundingClientRect().top;
  if (leftmanegelementTop7 < leftmanegswindowHeight7) {
    leftmaneganimasyon7.classList.add('sars');
  }

  const cardmaneganimasyon = document.querySelector('.card-1')
  const cardmanegswindowHeight = window.innerHeight;
  const cardmanegelementTop = cardmaneganimasyon.getBoundingClientRect().top;
  if (cardmanegelementTop < cardmanegswindowHeight) {
    cardmaneganimasyon.classList.add('bot');
  }

  
  const cardmaneganimasyon2 = document.querySelector('.card2')
  const cardmanegswindowHeight2 = window.innerHeight;
  const cardmanegelementTop2 = cardmaneganimasyon2.getBoundingClientRect().top;
  if (cardmanegelementTop2 < cardmanegswindowHeight2) {
    cardmaneganimasyon2.classList.add('bot');
  }

  const lastcard = document.querySelector('.last-card')
  const lastcardHeight = window.innerHeight;
  const lastcardgelementTop =  lastcard.getBoundingClientRect().top;
  if (lastcardgelementTop <  lastcardHeight) {
    lastcard.classList.add('left');
  }

  const lastcard2 = document.querySelector('.anima1')
  const lastcardHeight2 = window.innerHeight;
  const lastcardgelementTop2 =  lastcard2.getBoundingClientRect().top;
  if (lastcardgelementTop2 <  lastcardHeight2) {
    lastcard2.classList.add('right');
  }
  const lastcard3 = document.querySelector('.anima2')
  const lastcardHeight3 = window.innerHeight;
  const lastcardgelementTop3 =  lastcard3.getBoundingClientRect().top;
  if (lastcardgelementTop3 <  lastcardHeight3) {
    lastcard3.classList.add('left');
  }
  const lastcard4 = document.querySelector('.anima3')
  const lastcardHeight4 = window.innerHeight;
  const lastcardgelementTop4 =  lastcard4.getBoundingClientRect().top;
  if (lastcardgelementTop4 <  lastcardHeight4) {
    lastcard4.classList.add('right');
  }
});







var swiper = new Swiper(".mimware-video .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove: false,
});
