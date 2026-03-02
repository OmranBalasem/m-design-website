var swiper = new Swiper(".servicesSwiper", {
  loop: true,
  spaceBetween: 30,
  autoplay: { delay: 2500 },
  speed: 1200,
  slidesPerView: 3,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  },
});

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    document.body.classList.add("show");
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 600);
  }, 1700);
};
