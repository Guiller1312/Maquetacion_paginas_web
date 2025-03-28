const swiperEl = document.querySelector('swiper-container');
const buttonEl = document.querySelector('#but1');
const buttonE2 = document.querySelector('#but2');
buttonEl.addEventListener('click', () => {
	swiperEl.swiper.slideNext();
});
buttonE2.addEventListener('click', () => {
	swiperEl.swiper.slidePrev();
});