let controls = document.querySelectorAll('.ctrl'); //позволяет обрааться к html и css
let items=document.querySelectorAll(".promo__text");
let currentControl;
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');

function setCurrent(){
    for (let j = 0; j < items.length; j++) {
        items[j].classList.add("hidden"); //обращение к классу
        controls[j].checked=false;
        if(j==currentControl){
            controls[j].checked=true;
            items[j].classList.remove("hidden");
        }
    }
}
for (let i = 0; i < controls.length; i++) {
    if(controls[i].checked){
        currentControl=i;
    }
    controls[i].addEventListener('click', function(){
        currentControl=i;
        setCurrent();
    });
}
next.addEventListener('click', function(){
    if(currentControl+1<3){
        currentControl++;
    }
    else{
        currentControl=0;
    }
    setCurrent();
});
prev.addEventListener('click', function(){
    if(currentControl-1>-1){
        currentControl--;
    }
    else{
        currentControl=2;
    }
    setCurrent();
});



ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [59.93860657, 30.32202918], //центр карты
        zoom: 17,
        controls: ['zoomControl'], //отключение доп значков
        behaviors: ['drag'] //перетягивание пкм
    });

var placemark = new ymaps.Placemark([59.93863410, 30.32294396], { //точка на карте
    hintContent: 'NЁRDS DESIGN STUDIO',
    balloonContent: '191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8 '
    },  {
    iconLayout: 'default#image', //тип
    iconImageHref: 'img/map-marker.png', 
    iconImageSize: [231, 190],
    iconImageOffset: [-55, -178]  //отступ для своего изображения
});
map.geoObjects.add(placemark); //размещение геообъекта
}