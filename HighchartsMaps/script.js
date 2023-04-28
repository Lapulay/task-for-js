
Highcharts.chart('container', {
    chart: {
        type: 'tilemap',
        inverted: false,
        height: '100%',
    },


    title: {
        text: 'Россия'
    },


    xAxis: {
        visible: false
    },

    yAxis: {
        visible: false
    },

    colorAxis: {
        dataClasses: [{
            from: 1000000,
            to: 5000000,
            color: '#FFC428',
            name: '1M - 5M'
        }, {
            from: 5000000,
            to: 20000000,
            color: '#008000',
            name: '5M - 20M'
        }, {
            from: 20000000,
            color: '#FF2371',
            name: '> 20M'
        }]
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<b> {point.name}</b>'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.hc-a2}',
                color: '#000000',
                style: {
                    textOutline: false
                }
            }
        }
    },

    series: [{
        name: '',
        data: [{
            'hc-a2': 'КЕМ',
            name: 'Кемерево',
            x: 11,
            y: 5,
            value: 4849377
        }, {
            'hc-a2': 'СПБ',
            name: 'Санкт-Петербург',
            x: 0,
            y: 7,
            value: 8411808
        }, {
            'hc-a2': 'НИЖ',
            name: 'Нижний',
            x: 4,
            y: 4,
            value: 6745408
        }, {
            'hc-a2': 'ТЫВА',
            name: 'Тыва',
            x: 11,
            y: 3,
            value: 8411808
        }, {
            'hc-a2': 'АСТР',
            name: 'Астрахань',
            x: 5,
            y: 1,
            value: 39250017
        }, {
            'hc-a2': 'ЧЕЧ',
            name: 'Чечня',
            x: 4,
            y: -1,
            value: 5540545
        }, {
            'hc-a2': 'ХАК',
            name: 'Хак',
            x: 11,
            y: 4,
            value: 3596677
        }, {
            'hc-a2': 'КРАС',
            name: 'Краснодар',
            x: 11,
            y: 6,
            value: 20612439
        }, {
            'hc-a2': 'ПЕНЗ',
            name: 'Пенза',
            x: 4,
            y: 2,
            value: 7288000
        }, {
            'hc-a2': 'Р.АЛТ',
            name: 'Алтай',
            x: 10,
            y: 2,
            value: 20612439
        }, {
            'hc-a2': 'ТАТ',
            name: 'Татарстан',
            x: 6,
            y: 4,
            value: 10310371
        }, {
            'hc-a2': 'ХМАО',
            name: 'Хмао',
            x: 8,
            y: 5,
            value: 1419561
        }, {
            'hc-a2': 'ЗАБ',
            name: 'Заб',
            x: 12,
            y: 3,
            value: 1634464
        }, {
            'hc-a2': 'РОСТ',
            name: 'Ростов',
            x: 3,
            y: 1,
            value: 12801539
        }, {
            'hc-a2': 'ВРНЖ',
            name: 'Воронеж',
            x: 3,
            y: 2,
            value: 6596855
        }, {
            'hc-a2': 'БУР',
            name: 'Бур',
            x: 12,
            y: 4,
            value: 5540545
        }, {
            'hc-a2': 'ОМСК',
            name: 'Омск',
            x: 9,
            y: 4,
            value: 2904021
        }, {
            'hc-a2': 'ВОЛГ',
            name: 'Волгоград',
            x: 4,
            y: 1,
            value: 4413457
        }, {
            'hc-a2': 'САМ',
            name: 'Самса',
            x: 6,
            y: 3,
            value: 4649676
        }, {
            'hc-a2': 'ПСК',
            name: 'Пск',
            x: 0,
            y: 5,
            value: 1330089
        }, {
            'hc-a2': 'МОРД',
            name: 'Мордавия',
            x: 4,
            y: 3,
            value: 6016447
        }, {
            'hc-a2': 'ЯРО',
            name: 'Ярославль',
            x: 2,
            y: 5,
            value: 6811779
        }, {
            'hc-a2': 'МСК',
            name: 'Москва',
            x: 2,
            y: 4,
            value: 9928301
        }, {
            'hc-a2': 'ЛИП',
            name: 'Липецк',
            x: 2,
            y: 2,
            value: 5519952
        }, {
            'hc-a2': 'АРХ',
            name: 'Архангельск',
            x: 6,
            y: 6,
            value: 20612439
        }, {
            'hc-a2': 'КАЛМ',
            name: 'Калмыки',
            x: 4,
            y: 0,
            value: 6093000
        }, {
            'hc-a2': 'ИНГ',
            name: 'Ингушетия',
            x: 4,
            y: -2,
            value: 1023579
        }, {
            'hc-a2': 'ИРК',
            name: 'Иркутск',
            x: 12,
            y: 5,
            value: 1881503
        }, {
            'hc-a2': 'МАГ',
            name: 'Магадан',
            x: 14,
            y: 5,
            value: 12784227
        }, {
            'hc-a2': 'ЛЕН',
            name: 'Лен',
            x: 0,
            y: 6,
            value: 8411808
        }, {
            'hc-a2': 'СТАВ',
            name: 'Ставрополь',
            x: 3,
            y: 0,
            value: 8944469
        }, {
            'hc-a2': 'ОРЕН',
            name: 'Оренбург',
            x: 6,
            y: 2,
            value: 2085572
        }, {
            'hc-a2': 'КРД',
            name: 'КРД',
            x: 2,
            y: 0,
            value: 19745289
        }, {
            'hc-a2': 'КОСТР',
            name: 'Кострома',
            x: 4,
            y: 5,
            value: 10146788
        }, {
            'hc-a2': 'ЧУК',
            name: 'Чукотка',
            x: 14,
            y: 6,
            value: 12784227
        }, {
            'hc-a2': 'ТАМБ',
            name: 'Тамбов',
            x: 3,
            y: 3,
            value: 2942902
        }, {
            'hc-a2': 'ЕВР',
            name: 'Евр',
            x: 13,
            y: 4,
            value: 12784227
        }, {
            'hc-a2': 'МУР',
            name: 'Мурманск',
            x: 1,
            y: 8,
            value: 5778708
        }, {
            'hc-a2': 'РЯЗ',
            name: 'Рязань',
            x: 3,
            y: 4,
            value: 12784227
        }, {
            'hc-a2': 'СВЕР',
            name: 'Свердловск',
            x: 8,
            y: 4,
            value: 1055173
        }, {
            'hc-a2': 'КАЛИ',
            name: 'Калининград',
            x: -2,
            y: 6,
            value: 4832482
        }, {
            'hc-a2': 'АМАР',
            name: 'Амар',
            x: 13,
            y: 5,
            value: 12784227
        }, {
            'hc-a2': 'САРАТ',
            name: 'Саратов',
            x: 5,
            y: 3,
            value: 6651194
        }, {
            'hc-a2': 'ЧУВ',
            name: 'Чув',
            x: 5,
            y: 5,
            value: 27862596
        }, {
            'hc-a2': 'КУРГ',
            name: 'Кург',
            x: 9,
            y: 5,
            value: 2942902
        }, {
            'hc-a2': 'ЯКУТ',
            name: 'Якутия',
            x: 13,
            y: 6,
            value: 12784227
        }, {
            'hc-a2': 'УЛЬ',
            name: 'Ульяновск',
            x: 5,
            y: 4,
            value: 8411808
        }, {
            'hc-a2': 'КБР',
            name: 'Кбр',
            x: 2,
            y: -2,
            value: 7288000
        }, {
            'hc-a2': 'АЛТ.К',
            name: 'Алт.к',
            x: 10,
            y: 3,
            value: 1850326
        }, {
            'hc-a2': 'ТУЛ',
            name: 'Тула',
            x: 2,
            y: 3,
            value: 5778708
        },{
            'hc-a2': 'КИР',
            name: 'Кировск',
            x: 6,
            y: 5,
            value: 5778708
        },{
            'hc-a2': 'НЕН',
            name: 'Нен',
            x: 7,
            y: 7,
            value: 5778708
        },{
            'hc-a2': 'БАШ',
            name: 'Башкирия',
            x: 7,
            y: 3,
            value: 5778708
        },{
            'hc-a2': 'УДМ',
            name: 'Удм',
            x: 7,
            y: 4,
            value: 5778708
        },{
            'hc-a2': 'ПЕРМ',
            name: 'Пермь',
            x: 7,
            y: 5,
            value: 5778708
        },{
            'hc-a2': 'КОМИ',
            name: 'Коми',
            x: 7,
            y: 6,
            value: 5778708
        },{
            'hc-a2': 'СМОЛ',
            name: 'Смоленск',
            x: -1,
            y: 5,
            value: 5778708
        },{
            'hc-a2': 'ВЛАД',
            name: 'Владивосток',
            x: 3,
            y: 5,
            value: 5778708
        },{
            'hc-a2': 'ИВАН',
            name: 'Иван',
            x: 3,
            y: 6,
            value: 5778708
        },{
            'hc-a2': 'ЯНАО',
            name: 'Янао',
            x: 8,
            y: 6,
            value: 5778708
        },{
            'hc-a2': 'ТЮМ',
            name: 'Тюмень',

            x: 9,
            y: 6,
            value: 5778708
        },{
            'hc-a2': 'ТОМСК',
            name: 'Томск',
            x: 10,
            y: 5,
            value: 5778708
        },{
            'hc-a2': 'ЧЕЛ',
            name: 'Челябинск',
            x: 8,
            y: 3,
            value: 5778708
        },{
            'hc-a2': 'НОВО',
            name: 'Новомосковск',
            x: 10,
            y: 4,
            value: 5778708
        },{
            'hc-a2': 'ДАГ',
            name: 'Дагестан',
            x: 5,
            y: 0,
            value: 5778708
        },{
            'hc-a2': 'КАЛУ',
            name: 'Калуга',
            x: 0,
            y: 4,
            value: 5778708
        },{
            'hc-a2': 'МО',
            name: 'Мо',
            x: 1,
            y: 4,
            value: 5778708
        },{
            'hc-a2': 'НОВ',
            name: 'Нов',
            x: 1,
            y: 6,
            value: 2942902
        },{
            'hc-a2': 'БЕЛ',
            name: 'Белгород',
            x: 2,
            y: 1,
            value: 5778708
        },{
            'hc-a2': 'КЧР',
            name: 'Кчр',
            x: 2,
            y: -1,
            value: 5778708
        },{
            'hc-a2': 'АДЫГ',
            name: 'Адыгея',
            x: 1,
            y: 0,
            value: 5778708
        },{
            'hc-a2': 'СЕВ',
            name: 'Сквостополь',
            x: 0,
            y: -1,
            value: 5778708
        },{
            'hc-a2': 'КРЫМ',
            name: 'Крым',
            x: 0,
            y: 0,
            value: 5778708
        },{
            'hc-a2': 'ВОЛОГ',
            name: 'Вологда',
            x: 2,
            y: 6,
            value: 2942902
        },{
            'hc-a2': 'ОРЛ',
            name: 'Орел',
            x: 1,
            y: 3,
            value: 5778708
        },{
            'hc-a2': 'ТВЕР',
            name: 'Тверь',
            x: 1,
            y: 5,
            value: 2942902
        },{
            'hc-a2': 'КАР',
            name: 'Карелия',
            x: 1,
            y: 7,
            value: 2942902
        },{
            'hc-a2': 'ОСЕТ',
            name: 'Осетия',
            x: 3,
            y: -1,
            value: 5778708
        },{
            'hc-a2': 'БРЯ',
            name: 'Брянск',
            x: 0,
            y: 3,
            value: 5778708
        },{
            'hc-a2': 'КУРСК',
            name: 'Курск',
            x: 1,
            y: 2,
            value: 5778708
        },{
            'hc-a2': 'ХАБ',
            name: 'Хабаровск',
            x: 14,
            y: 4,
            value: 5778708
        },{
            'hc-a2': 'ПРИМ',
            name: 'Приморск',
            x: 14,
            y: 3,
            value: 5778708
        },{
            'hc-a2': 'КАМЧ',
            name: 'Камчатка',
            x: 15,
            y: 6,
            value: 5778708
        },{
            'hc-a2': 'СХЛН',
            name: 'Сахалин',
            x: 15,
            y: 3,
            value: 27862596
        }, {
            'hc-a2': 'МАРИ',
            name: 'Мари',
            x: 5,
            y: 6,
            value: 27862596
        }]
    }]
});