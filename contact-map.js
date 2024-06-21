ymaps.ready(init);
		function init(){
			var myMap = new ymaps.Map("map", {
				center: [53.740064443067446,91.41679735786441],
				zoom: 16
			}),
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Магазин ИП Левочко',
            balloonContent: 'Магазин ИП Левочко'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://pngimg.com/uploads/google_maps_pin/google_maps_pin_PNG79.png',
            iconImageSize: [40, 42],
            iconImageOffset: [-20, -40]
        });
		myMap.geoObjects.add(myPlacemark);
		}