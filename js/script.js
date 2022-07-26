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
  document.querySelectorAll(".catalog__era").forEach(function (catalogBtn){
    catalogBtn.addEventListener("click", () => {
      let element = catalogBtn.children[0];
      if (element.classList.contains("ui-state-active")){
        catalogBtn.classList.add("catalog__era-active")
      }
      else{
        catalogBtn.classList.remove("catalog__era-active")
      }
    })
  })
})

