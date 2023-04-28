let center = [54.195097766286786,37.620160825408846];

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 14
    });
    let placemark = new ymaps.Placemark([54.195097766286786,37.620160825408846],{
        balloonContentHeader:'Тульский Кремль',
        balloonContentBody: 'Менделеевская ул., 12б, Тула, Тульская обл., 300041',
        balloonContentFooter: 'Телефон: 8 (487) 277-49-34',
        iconContent: 'lflflflflfllf',
    },
    {

        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/7720/7720967.png',
        iconImageSize: [30,30],
        iconImageOffset: [-15,-24]
    });

    let placemark1 = new ymaps.Placemark([54.19338256429311,37.63730496647029],
        {
            balloonContent: `
                <div class = "balloon">
                    <div class = "balloon__name">Торгово-развлекательный центр Макси</div>
                    <div class = "balloon__adress">ул. Пролетарская, 2, Тула, Тульская обл., 300001</div>
                    <div class = "balloon__contacts">Телефон: 8 (800) 100-27-27</div>
                </div>
            `
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'https://cdn-icons-png.flaticon.com/512/7720/7720967.png',
            iconImageSize: [30,30],
            iconImageOffset: [-15,-24]
        });
    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
}
ymaps.ready(init);