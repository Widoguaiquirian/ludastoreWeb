"use strict";
// ! FOR LESSONS NAMES //
// ? FOR REGULAR COMMENTS //

// ! SLIDE COMPONENT //
const slider = function () {
   const slides = document.querySelectorAll(".slide");
   const btnLeft = document.querySelector(".slider__btn--left");
   const btnRight = document.querySelector(".slider__btn--right");
   const dotContainer = document.querySelector(".dots");

   let curSlide = 0;
   // ? PARA QUE EL MAXIMO SEA EL NUMERO DE SLIDES USADOS //
   const maxSlide = slides.length;

   // Functions
   const createDots = function () {
      slides.forEach(function (_, i) {
         dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
      });
   };

   const activateDot = function (slide) {
      document.querySelectorAll(".dots__dot").forEach((dot) => dot.classList.remove("dots__dot--active"));

      document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
   };

   const goToSlide = function (slide) {
      slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
   };

   // Next slide
   const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
         curSlide = 0;
      } else {
         curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
   };

   const prevSlide = function () {
      if (curSlide === 0) {
         curSlide = maxSlide - 1;
      } else {
         curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
   };

   const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
   };
   init();

   // Event handlers
   btnRight.addEventListener("click", nextSlide);
   btnLeft.addEventListener("click", prevSlide);

   // ? PARA HABILITAR EL CAMBIO DE IMAGENES CON LA FLECHA //
   document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") prevSlide();
      e.key === "ArrowRight" && nextSlide();
   });

   dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
         const { slide } = e.target.dataset;
         goToSlide(slide);
         activateDot(slide);
      }
   });
};
slider();

// ! TIMER COMPONENT //
const getRemainTime = (deadline) => {
   let now = new Date(),
      remainTime = (new Date(deadline) - now + 1000) / 1000,
      remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
      reaimnHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
      remainDays = Math.floor(remainTime / (3600 * 24));

   return {
      remainDays,
      reaimnHours,
      remainMinutes,
      remainSeconds,
      remainTime,
   };
};

const countDown = (deadline, elem, finalMessage) => {
   const elemento = document.querySelector(".timer-countdown");
   const days = document.querySelector(".days");
   const hours = document.querySelector(".hours");
   const minutes = document.querySelector(".minutes");

   const timerUpdate = setInterval(() => {
      let t = getRemainTime(deadline);
      days.innerHTML = `${t.remainDays}`;
      hours.innerHTML = `${t.reaimnHours}`;
      minutes.innerHTML = `${t.remainMinutes}`;

      if (t.remainTime <= 1) {
         clearInterval(timerUpdate);
         elemento.innerHTML = finalMessage;
      } else if (t.remainMinutes <= 10) {
         elemento.style.color = "red";
         elemento.style.fontSize = "40px";
      }
   }, 1000);
};

countDown("Thu Jun 30 2022 00:00:00 GMT-0400", "timer", "SE ACABÓ TOH");

// ! GRID SLIDER PRODUCTSC COMPONENT //
const sliderGrid = function () {
   const slidesGrid = document.querySelectorAll(".slide-grid");
   const btnLeftGrid = document.querySelector(".grid__btn--left");
   const btnRightGrid = document.querySelector(".grid__btn--right");
   const dotContainerGrid = document.querySelector(".grid-dots");

   let curSlideGrid = 0;
   // ? PARA QUE EL MAXIMO SEA EL NUMERO DE SLIDES USADOS //
   const maxSlideGrid = slidesGrid.length;

   // Functions
   const createDots = function () {
      slidesGrid.forEach(function (_, i) {
         dotContainerGrid.insertAdjacentHTML("beforeend", `<button class="grid-dots__dot" data-slide="${i}"></button>`);
      });
   };

   const activateDot = function (slide) {
      document.querySelectorAll(".grid-dots__dot").forEach((dot) => dot.classList.remove("grid-dots__dot--active"));

      document.querySelector(`.grid-dots__dot[data-slide="${slide}"]`).classList.add("grid-dots__dot--active");
   };

   const goToSlide = function (slide) {
      slidesGrid.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
   };

   // Next slide
   const nextSlide = function () {
      if (curSlideGrid === maxSlideGrid - 1) {
         curSlideGrid = 0;
      } else {
         curSlideGrid++;
      }

      goToSlide(curSlideGrid);
      activateDot(curSlideGrid);
   };

   const prevSlide = function () {
      if (curSlideGrid === 0) {
         curSlideGrid = maxSlideGrid - 1;
      } else {
         curSlideGrid--;
      }
      goToSlide(curSlideGrid);
      activateDot(curSlideGrid);
   };

   const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
   };
   init();

   // Event handlers
   btnRightGrid.addEventListener("click", nextSlide);
   btnLeftGrid.addEventListener("click", prevSlide);

   // ? PARA HABILITAR EL CAMBIO DE IMAGENES CON LA FLECHA //
   document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") prevSlide();
      e.key === "ArrowRight" && nextSlide();
   });

   dotContainerGrid.addEventListener("click", function (e) {
      if (e.target.classList.contains("grid-dots__dot")) {
         const { slide } = e.target.dataset;
         goToSlide(slide);
         activateDot(slide);
      }
   });
};
sliderGrid();

// ! MODAL COMPONENT //
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".btn__show-modal");
const btnCloseModal = document.querySelector(".btn__close-modal");

// ? FUNCIONES PARA ABRIR Y CERRAR LA MODAL JUNTO CON EL OVERLAY //
// ? ABRIR MODAL //
const openModal = function (e) {
   e.preventDefault(); //Para evitar mal-functions
   modal.classList.remove("hidden"); //Sin punto en la clase
   overlay.classList.remove("hidden"); //Sin punto en la clase
};
// ? CERRAR MODAL //
const closeModal = function () {
   modal.classList.add("hidden"); //Sin punto en la clase
   overlay.classList.add("hidden"); //Sin punto en la clase
};

// ? LLAMAMOS AMBAS FUNCIONES //
btnCloseModal.addEventListener("click", closeModal);

// ? CERRAR MODAL DESDE TECLA ESCAPE //
document.addEventListener("keydown", function (e) {
   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
   }
});

btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// ! STICKY NAVIGATION COMPONENT //
const sliderContainer = document.querySelector(".slider-container");
const nav = document.querySelector(".middle-nav-menu");
const navHeight = nav.getBoundingClientRect().height;
const topMenuHeight = document.querySelector(".top-nav-menu");

const stickyNav = function (entries) {
   const [entry] = entries;

   if (!entry.isIntersecting) {
      nav.classList.add("sticky");
      topMenuHeight.classList.add("top-nav-menu-sticky");
      // esta ultima es para el espacio que agregamos al activar el sticky, para que no salte
   } else {
      nav.classList.remove("sticky");
      topMenuHeight.classList.remove("top-nav-menu-sticky");
      // esta ultima es para el espacio que agregamos al activar el sticky, para que no salte
   }
};

const headerObserver = new IntersectionObserver(stickyNav, {
   root: null,
   threshold: 0,
   rootMargin: "50px",
});

headerObserver.observe(sliderContainer);
