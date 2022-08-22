const element = document.querySelector("#gallery-left__type");
const choices = new Choices(element, {
  shouldSort: false,
  searchEnabled: false,
});

$(".accordion").accordion({
  heightStyle: "content",
  active: 0,
  collapsible: false,
});

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.75846806898367, 37.60108849999989],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
    controls: [],
  });
  var myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-point.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10],
    }
  );
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add("zoomControl", {
    float: "none",
    size: "small",
    position: {
      top: "300px",
      right: "11px",
    },
  });
  myMap.controls.add("geolocationControl", {
    float: "none",
    position: {
      top: "380px",
      right: "11px",
    },
  });
}




document.addEventListener("DOMContentLoaded", () => {
  event.preventDefault();

  let menu = document.querySelector(".menu-top__bar");
  let burger = document.querySelector(".menu__btn");
  let menuLinks = document.querySelectorAll(".menu-top__link");
  let menuForm = document.querySelector(".menu-top__form");
  burger.onclick = function () {
    menu.classList.toggle("menu-top__bar-active");
    burger.classList.toggle("menu__btn-open");
    menuForm.classList.remove("menu-top__form-active");
    document.body.classList.toggle("stop");
  };

  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", () => {
      document.body.classList.remove("stop");
      menu.classList.remove("menu-top__bar-active");
      burger.classList.remove("menu__btn-open");
    });
  });

  let menuSearch = document.querySelector(".menu-top__search");

  menuSearch.addEventListener("click", () => {
    menuForm.classList.add("menu-top__form-active");
  });

  let formClose = document.querySelector(".menu-top__close");
  formClose.addEventListener("click", () => {
    menuForm.classList.remove("menu-top__form-active");
  });

  let menuBottomBtns = document.querySelectorAll(".menu-bottom__btn");
  let dropdowns = document.querySelectorAll(".menu-bottom__dropdown");
  menuBottomBtns.forEach((btn) => {
    let dropdown = btn.parentElement.querySelector(".menu-bottom__dropdown");
    btn.addEventListener("click", () => {
      btn.classList.toggle("menu-bottom__btn-active");
      dropdown.classList.toggle("menu-bottom__dropdown-active");

      menuBottomBtns.forEach((item) => {
        if (btn != item) {
          item.classList.remove("menu-bottom__btn-active");
        }
      });

      dropdowns.forEach((drop) => {
        if (dropdown != drop) {
          drop.classList.remove("menu-bottom__dropdown-active");
        }
      });
    });
  });

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".menu-bottom__list")) {
      document.querySelectorAll(".menu-bottom__dropdown").forEach((el) => {
        el.classList.remove("menu-bottom__dropdown-active");
      });
      document.querySelectorAll(".menu-bottom__btn").forEach((el) => {
        el.classList.remove("menu-bottom__btn-active");
      });
    }
  });

  document.querySelectorAll(".simplebar-content-wrapper").forEach((el) => {
    el.removeAttribute("tabindex");
    el.removeAttribute("aria-label")
  })

  document.querySelectorAll(".gallery__wrap").forEach(function (wrap) {
    wrap.addEventListener("click", () => {
      document.querySelector(".gallery-modal").classList.add("opened");
      document.body.classList.toggle("stop");
    });
  });

  document
    .querySelector(".gallery-modal")
    .addEventListener("click", (event) => {
      let element = event.target;
      if (
        element.closest(".gallery-modal__btn") ||
        element.classList.contains("gallery-modal")
      ) {
        document.querySelector(".gallery-modal").classList.remove("opened");
        document.body.classList.remove("stop");
      }
    });

  document.querySelectorAll(".catalog__era").forEach(function (catalogBtn) {
    catalogBtn.addEventListener("click", () => {
      let element = catalogBtn.children[0];
      if (element.classList.contains("ui-state-active")) {
        catalogBtn.classList.add("catalog__era-active");
      } else {
        catalogBtn.classList.remove("catalog__era-active");
      }
      document.querySelectorAll(".catalog__era").forEach(function (btn) {
        if (catalogBtn != btn) {
          btn.classList.remove("catalog__era-active");
        }
      });
    });
  });

  document
    .querySelectorAll(".catalog-desc__author")
    .forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (e) {
        const path = e.currentTarget.dataset.path;
        document
          .querySelectorAll(".catalog-desc__author")
          .forEach(function (btn) {
            btn.classList.remove("catalog-desc__author-active");
          });
        e.currentTarget.classList.add("catalog-desc__author-active");
        document.querySelectorAll(".catalog__left").forEach(function (tabsBtn) {
          tabsBtn.classList.remove("catalog__left-active");
        });
        document
          .querySelector(`[data-target="${path}"]`)
          .classList.add("catalog__left-active");
        document
          .querySelector(`[data-target="${path}"]`)
          .setAttribute("id", "catalog__left");
        document.getElementById("catalog__left").scrollIntoView(true);
      });
    });
});

const swiperBackground = new Swiper('.subscribe__slider', {
  autoplay: {
      delay: 7000,
  },
  effect: "fade",
  loop: true,
  scrollbar: {
      hide: true
  }
})

const swiper = new Swiper(".gallery__swiper", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
  loop: false,
  navigation: {
    nextEl: ".gallery-right__button-next",
    prevEl: ".gallery-right__button-prev",
  },
  pagination: {
    el: ".gallery-right__page",
    type: "fraction",
  },
});

const projectsSwiper = new Swiper(".projects__container-swiper", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
  loop: false,
  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev",
  },
});

const eventsSwiper = new Swiper(".events__content", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
  loop: false,
  navigation: {
    nextEl: ".events__button-next",
    prevEl: ".events__button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var selector = document.querySelector(".contacts__input-phone");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate(".contacts__form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
      strength: {
        custom: "[A-Za-zA-Яа-я]+[ A-Za-zA-Яа-я]",
      },
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },
  messages: {
    name: "Недопустимый формат",
    phone: "Недопустимый формат",
  },
});
