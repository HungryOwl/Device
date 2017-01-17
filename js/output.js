'use strict';

var sendMessageLink = document.querySelector('.suppliers__btn--contacts');
var contactPopup = document.querySelector('.modal-content');
var closeContactPopup = document.querySelector('.modal-content__close');
var mapPopup = document.querySelector('.map-popup');
var closeMap = document.querySelector('.map-popup__close');
var mapLink = document.querySelector('.map');
var pageFooter = document.querySelector('.page-footer');
var contactsLink = pageFooter.querySelector('.main-nav__menu-link--contacts');
var myMap;

function openPopups(element, classToAdd) {
  return function(evt) {
    evt.preventDefault();
    if(!element.classList.contains(classToAdd)) element.classList.add(classToAdd);
  }
}

function closePopups(classToRemove) {
  return function(evt) {
    evt.preventDefault();
    if(this.parentNode.classList.contains(classToRemove)) this.parentNode.classList.remove(classToRemove);
  }
}

function addMap(id) {
  ymaps.ready(function() {
    var myMap;
    myMap = new ymaps.Map(id, {
       center: [55.687, 37.53],
       zoom: [16],
       controls: []
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');

    var myPlacemark = new ymaps.Placemark([55.687031, 37.529618]);
    myMap.geoObjects.add(myPlacemark);
  });
}

addMap('map');
addMap('big-map');

sendMessageLink.addEventListener('click', openPopups(contactPopup, 'modal-content--active'));
contactsLink.addEventListener('click', openPopups(mapPopup, 'map-popup--active'));
mapLink.addEventListener('click', openPopups(mapPopup, 'map-popup--active'));

closeMap.addEventListener('click', closePopups('map-popup--active'));
closeContactPopup.addEventListener('click', closePopups('modal-content--active'));

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode == 27) {
    if (contactPopup.classList.contains('modal-content--active')) {
      contactPopup.classList.remove('modal-content--active');
    }

    if (mapPopup.classList.contains('map-popup--active')) {
      mapPopup.classList.remove('map-popup--active');
    }
  }
});
