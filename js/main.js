let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // keyboard: {
  //   enabled: true,
  //   // onlyInViewport: false,
  // },
});

let reviewsSlider = new Swiper(".reviews-swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 10000,
  },
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-rev",
    clickable: true,
  },
});

let partnersSlider = new Swiper(".partners-slider", {
  slidesPerView: 3,
  // keyboard: {
  //   enabled: true,
  //   // onlyInViewport: false,
  // },
  autoplay: {
    delay: 7000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination-partners",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 40,
    },
    1124: {
      slidesPerView: 3,
      // spaceBetween: 50,
    },
  },
});

let modalGallerySlider = new Swiper(".modal-gallery-slider", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-rev",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    // onlyInViewport: false,
  },
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  // const nav = header.querySelector(".nav");
  header.classList.toggle("top-60", window.scrollY > 100);
  // nav.classList.toggle("sticky", window.scrollY > 100);
});

function counterScroll() {
  const statistics = document.querySelector(".statistics");

  if (statistics) {
    let counterItem = document.querySelectorAll("#achv-target");

    counterItem.forEach((element) => {
      const dataTarget = element.getAttribute("data-target");
      let number = 0;
      element.textContent = number;

      function counter() {
        function updateCounter() {
          number++;

          if (number < dataTarget) {
            element.textContent = number;
            setTimeout(updateCounter, 20);
          } else {
            element.textContent = dataTarget;
          }
        }
        updateCounter();
      }
      window.addEventListener("scroll", () => {
        let contentPos = statistics.getBoundingClientRect().top;
        let screenPos = window.pageYOffset;
        if (contentPos < screenPos) {
          counter();
        }
      });
    });
  }
}

counterScroll();

function burgerMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("_active");
    navLinks.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
}

burgerMenu();

function modalGallery() {
  const modalWrapper = document.querySelector(".gallery-modal-window ");
  if (modalWrapper) {
    const modalContent = document.querySelector(".modal-gallery-slider");
    const openBtn = document.querySelectorAll(".open-modal-gallery");
    const closeBtn = document.querySelectorAll(".close-modal-gallery");

    openBtn.forEach((element) => {
      element.addEventListener("click", openModal, false);
    });

    closeBtn.forEach((element) => {
      element.addEventListener("click", closeModal, false);
    });

    window.addEventListener("click", function (event) {
      if (event.target == modalWrapper) {
        closeModal();
      }
    });

    function openModal() {
      modalWrapper.classList.remove("display-n");
      setTimeout(() => {
        modalContent.classList.remove("scal-03");
      }, 100);
      document.body.classList.add("_lock");
    }

    function closeModal() {
      modalWrapper.classList.add("display-n");
      setTimeout(() => {
        modalContent.classList.add("scal-03");
      }, 100);
      document.body.classList.remove("_lock");
    }
  }
}
modalGallery();
