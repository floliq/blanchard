const element = document.querySelector("#gallery-left__type");
const choices = new Choices(element, {
  shouldSort: false,
  searchEnabled: false,
});

$(".accordion").accordion({
  heightStyle: "content",
  active: true,
  collapsible: true,
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
      iconImageOffset: [0, 0],
    }
  );
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add("zoomControl", {
    float: "none",
    size: "small",
    position: {
      top: "200px",
      right: "20px",
    },
  });
  myMap.controls.add("geolocationControl", {
    float: "none",
    position: {
      top: "268px",
      right: "20px",
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  event.preventDefault();

  let menu = document.querySelector(".menu-top__bar");
  let burger = document.querySelector(".menu__btn");
  let menuLinks = document.querySelectorAll(".menu-top__link");
  burger.onclick = function () {
    menu.classList.toggle("menu-top__bar-active");
    burger.classList.toggle("menu__btn-open");
    document.body.classList.toggle("stop");
  };

  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", () => {
      document.body.classList.remove("stop");
      menu.classList.remove("menu-top__bar-active");
    });
  });

  document.querySelectorAll(".catalog__era").forEach(function (catalogBtn) {
    catalogBtn.addEventListener("click", () => {
      let element = catalogBtn.children[0];
      if (element.classList.contains("ui-state-active")) {
        catalogBtn.classList.add("catalog__era-active");
      } else {
        catalogBtn.classList.remove("catalog__era-active");
      }
    });
  });
});

const swiper = new Swiper(".swiper", {
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
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
