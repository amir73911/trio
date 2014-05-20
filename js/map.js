
var ar = [
    ['Ульяновск','ТЦ Рим','Тюленева 12б','ulsk','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k4U0HQjVplu8',78],
    ['Ульяновск','ТЦ Звезда 1 этаж','Октябрьская 22','ulsk','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k4U0HQjVplu8',78],
    ['Ульяновск','ТЦ Звезда 2 этаж','Октябрьская 22','ulsk','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k4U0HQjVplu8',78],
    ['Ульяновск','ТК Строй Град','Марата 8','ulsk','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k4U0HQjVplu8',78],
    ['Ульяновск','ТК Строй Град','Ульяновский 24','ulsk','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k4U0HQjVplu8',78],
    ['Саранск','МЦ Находка','Полежаева 31','srnsk','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kg8CeY1NCkic',59],
    ['Оренбург','Интерьерный центр МЗ','Победы 174','ornb','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kNJDYHOwFo80',55],
    ['Астрахань','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k1a_oGgDhdmw',113],
    ['Уфа','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kjSLd4qEU4w8',56],
    ['Адыгея','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k0HfCCz57ogg',86],
    ['Алтайский край','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k9YQV4wrnJko',1],
    ['Альметьевск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k2-z3pOWuapI',45],
    ['Анапа','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kdw2KHev9jZ8',103],
    ['Ангарск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.ka55cGuWuh88',7],
    ['Архангельск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kXqSHp11kQUs',31],
    ['Архангельская область','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kd_Z8AG9UvzU',92],
    ['Балаково','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kWce8UE1qqSE',70],
    ['Бердск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kvqLI77NHjfQ',76],
    ['Березники','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.km3KwLFnfo34',77],
    ['Бийск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kwJy6VVzD_fY',4],
    ['Бугульма','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k95C3W8q7PCs',44],
    ['Бузулук','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kFgqauiFj1Xs',60],
    ['Великий Устюг','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kyac5Luuk_vs',99],
    ['Владимир','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.ka3O-X0UvKpM',24],
    ['Волгоград','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kDDVKH2m_IMM',87],
    ['Волгодонск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kGgnNNdH1JPg',83],
    ['Волжск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kdBjFWd3k9_s',65],
    ['Воркута','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kqJobiUnKdYU',89],
    ['Воскресенск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kTS2Gbo0Jx4k',38],
    ['Вязма','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kSwf9I6zWps4',20],
    ['Геленджик','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kcK_mjX0flKo',81],
    ['Горно-Алтайск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k7lJH2SI8ucE',11],
    ['Долинск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kJGxjQrj2VlA',123],
    ['Заинск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kGsILXrULi3c',50],
    ['Зеленодольск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k6Dv3qm3AjXg',49],
    ['Иваново','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kdhhrMG0jY20',106],
    ['Ижевск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k_jos38wvtIQ',63],
    ['Иркутск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kRzF_KyGo2cc',6],
    ['Йошкар-Ола','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k-0R5AT8DKN4',67],
    ['Казань','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kIRKi1GIvDNs',66],
    ['Калуга','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kPtvKnFSrF4Q',109],
    ['Кинель','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kRJ7Uds0rg7E',33],
    ['Киров','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kdA_mMDNV4IY',68],
    ['Клин','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kteP9k9GoQYM',112],
    ['Ковров','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kE_p88IG-0IM',25],
    ['Конаково','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k4LD0LMoL3Wg',22],
    ['Копейск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k5YjxmDHIpH0',34],
    ['Краснодар','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.keiSUq4CkP-A',84],
    ['Краснодарский край','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k4Qd-KA2NmEs',121],
    ['Краснокаменск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kmEZmuMfQk4w',115],
    ['Красноярск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kSv9xEy2pZoo',116],
    ['Курган','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kHdy-YuPXiyU',13],
    ['Курск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kHBw6x0HNhaM',29],
    ['Курчатов','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kCQrznbo9mto',30],
    ['Кыштым','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k1jOUs2Nk_iU',12],
    ['Ленинградская область','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.knDDpGlC3a9g',35],
    ['Лениногорск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kXz6CXMBCMY4',41],
    ['Липецк','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kgaUp7h8v430',27],
    ['Магнитогорск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kenZAhEswiLc',14],
    ['Малоярославец','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kfVCwjfN5OUE',31],
    ['Махачкала','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kgbK7K71sRs0',102],
    ['Менделеевск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k2nXCHlHA2yE',47],
    ['Можга','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kCH-b6GRYE2I',119],
    ['Москва','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kHGUdDK7VPtM',39],
    ['Московская область','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k6S26T2unUiI',37],
    ['Мурманск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kQHk82H4hCxE',94],
    ['Муром','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.ky8B1vr1DnU4',21],
    ['Набережные челны','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kKsYCknnVFyE',46],
    ['Находка','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kZC8tlHxzVuo',2],
    ['Нефтекамск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kvhLVj3-SE4Y',61],
    ['Нижегородская область','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kfEh-fw0FLZI',74],
    ['Нижневартовск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kLdTipKUfEPk',19],
    ['Нижнекамск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kOF7zu3UO0cs',48],
    ['Нижний Новгород','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.khU782mFbG8Y',73],
    ['Новокуйбышевск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kcW43qEPb0_A',52],
    ['Новороссийск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kSOreI9P2e7I',80],
    ['Новосибирск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.keH4YkItG70o',9],
    ['Новоуральск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kLNFyPZL0Bwo',36],
    ['Обнинск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kJLbNrgURvF8',43],
    ['Озерск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k0Ny5qoCqjcQ',100],
    ['Октябрьский','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k8skEHo9mVUI',42],
    ['Омск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k1QOka_GQ-Qg',104],
    ['Орел','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.krEac_k1l-cY',28],
    ['Орск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kEYWI8mYX6YU',69],
    ['Пенза','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kV6IXFg24Nhw',125],
    ['Первоуральск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kZa7wmqYwvDs',17],
    ['Пермь','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.ksNE--0U-oWY',57],
    ['Петропавловск-Камчатский','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kVGjPISsgS8s',3],
    ['Печора','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kaupnk-xBfWg',96],
    ['Поронайск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kCD2zL60OUrI',124],
    ['Ростов-на-Дону','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kkI04Hb5SNd8',82],
    ['Рязань','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kavIjC_m1Evk',105],
    ['Самара','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kTTCVMsUhNY0',51],
    ['Самарская область','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kL7VhAFh3jy8',101],
    ['Санкт Петербург','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kznXQq9_LLD8',95],
    ['Саратов','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kalxBTNkJBco',71],
    ['Саратовская область','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kalxBTNkJBco',72],
    ['Саров','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k1C4N2K3ZSBU',40],
    ['Северодвинск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kR6eHEyX-KZE',93],
    ['Североморск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kH_AY4PeefrM',88],
    ['Славгород','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k9ImisfeShwE',5],
    ['Слюдянка','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kA7h_bXisDdY',8],
    ['Смоленск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kYP2hAXDeZJ4',111],
    ['Соликамск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kU_2mFeo5tdE',75],
    ['Сочи','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kO382hAk8Cvc',85],
    ['Стрежевой','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kw7xVESeiM5w',10],
    ['Сызрань','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k9838b51SFHg',64],
    ['Сыктывкар','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kGuVMWTpIMvI',98],
    ['Таганрог','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.ksaG8wbHL1bY',32],
    ['Тамбов','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kyP9cd3WfQ70',26],
    ['Тверь','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kzbhpiRB2cWU',23],
    ['Тобольск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k8jTolj2HVYs',18],
    ['Тольятти','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kU3Fu2G55V0I',53],
    ['Туапсе','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kjArzFaTJMPg',90],
    ['Тула','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kY_A2jQ2swZQ',110],
    ['Тульская область','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kY_A2jQ2swZQ',118],
    ['Улан-Удэ','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.khU99ncnUhpQ',117],
    ['Ульяновская область','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k4U0HQjVplu8',79],
    ['Ухта','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.knu1e8J-9S8E',97],
    ['Чайковский','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.k28K8d8OE0tE',58],
    ['Чапаевск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kL7VhAFh3jy8',54],
    ['Челябинск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.ky7eAtlnmZlQ',15],
    ['Челябинская область','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kfAoNWKmVXXw',16],
    ['Чита','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kOm6O17oGp_o',114],
    ['Южно-Сахалинск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kiMnfJH3DCVA',122],
    ['Южноуральск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kfAoNWKmVXXw',107],
    ['Якутск','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kMi5rW7b51pE',108],
    ['Янаул','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.kJpvPLA_Xxjk',62],
    ['Казахстан','','','','https://mapsengine.google.com/map/embed?mid=zHQGUl7X5SCI.ksvjwv_3mcIE',126]
];
function mapping(city)
{
    for (var i = 0; i < ar.length; i++)
    {
        if (ar[i][5]==city)
        {
            $('#map_'+city+' > iframe').attr('src',ar[i][4]);
            break;
        }
    }
}


var tags = [];
tags[tags.length] = 'Адыгея';
tags[tags.length] = 'Алтайский край';
tags[tags.length] = 'г. Альметьевск';
tags[tags.length] = 'г. Анапа';
tags[tags.length] = 'г. Ангарск';
tags[tags.length] = 'г. Архангельск';
tags[tags.length] = 'Архангельская область';
tags[tags.length] = 'г. Астрахань';
tags[tags.length] = 'г. Балаково';
tags[tags.length] = 'г. Бердск';
tags[tags.length] = 'г. Березники';
tags[tags.length] = 'г. Бийск';
tags[tags.length] = 'г. Бугульма';
tags[tags.length] = 'г. Бузулук';
tags[tags.length] = 'г. Великий Устюг';
tags[tags.length] = 'г. Владимир';
tags[tags.length] = 'г. Волгоград';
tags[tags.length] = 'г. Волгодонск';
tags[tags.length] = 'г. Волжск';
tags[tags.length] = 'г. Воркута';
tags[tags.length] = 'г. Воскресенск';
tags[tags.length] = 'г. Вязьма';
tags[tags.length] = 'г. Геленджик';
tags[tags.length] = 'г. Горно-Алтайск';
tags[tags.length] = 'г. Долинск';
tags[tags.length] = 'г. Заинск';
tags[tags.length] = 'г. Зеленодольск';
tags[tags.length] = 'г. Иваново';
tags[tags.length] = 'г. Ижевск';
tags[tags.length] = 'г. Иркутск';
tags[tags.length] = 'г. Йошкар-Ола';
tags[tags.length] = 'г. Казань';
tags[tags.length] = 'г. Калуга';
tags[tags.length] = 'г. Кинель';
tags[tags.length] = 'г. Киров';
tags[tags.length] = 'г. Клин';
tags[tags.length] = 'г. Ковров';
tags[tags.length] = 'г. Конаково';
tags[tags.length] = 'г. Копейск';
tags[tags.length] = 'г. Краснодар';
tags[tags.length] = 'Краснодарский край';
tags[tags.length] = 'г. Краснокаменск';
tags[tags.length] = 'г. Красноярск';
tags[tags.length] = 'г. Курган';
tags[tags.length] = 'г. Курск';
tags[tags.length] = 'г. Курчатов';
tags[tags.length] = 'г. Кыштым';
tags[tags.length] = 'Ленинградская область';
tags[tags.length] = 'г. Лениногорск';
tags[tags.length] = 'г. Липецк';
tags[tags.length] = 'г. Магнитогорск';
tags[tags.length] = 'г. Малоярославец';
tags[tags.length] = 'г. Махачкала';
tags[tags.length] = 'г. Менделеевск';
tags[tags.length] = 'г. Можга';
tags[tags.length] = 'г. Москва';
tags[tags.length] = 'Московская область';
tags[tags.length] = 'г. Мурманск';
tags[tags.length] = 'г. Муром';
tags[tags.length] = 'г. Набережные Челны';
tags[tags.length] = 'г. Находка';
tags[tags.length] = 'г. Нефтекамск';
tags[tags.length] = 'Нижегородская область';
tags[tags.length] = 'г. Нижневартовск';
tags[tags.length] = 'г. Нижнекамск';
tags[tags.length] = 'г. Нижний Новгород';
tags[tags.length] = 'г. Новокуйбышевск';
tags[tags.length] = 'г. Новороссийск';
tags[tags.length] = 'г. Новосибирск';
tags[tags.length] = 'г. Новоуральск';
tags[tags.length] = 'г. Обнинск';
tags[tags.length] = 'г. Озерск';
tags[tags.length] = 'г. Октябрьский';
tags[tags.length] = 'г. Омск';
tags[tags.length] = 'г. Орел';
tags[tags.length] = 'г. Оренбург';
tags[tags.length] = 'г. Орск';
tags[tags.length] = 'г. Пенза';
tags[tags.length] = 'г. Первоуральск ';
tags[tags.length] = 'г. Пермь ';
tags[tags.length] = 'г. Петропавловск-Камчатский';
tags[tags.length] = 'г. Печора';
tags[tags.length] = 'г. Поронайск';
tags[tags.length] = 'г. Пушкино';
tags[tags.length] = 'г. Ростов-на-Дону';
tags[tags.length] = 'г. Рязань';
tags[tags.length] = 'г. Самара';
tags[tags.length] = 'Самарская область';
tags[tags.length] = 'г. Санкт-Петербург';
tags[tags.length] = 'г. Саранск';
tags[tags.length] = 'г. Саратов';
tags[tags.length] = 'Саратовская область';
tags[tags.length] = 'г. Саров';
tags[tags.length] = 'г. Северодвинск';
tags[tags.length] = 'г. Североморск';
tags[tags.length] = 'г. Славгород';
tags[tags.length] = 'г. Слюдянка';
tags[tags.length] = 'г. Смоленск';
tags[tags.length] = 'г. Соликамск ';
tags[tags.length] = 'г. Сочи ';
tags[tags.length] = 'г. Стрежевой';
tags[tags.length] = 'г. Сызрань';
tags[tags.length] = 'г. Сыктывкар';
tags[tags.length] = 'г. Таганрог';
tags[tags.length] = 'г. Тамбов';
tags[tags.length] = 'г. Тверь';
tags[tags.length] = 'г. Тобольск';
tags[tags.length] = 'г. Тольятти';
tags[tags.length] = 'г. Туапсе';
tags[tags.length] = 'г. Тула';
tags[tags.length] = 'Тульская область';
tags[tags.length] = 'г. Улан-Удэ';
tags[tags.length] = 'г. Ульяновск';
tags[tags.length] = 'Ульяновская область';
tags[tags.length] = 'г. Уфа';
tags[tags.length] = 'г. Ухта';
tags[tags.length] = 'г. Чайковский';
tags[tags.length] = 'г. Чапаевск';
tags[tags.length] = 'г. Челябинск';
tags[tags.length] = 'Челябинская область';
tags[tags.length] = 'г. Чита';
tags[tags.length] = 'г. Южно-Сахалинск';
tags[tags.length] = 'г. Южноуральск';
tags[tags.length] = 'г. Якутск';
tags[tags.length] = 'г. Янаул';
tags[tags.length] = 'республика Казахстан';


$("#find_in").bind('input',function(){
    $('#hint_cont').show();
    var str = $("#find_in").attr("value");

    var elems = '';
    for(var i = 0; i < tags.length; i ++)
    {
        if (str != ''){

            if ((tags[i].toLowerCase().indexOf(str.toLowerCase()) +1)){
                elems += '<span style = "cursor: pointer;" onclick=\'$("#find_in").attr("value","'+tags[i]+'"); document.getElementById("the_form").submit(); \'>'+tags[i]+'</span>';
            }
        } else $('#hint_cont').hide();
    }
    $("#hint_cont").html(elems);
});

$(this).keydown(function(eventObject){
    if (eventObject.which == 27)
        $('#hint_cont').hide();
});

$(document).ready(function(){
    $("#hint_cont").css("width", $("#find_in").outerWidth());
    $("#hint_cont").hide();
    $("#find_in").attr("autocomplete","off");
    $("#find_in").attr("value","");
    $("#find_in").attr("placeholder","Поиск города");
    var map_width = 913;
    $('.city').hover(
        function() {
            var city_name = $(this).attr('alt');
            var city_top = parseInt($(this).css('top')) - 68;
            var city_right = map_width - parseInt($(this).css('left'));
            $('.city_info h1').html('<nobr>'+city_name+'</nobr>');
            $('.city_info').css('top', city_top + 'px');
            $('.city_info').css('right', city_right + 'px');
            $('.city_info').css('width', 'auto');
            $('.city_info_center').css('width', 'auto');
            $('.city_info').show();
        },
        function() {
            $('.city_info').hide();
        }
    );
    var i = 0;
    var citys = new Array();
    var content = new Array();

    citys[86] = 'Адыгея';
    text = '';
    text += '<ul>';
    text = text + '<li>Салон мебели «МебельEmpire», Гиагинский р-н, ст. Гиагинская, ул. Почтовая д.2, Тел.: 8-928-4361661; 8-918-2248209</li>';
    text = text + '<ul>';
    content[86] = text;
    citys[1] = 'Алтайский край';
    text = '';
    text += '<ul>';
    text = text + '<li>Мамонтовский р-н, пос. Мамонтово, ул. Советская, 130, мебельный салон «Дизайн»</li>';
    text = text + '<li>Завьяловский р-н, с. Завьялово, ул. 30 лет Победы, 12, мебельный салон «Дизайн»</li>';
    text = text + '<li>Ребрихинский район, село Ребриха, ул. Революционная, 6</li>';
    text = text + '<ul>';
    content[1] = text;
    citys[45] = 'г. Альметьевск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул.Ленина, д.13, МС "Кухни Трио"</li>';
    text = text + '<ul>';
    content[45] = text;
    citys[103] = 'г. Анапа';
    text = '';
    text += '<ul>';
    text = text + '<li>Анапское шоссе, 1г, салон «Кухни «Трио»</li>';
    text = text + '<ul>';
    content[103] = text;
    citys[7] = 'г. Ангарск';
    text = '';
    text += '<ul>';
    text = text + '<li>Ангарский проезд, 7а мкр-н, Здание Авиаагентства («Аэрофлот), 2 этаж</li>';
    text = text + '<ul>';
    content[7] = text;
    citys[91] = 'г. Архангельск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Галушина, 7, торговый центр «Нива», 3 этаж</li>';
    text = text + '<li>ул. Урицкого, 1, мебельный салон «Мечта»</li>';
    text = text + '<ul>';
    content[91] = text;
    citys[92] = 'Архангельская область';
    text = '';
    text += '<ul>';
    text = text + '<li>п.  Плесецк, ул. Кооперативная, 4б, тел: +7 (911)-574-49-74</li>';
    text = text + '<ul>';
    content[92] = text;
    citys[113] = 'г. Астрахань';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Ташкентская, 2, Салон кухонь  «Изюминка», тел: + 7(8512) 29-80-60, E-mail: izuminka1@ast-kuhni.ru</li>';
    text = text + '<li>ул. Ивановская, 2, ТЦ «На Цареве» (АМДК), тел.: + 7(8512) 20-02-20, E-mail: izuminka2@ast-kuhni.ru</li>';
    text = text + '<li>ул. Челябинская, 1, ТЦ «Кубанский», тел.: + 7(8512) 20-04-04, E.mail: izuminka2@ast-kuhni.ru</li>';
    text = text + '<ul>';
    content[113] = text;
    citys[70] = 'г. Балаково';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Факел Социализма, 5, магазин «Юбилейный», тел.: +7 (937) 970 94 41</li>';
    text = text + '<li>ул. Комарова, 135/4, магазин «Алтын», тел.: +7 (927) 916 95 00, +7 (927) 133 30 40</li>';
    text = text + '<ul>';
    content[70] = text;
    citys[76] = 'г. Бердск';
    text = '';
    text += '<ul>';
    text = text + '<li>пер. Промышленный, 1 (2 этаж), Салон "ДОМ КУХНИ", тел.: (383-41) 3 00 46</li>';
    text = text + '<ul>';
    content[76] = text;
    citys[77] = 'г. Березники';
    text = '';
    text += '<ul>';
    text = text + '<li>пр-т Ленина, 34, мебельный салон «100 % кухни у Елены»</li>';
    text = text + '<ul>';
    content[77] = text;
    citys[4] = 'г. Бийск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Льва Толстого, 111, магазин «Разноторг-мебель»</li>';
    text = text + '<ul>';
    content[4] = text;
    citys[44] = 'г. Бугульма';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Октябрьская, 51, торгово-деловой центр «Восток-Т», мебельный салон «Пассаж»</li>';
    text = text + '<li>ул. Джалиля, 5, центральный универмаг «Интермебель»</li>';
    text = text + '<ul>';
    content[44] = text;
    citys[60] = 'г. Бузулук';
    text = '';
    text += '<ul>';
    text = text + '<li>3-й микрорайон, 12а, магазин «Культура жилища»</li>';
    text = text + '<ul>';
    content[60] = text;
    citys[99] = 'г. Великий Устюг';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Угловского, 3, мебельный салон «Таркан»</li>';
    text = text + '<ul>';
    content[99] = text;
    citys[24] = 'г. Владимир';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Тракторная, 47, ТЦ «Добряк», салон «Эксклюзивная мебель»</li>';
    text = text + '<li>пр-т Ленина, 28, салон «Эксклюзивная мебель»</li>';
    text = text + '<li>ул. Спасская, 1/8, торговый центр «Порт», 2 этаж, салон «Сорока-ворона»</li>';
    text = text + '<ul>';
    content[24] = text;
    citys[87] = 'г. Волгоград';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Козловская, 55, ТЦ «Мебель Молл-А1» 2 этаж, тел.: +7 (8442) 94 49 06</li>';
    text = text + '<li>ул. Невская, 12в, мебельный центр «Невский Пассаж», 2 этаж, тел.: +7 (8442) 36 86 21</li>';
    text = text + '<li>ул. Рокоссовского, 54, цокольный этаж, "Кухни Трио", тел.: +7(8442)39-11-07</li>';
    text = text + '<li>Красноармейский район, ул.Бахтурова, д. 12, "Мебель МОЛЛ", 3-й этаж, +7 (8442) 31-92-96</li>';
    text = text + '<li>ул. 8-ой Воздушной армии, 58а, магазин "Декор"</li>';
    text = text + '<li>г.Волжский, ул.Карбышева д.47/4, магазин "Мебель здесь" (Рядом с т/к Простор) Тел. 8-917-729-08-04</li>';
    text = text + '<ul>';
    content[87] = text;
    citys[83] = 'г. Волгодонск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Маршала Кошевого, 23Г, Студия Кухни "Мебель Же", тел: +7(918)-563-67-68</li>';
    text = text + '<ul>';
    content[83] = text;
    citys[65] = 'г. Волжск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Федина, 8а, магазин «Хозяюшка»</li>';
    text = text + '<ul>';
    content[65] = text;
    citys[89] = 'г. Воркута';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Гоголя, 9</li>';
    text = text + '<ul>';
    content[89] = text;
    citys[38] = 'г. Воскресенск';
    text = '';
    text += '<ul>';
    text = text + '<li>Находкинский проспект, 1С, Магазин «Скандинавия»</li>';
    text = text + '<li>Фирменный салон "Кухни Трио", ул. Менделеева, д. 15, тел.: +7 929-507-97-12</li>';
    text = text + '<ul>';
    content[38] = text;
    citys[20] = 'г. Вязьма';
    text = '';
    text += '<ul>';
    text = text + '<li>Вяземский р-н, п. Андрейково, ТЦ «МебельСити»</li>';
    text = text + '<ul>';
    content[20] = text;
    citys[81] = 'г. Геленджик';
    text = '';
    text += '<ul>';
    text = text + '<li>ул.Кирова 130 (ТЦ «Семейный Магнит», 2этаж), тел.:8 (988) 337 32 30</li>';
    text = text + '<li>ул.Курзальная 10а, тел./факс: 8 (86141) 5 49 89</li>';
    text = text + '<ul>';
    content[81] = text;
    citys[11] = 'г. Горно-Алтайск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Ленина, 222, магазин «Разноторг-мебель»</li>';
    text = text + '<ul>';
    content[11] = text;
    citys[123] = 'г. Долинск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Хабаровская, д. 5, м-н "Классик", тел.: 8(42442)20-400</li>';
    text = text + '<ul>';
    content[123] = text;
    citys[50] = 'г. Заинск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Вокзальная, 1б, мебельный салон «Интерьер+»</li>';
    text = text + '<ul>';
    content[50] = text;
    citys[49] = 'г. Зеленодольск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Комсомольская, 8, магазин «Олимп»</li>';
    text = text + '<li>ул. Космонавтов, 1, магазин «Хозяюшка»</li>';
    text = text + '<ul>';
    content[49] = text;
    citys[106] = 'г. Иваново';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Шевченко, 19, мебельный центр «Сокол»</li>';
    text = text + '<li>ул. Багаева, 14, здание ТЦ "Полет", "Мебельный дом "Орфей", тел. 8(4932)27-80-27</li>';
    text = text + '<ul>';
    content[106] = text;
    citys[63] = 'г. Ижевск';
    text = '';
    text += '<ul>';
    text = text + '<li>СЦ "Гвоздь", ул. Удмуртская, 304, тел. (3412) 65-56-89</li>';
    text = text + '<ul>';
    content[63] = text;
    citys[6] = 'г. Иркутск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Рабочего штаба, 1/4, мебельный центр «Громада», тел.: 8 800 775 18 37</li>';
    text = text + '<li>ул. Академическая, 31, 3 этаж, пав. 75 (ост. «Южная»), ТЦ «Версаль», отдел «Академия кухни»</li>';
    text = text + '<li>ул. Партизанская 56</li>';
    text = text + '<li>ул. Рабочего Штаба, 68, МЦ "Мебель сити"</li>';
    text = text + '<ul>';
    content[6] = text;
    citys[67] = 'г. Йошкар-Ола';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Советская, 105, салон «Глобал», тел.: +7 (8362) 30 25 25, +7 (8362) 30 35 35</li>';
    text = text + '<ul>';
    content[67] = text;
    citys[66] = 'г. Казань';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Лазарева, 9, ТЦ «Мебельный Универсальный Магазин», 1 этаж, мебельный салон «Трио»</li>';
    text = text + '<li>ул. Рахимова, 8, ТЦ «Мебельград», 4 этаж, мебельный салон «Трио»</li>';
    text = text + '<li>пр-т Ямашева, 93, ТЦ «Савиново», 5 этаж, мебельный салон «Трио»</li>';
    text = text + '<li>ул. Тукая, 115, ТК «Центральный дом мебели», 4 этаж, мебельный салон «Трио»</li>';
    text = text + '<li>ул. Сибирский Тракт, 34, ТК «MEGGA-МЕБЕЛЬ» 4 этаж, мебельный салон «Трио», тел.: +7 927-672-08-62</li>';
    text = text + '<li>ул. Чистопольская, д. 69, ТК "Миллениум", 3 этаж, тел.: +7 927-420-61-10</li>';
    text = text + '<ul>';
    content[66] = text;
    citys[109] = 'г. Калуга';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Плеханова, 48/8, ТЦ «Сити», цокольный этаж, магазин «Веста-мебель», тел.: +7 (4842) 22 20 56, сайт: <a href="http://www.mebel-vesta-fm.ru" target="_blank">www.mebel-vesta-fm.ru</a></li>';
    text = text + '<li>ул. Огарева, 13, магазин «Веста-мебель», тел.: +7 (4842) 22 60 77, сайт: <a href="http://www.mebel-vesta-fm.ru" target="_blank">www.mebel-vesta-fm.ru</a></li>';
    text = text + '<li>ул. Генерала Попова, д. 8А, магазин "Мир Мебели" тел.: +7 (4842) 22 12 05</li>';
    text = text + '<li>ул. Грабцевское шоссе, 4Б, МЦ "Маяк", 2 этаж, тел.: +7 (4842) 211-545</li>';
    text = text + '<li>п. Воротынск, ул. 50 лет Победы (ТБЦ), магазин "Мир Мебели", тел.: +7 (4842) 58-38-42</li>';
    text = text + '<ul>';
    content[109] = text;
    citys[33] = 'г. Кинель';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. 50 лет Октября, 85 +7 (905) 300 98 80</li>';
    text = text + '<ul>';
    content[33] = text;
    citys[68] = 'г. Киров';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Карла Маркса, 45, салон-магазин «Центральный дом мебели», тел.: +7 (8332) 220 694, www.territoria-mebeli.ru</li>';
    text = text + '<li>ул. Блюхера, 39, торговый центр «Мегадом», корпус В, тел.: +7 (8332) 711 703, www.territoria-mebeli.ru</li>';
    text = text + '<li>ул. Московская, 107, салон-магазин «Центральный дом мебели», тел.: +7 (8332) 62 85 40, +7 (8332) 62 85 41, www.territoria-mebeli.ru</li>';
    text = text + '<ul>';
    content[68] = text;
    citys[112] = 'г. Клин';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Карла Маркса, 43, тел.: +7 (49624) 76842, +7 (967) 267-9219, +7 (985) 964-5960</li>';
    text = text + '<ul>';
    content[112] = text;
    citys[25] = 'г. Ковров';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Летняя, 19, Мебельный салон «Grand» </li>';
    text = text + '<ul>';
    content[25] = text;
    citys[22] = 'г. Конаково';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Привокзальная, 1, магазин «Ульяновские кухни «Трио», тел.: +7 (48242) 3 61 61, + 7 (920) 180 68 42</li>';
    text = text + '<li>ул. Новопочтовая, 3, магазин «Корчева», тел.: + 7 (48242) 3 37 18, +7 (915) 707 47 70, +7 (920) 682 78 53</li>';
    text = text + '<ul>';
    content[22] = text;
    citys[34] = 'г. Копейск';
    text = '';
    text += '<ul>';
    text = text + '<li>пр-т Победы, 13, салон "Кухни Трио", тел.: +7 (35139) 3-52-88, +7 951-459-38-01</li>';
    text = text + '<ul>';
    content[34] = text;
    citys[84] = 'г. Краснодар';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Крылатая 2, ТЦ OZ MALL, 2 этаж салон мебели "Анна Потапова" </li>';
    text = text + '<li>ул. Восточно-Кругликовская, 22, 2 этаж, тел.: +7(861) 273-63-58</li>';
    text = text + '<li>ул. Уральская, 104-А, ТРК "SBS-Мегамолл", цокольный этаж, тел.: +7(861) 217-01-81</li>';
    text = text + '<ul>';
    content[84] = text;
    citys[121] = 'Краснодарский край';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Ейск, ул. Мичурина, д. 4А, салон "Кухни Трио", тел. (86132) 7-14-77</li>';
    text = text + '<ul>';
    content[121] = text;
    citys[115] = 'г. Краснокаменск';
    text = '';
    text += '<ul>';
    text = text + '<li>Центральный рынок, павильон «Ульяновск-мебель»</li>';
    text = text + '<li>пр-т Строителей, строение 5, ТД «Проспект», салон «Камин-Дизайн»</li>';
    text = text + '<ul>';
    content[115] = text;
    citys[116] = 'г. Красноярск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Партизана Железняка, д. 23, ТЦ "ИЮНЬ", МЦ "Интерьерия" (2 этаж), тел.: (391) 290-23-93, e-mail: trio-krasnoyarsk2@yandex.ru</li>';
    text = text + '<li>ул. Парусная, д. 12 ("Малые кварталы на Южном берегу"), тел.: (391) 206-12-36, e-mail: trio-krasnoyarsk2@yandex.ru</li>';
    text = text + '<ul>';
    content[116] = text;
    citys[13] = 'г. Курган';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Некрасова, 15А, ТЦ "Некрасов", тел.: +7 951-268-78-38</li>';
    text = text + '<ul>';
    content[13] = text;
    citys[29] = 'г. Курск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Харьковская, 3, тел.: +7 (910) 312 35 04, +7 (910) 731 84 27, +7 (908) 123 66 62</li>';
    text = text + '<li>ул. Дзержинского, 25, тел.: +7 (908) 123 66 62</li>';
    text = text + '<ul>';
    content[29] = text;
    citys[30] = 'г. Курчатов';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Мира, 19, тел.: +7 (910) 312 35 04, +7 (910) 731 84 27, +7 (908) 123 66 62</li>';
    text = text + '<ul>';
    content[30] = text;
    citys[12] = 'г. Кыштым';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Челюскинцев, 68, мебельный центр «Наш Дом»</li>';
    text = text + '<ul>';
    content[12] = text;
    citys[35] = 'Ленинградская область';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Колпино<ul><li>б-р Трудящихся, д.18, к.5 МЦ «КОЛПИНО СВ», 1 этаж, место №1, тел.: +7 (812)460 62 28, 460 64 55</li><li>б-р Трудящихся, д.16, КМД «МАГНИТ», 2 этаж, место №16-17, тел.: +7 (812) 334 90 81, доб.175</li></ul></li>';
    text = text + '<li>г. Сосновый бор<br>ул. Ленинградская, д. 66, МАГАЗИН «ПРАДА», секция «Кухни ТРИО», тел./факс: +7 (81369) 222 52</li>';
    text = text + '<ul>';
    content[35] = text;
    citys[41] = 'г. Лениногорск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Куйбышева, 17,ТДЦ "ЛЕНИНГРАД</li>';
    text = text + '<ul>';
    content[41] = text;
    citys[27] = 'г. Липецк';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Пестеля, 38, ТЦ «Лидер»</li>';
    text = text + '<ul>';
    content[27] = text;
    citys[14] = 'г. Магнитогорск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Маяковского, 21а, магазин «Мебель»</li>';
    text = text + '<li>ул. Карла Маркса, 30, магазин «Мир кухни», 1 этаж, центральное здание</li>';
    text = text + '<li>ул. Горького, 9, магазин «Мебель для Кухни»</li>';
    text = text + '<li>ул. Дзержинского, 10, магазин «Мебель»</li>';
    text = text + '<li>ул. Ленина, 87, мебельный центр «Аквилон»</li>';
    text = text + '<li>ул. Карла Маркса, 204, мебельный центр «Вавилон»</li>';
    text = text + '<li>ул. Советская, 86, магазин «Кухни»</li>';
    text = text + '<ul>';
    content[14] = text;
    citys[31] = 'г. Малоярославец';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Кирова, 1, магазин «Веста-мебель»</li>';
    text = text + '<li>ул. Московская, д. 73-А, магазин "Веста-мебель", тел: 8-903-816-16-86, сайт: <a href="http://www.mebel-vesta-fm.ru" target="_blank">www.mebel-vesta-fm.ru</a></li>';
    text = text + '<ul>';
    content[31] = text;
    citys[102] = 'г. Махачкала';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Венгерских Бойцов (Генерала Омарова) 136, ООО «Мега», тел.: +7 (928) 515 22 11</li>';
    text = text + '<ul>';
    content[102] = text;
    citys[47] = 'г. Менделеевск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Октябрьская д.3, Салон «Кухни Трио», Тел.  8-900-324-41-76</li>';
    text = text + '<ul>';
    content[47] = text;
    citys[119] = 'г. Можга';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Можгинская, д. 51, "Сюгиский базар" 2 этаж, тел. (34139) 4-33-55, +7 912-742-98-44</li>';
    text = text + '<ul>';
    content[119] = text;
    citys[39] = 'г. Москва';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Главмосстроя, 7 (район Сонцево), тел.: (495) 768-76-03, (495) 762-22-10</li>';
    text = text + '<li>ст. м. «Люблино», Тихорецкий б-р, 1, ТЦ «Люблинское Поле», корпус Т, 2 этаж, пав. Т-208, тел.: +7 (985) 317 91 45</li>';
    text = text + '<li>ст. м. «Домодедовская», ул. Генерала Белова, 35, торговый центр «Мебельград», средний уровень</li>';
    text = text + '<li>ст. м. «Новогиреево», Свободный проспект, 33, ТД «Перовский», магазин «Эксклюзив», цокольный этаж, тел.: +7 (495) 302 23 95, +7 (495) 995 56 20</li>';
    text = text + '<li>ст. м. «Новогиреево», мкр-н Новогиреево, мкр-н Новокосино, ТЦ «Салтыковский», Носовихинское шоссе, 4, тел.: +7 (916) 792 19 98</li>';
    text = text + '<li>Волгоградский пр-т, 47, ТЦ «Катуар», 1 этаж</li>';
    text = text + '<li>ст. м. «Теплый стан», ул. Профсоюзная, 152, магазин «Мебель России», 2 этаж</li>';
    text = text + '<li>ст. м. «Юго-Западная», ул. Озерная, 42, ТЦ «Мичуринский», тел.: +7 (499) 557 03 93, +7 (903) 967 64 22</li>';
    text = text + '<li>ст. м. «Марьино», б-р Новочеркасский, 20, корп. 1, цокольный этаж, Салон "ОТ и ДО", http://ledkomarket.ru/, e-mail: markt@ledkomaket.ru</li>';
    text = text + '<li>ст. м. «Выхино», ул. Хлобыстова, вл. 17, ТЦ «Альтаир-1», 1 этаж, пав. 1-56, тел.: +7 (495) 972 85 23, + 7 (903) 584 45 36, cайт: <a target="_blank" href="http://kuhni-bay.ru">kuhni-bay.ru</a> </li>';
    text = text + '<li>Киевское шоссе, 500 метров от МКАД, ТЦ «Румянцево», Блок В, 3-й этаж, пав. 2F, тел.: +7 (499) 550 28 11, <a href="mailto:trio-plus@bk.ru">trio-plus@bk.ru</a>,  cайт: <a target="_blank" href="http://www.house-mebel.com">www.house-mebel.com</a></li>';
    text = text + '<li>ст. м. «Щукинская», ул. Щукинская, 2 тел.: +7 (495) 925 12 92, <a target="_blank" href="http://www.mastermebius.ru">mastermebius.ru</a></li>';
    text = text + '<li>Каширское шоссе, 19, к. 2, ТЦ «Каширский двор», 3 этаж, центральный холл, тел.: +7 (926) 914 70 03</li>';
    text = text + '<li>ул.Большая Семеновская, д.10, ТЦ "Мебель России", первый этаж, центральный вход (первый поворот направо - до конца), тел.: 495 - 727- 44- 78, 8- 917- 582- 13 -19</li>';
    text = text + '<li>м.ул.Подбельского , Открытое шоссе д.9, ТВК "МЕБЕЛЬ РОССИИ" 89261409178 с 10-30 до 19-30</li>';
    text = text + '<li>м. Водный стадион, Кронштадтский б-р, д.14, 2 этаж В16, 89262853942 с 10-20.</li>';
    text = text + '<li>м. Тимирязевская, ул. Гончарова, д.15, 4956192320, с 10-30 до 19-30, вскр-выходной</li>';
    text = text + '<li>м. Отрадное, ул. Декабристов, д. 21 Г, 2этаж 4992039000 д.110, с 10 до 20.</li>';
    text = text + '<li>м. ВДНХ, площадь ВВЦ, павильон №15, 89264229478</li>';
    text = text + '<li>м. Бабушкинская, ул. Изумрудная, д. 8; 89268864191 с 11-19</li>';
    text = text + '<li>м. Полежаевская, ул. Зорге,1, ТД "ДОМ для ДОМА", 89262348867</li>';
    text = text + '<li>м. Полежаевская, Маршала Жукова пр-кт, 39/1, 89160922636 </li>';
    text = text + '<li>Боровское шоссе, д. 27, ТЦ"Атак", павильон 44, тел.: 8-926-782-70-98</li>';
    text = text + '<li>ст. м. "МИТИНО", ул. Дубравная, 39, салон "КУХНИ"</li>';
    text = text + '<li>Каширское ш., 5, корп.1, тел.: (499) 613-96-10 </li>';
    text = text + '<li>ул. Люблинская, 92, стр. 2, павильон 308, тел.: +7(499) 940-91-20</li>';
    text = text + '<ul>';
    content[39] = text;
    citys[37] = 'Московская область';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Балашиха <ul><li>Разинское ш., 12, ТЦ «Сфера», тел.: +7 (925) 880 69 31</li><li>мкр-н Балашиха-1, улица Крупской, 10а (здание «Детского мира»), ООО «Заря-мебель», цокольный этаж, тел.: +7 (499) 343 90 71, +7 (495) 971 64 44, <a href="http://zarya-mebel.net/">http://zarya-mebel.net/</a></li><li>мкр-н 1 Мая, 25, секция 2, ООО «Заря-мебель», цокольный этаж, тел.: +7 (499) 343 19 71, +7 (495) 971 64 44, <a href="http://zarya-mebel.net/">http://zarya-mebel.net/ </a></li><li> м. Новокосино, Носовихинское шоссе 11, влад. 4, Никольский ТВЦ линия 11 пав. 53, тел.: (495) 776-09-18, (985) 303-38-99</li></ul></li>';
    text = text + '<li>ш. Энтузиастов, 54А,ТВЦ "Галион" 3 этаж Дизайн студия "Ваши кухни", тел.: 8-916 312 9023</li>';
    text = text + '<li>г. Красногорск, <ul><li>ул. Карбышева, 10, тел.: +7 (965) 377-05-55</ul></li></li>';
    text = text + '<li>г. Воскресенск <ul><li>ул. Зелинского, 3, ИП Бирюков, тел.: +7 (49644) 1 58 19, +7 (49644) 1 64 85, +7 (49644) 1 66 10, +7 (903) 198 79 19, +7 (903) 1 49 39</li><li>ул. Цесиса, 15, ИП Молодкин, тел.: +7 (49644) 9 77 77, +7 (49644) 1 36 65, +7 (903) 534 53 23</li></ul></li>';
    text = text + '<li>г. Дедовск <ul><li>ул. Маршала Жукова, 2, тел.: +7 (903) 777-64-36</li></ul></li>';
    text = text + '<li>г. Дмитров <ul><li>ул. Космонавтов, 36, ТЦ "Автомаг Д", 2 этаж, салон Мебель & Кухни "Комфорт", режим работы: пн-пт 10:00-19:00, сб. 10:00-18:00, вс. 10:00-16:00 тел.: +7 (926) 703-2598, +7 (926) 980-6339 </ul></li></li>';
    text = text + '<li>г. Дубна <ul><li>ул. Центральная, 8, магазин «Спорттовары», тел.: +7 (903) 773 89 75</li><li>ул. Правды, 19а, магазин «Волна», тел.: +7 (916) 088 40 68, <ul><li>ул. 9 мая, 6, магазин "Русь", тел.:+7 (925) 859 34 14</li></ul></li>';
    text = text + '<li>г. Егорьевск <ul><li>ул. Смычка, д.28 Б, Торговый Комплекс "На Смычке", пав. 45 "Сделай Сам, тел.: 8-919-729-33-35, 8-916-291-53-52</li></ul></li>';
    text = text + '<li>г. Жуковский <ul><li>ул. Театральная, 3, ТК "Ярмарка на Театральной", павильон 251 тел.: +7 (495) 580 65 20 </li></ul></li>';
    text = text + '<li>г. Истра <ul><li>ул. Босова 11, тел.: +7 (496) 31 20 00</li></ul></li>';
    text = text + '<li>г. Луховицы <ul><li>ул. Куйбышева, 108, магазин «Мебель», ИП Лексашова Л. Н., тел.: +7 (49663) 4 12 06, 2 48 04, +7 (962) 941 85 91</li></ul></li>';
    text = text + '<li>г. Мытищи <ul><li>ул. Силикатная, 36, ООО «Снежана»,<br> тел.: +7 (495) 788 26 80,<br>email: <a href="mailto:sneg_788@mail.ru">sneg_788@mail.ru</a>,<br>сайт: <a href="http://www.legomebel.ru">www.legomebel.ru</a></li><li> пр-т Новомытищенский, 12/1, цокольный этаж, Салон "Виктория", режим работы: пн-сб - 10:00-20:00, Вс. - 10:00-18:00 </li></ul></li>';
    text = text + '<li>г. Кашира <ul><li>ул. Иванова, 3, ООО «Ивушка», тел.: +7 (49669) 5 52 14, +7 (49669) 39 9 69, +7 (49669) 3 21 92, +7 (49669) 3 20 12</li><li>ул. Ильича, 5/7, «Темп-магазин», ИП Кошечкина, тел.: +7 (901) 504 35 09, +7 (901) 541 61 64, +7 (901) 502 75 90, +7 (916) 364 30 64, +7 (926) 179 80 05, +7 (903) 103 05 28</li></ul></li>';
    text = text + '<li>г. Коломна <ul><li>ул. Ленина, 44, магазин «Предмет домашнего уюта», ИП Лексашова Л. Н., тел.: +7 (496) 613 20 11, +7 (496) 613 12 30, +7 (926) 549 98 89</li><li>ул. Октябрьской Революции, 198а (тр. остановка «Площадь двух революций»), тел.: +7 (496) 618 65 09, +7 (916) 963 15 20</li><li>ул. Гаврилова, 4а, ТК «Девичье поле», цокольный этаж, тел.: +7 (496) 610 11 47</li></ul></li>';
    text = text + '<li>г. Наро-Фоминск <ul><li>ул. Курзенкова, 22, ООО «Меандр», тел.: +7 (496) 343 00 83, +7 (926) 967 18 20</li><li>72 км Киевского ш., рядом с магазином стройматериалов «Все для дома»</li><li>ул. М. Жукова, 8, ООО «Балерика-ПК», тел.: + 7 (496) 343 36 80, + 7 (906) 641 12 21, + 7 (906) 954 31 34</li><li>ул. Свободы, 2, стр. 7, ООО «Балерика-ПК», тел.: + 7 (926) 354 31 34</li></ul></li>';
    text = text + '<li>г. Нахабино <ul><li>ул. Вокзальная, 7, тел.: +7 (903) 777-64-45</li><li>ул. Институтская, 4, «Уют», тел.: +7 (495) 566 07 47, +7 (495) 566 57 58, +7 (962) 910 10 95</li></ul></li>';
    text = text + '<li>г. Подольск <ul><li>ул. Станционная, 11, МЦ «ВАГАНТ», 1 этаж, тел.: +7 (495) 926 32 32 (доб. 210), +7 (4967) 52 54 30 (доб. 210)</li><li>ул. Комсомольская, 46, ИП Исаева Елена Леонидовна, тел.: +7 (496) 755 65 45, +7 (905) 729 80 05 </li><li>Ленинградский проезд, 1 магазин Белорусской мебели, 1, 8(496) 764-86-68, режим работы: пн.- сб. с 10:00 до 20:00, вс. с 10:00 до 18:00</li></ul> <ul><li> Симферопольское ш., 38, ТЦ "Хамелеон", тел.:8 (496) 764-86-68, режим работы пн.-вс. с 10:00 до 20:00</li></ul> <ul><li> Октябрьский пр-т, 2Г, тел.: (4967) 64-11-81</li></ul> </li>';
    text = text + '<li>Поселок Запрудня <ul><li>Талдомский р-н, ул. Ленина, 1, «Евростиль», ИП Сергеев Ю. В., тел.: +7 (909) 695 81 17</li></ul></li>';
    text = text + '<li>г. Серпухов <ul><li>ул. Горького, 3а</li><li>ул. 1-я Московская, 44, ТЦ «Б-Класс», 1 этаж, тел.: +7 (4967) 37 16 08, +7 (915) 239 11 12</li></ul></li>';
    text = text + '<li>г. Солнечногорск <ul><li> ул. Лесная, 1/17, торговый комплекс «Сфера» (вход со двора), тел.: +7 (926) 497 50 21, +7 (4962) 61 12 68</li></ul></li>';
    text = text + '<li>г. Чехов <ul><li>Симферопольское шоссе, 2, ИП Артемьев, тел.: +7 (926) 834 58 57</li></ul></li>';
    text = text + '<li>г. Химки <ul><li>мкр-н Сходня, ул. Кирова, 1 (2 этаж) ИП Зюганова Е. А., тел.: +7 (910) 439 40 28, +7 (495) 574 06 55</li></ul></li>';
    text = text + '<li>г. Шатура <ul><li>ул. Проспект Ильича, д. 54, салон-магазин "Сделай Сам, тел.: 8-985-910-73-74</li></ul></li>';
    text = text + '<li>г. Юбилейный <ul><li>ул. Лесная, 12, ТЦ «ВЕРТИКАЛЬ», 2 этаж, пав. 48, тел.: +7 (903) 143 82 98</li> <li>ул.Садовая, д.6, тел.:8-926-435-22-29</li></ul></li>';
    text = text + '<li>Рузский р-н, пос. Тучково, Привокзальная площадь, 9, ТЦ «Золотая вертикаль», мебельный салон «Стиль-Дизайн»</li>';
    text = text + '<li>Одинцовский район, д. Малые Вяземы, 40-й км Можайского шоссе, 60, ТЦ «Фонтанка», тел.: +7 (903) 584 20 71</li>';
    text = text + '<li>Одинцовский район, с. Введенское, 61, ТЦ "Введенское", тел.: +7 (495) 973-86-71</li>';
    text = text + '<li>г. Одинцово, ул. Вокзальная, 4/2, ТЦ "Андромеда", салон "СТ-Дизайн", 4 подъезд, 2 этаж, с правой стороны здания, тел.: +7 (499) 992-76-92, + 7 (965) 399-14-96</li>';
    text = text + '<li>г. Одинцово, ул. Дальняя д.15 ТЦ "ЕвроДом" 2 этаж (напротив "Гусаркой Баллады") часы работы 10-20 тел. 8 903-544-22-22</li>';
    text = text + '<li>г. Сергиев Посад <ul><li>пр-т Красной Армии, 212Б, ТЦ "СТРОЙКОНТИНЕНТ", тел.: +7 (985) 380-99-56</li><li>ул. 1-ой Ударной Армии, 12, ТЦ "Торговые ряды", тел.: +7 (916) 203-18-34</li><li>ул. Вознесенская, 53А, тел.: +7(929) 987-7249</li></ul></li>';
    text = text + '<li>г. Реутов<ul><li>Носовихинское шоссе, влад. 4, ТЦ «Салтыковский»</li><li>ул. Ленина, 1, ТЦ «Карат», тел.: +7 (926) 822 66 60</li></ul></li>';
    text = text + '<li>г. Пушкино <ul><li>Пушкинский проспект, д.2,тел.:8-496-535-82-35</li></ul> <ul><li> ул. Тургенева, 10, 3 этаж, тел.: +7 (49653) 996-87</li> </ul> <ul><li> Ярославское шоссе, Владение 190, ТК "Пулмарт", корп. 1, 2 этаж, тел.: +7 (498) 720-50-44 (доб. 211), 761-00-32 </li> </ul> <ul><li> ст. Ярославское ш., 1/3, территория мехколонны, тел.: +7 (496) 53-246-23, +7 (495) 518-29-85 (склад магазин)</li> </ul></li>';
    text = text + '<li>г. Королёв <ul><li>ул.Фрунзе, д.4,тел.:8-967-208-46-22</li></ul></li>';
    text = text + '<li><ul><li>ул.Станционная, д.4, ТК "Крестьянский рынок", 2 этаж, режим работы: с 10:00 до 19:00, тел.:8-966-045-6618</li></ul></li>';
    text = text + '<li>г. Ступино <ul><li>ул.Тургенева, д.15/24,тел.:8-901-553-22-00</li></ul></li>';
    text = text + '<li>п. Селятино, д. 45, магазин "Мебель", тел.: (496) 342-90-46</li>';
    text = text + '<li>г. Лобня <ul><li> ул. Маяковского, 1, ТЦ "Южный" режим работы: с 10:00 до 19:00, тел.: +7 (905) 527-2575</li>';
    text = text + '<li>Ленинский район, дер. Говорово, <ul><li>47 км МКАД (на пересечении с Боровским шоссе), строение 21, тел.: +7 (499) 343-36-92, +7 (985) 459-64-28</ul></li></li>';
    text = text + '<ul>';
    content[37] = text;
    citys[94] = 'г. Мурманск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Свердлова, 8, корп. 1, магазин «Интермебель»</li>';
    text = text + '<li>ул. Книповича, 34, салон «Стиль и кухни», тел./факс: +7 (8152) 44 21 38 </li>';
    text = text + '<ul>';
    content[94] = text;
    citys[21] = 'г. Муром';
    text = '';
    text += '<ul>';
    text = text + '<li>Радиозаводское шоссе, 38А, мебельный салон "Новинка", тел.: +7(849234) 3-51-02, пн.-пт. 09:00-18:00, сб.-вс. 09:00-15:00 </li>';
    text = text + '<ul>';
    content[21] = text;
    citys[46] = 'г. Набережные Челны';
    text = '';
    text += '<ul>';
    text = text + '<li>тел.: +7 (8552) 31 43 54</li>';
    text = text + '<li>пр-т Сююмбике, 45/04, ТЦ «На Пушкинской», 1 этаж, салон мебели «Мебелайн», тел. (8552) 52-58-50</li>';
    text = text + '<li>пр-т Московский, 53/07, ТК «Кама», 1 этаж, салон мебели «Мебелайн», тел. (8552)36-73-02</li>';
    text = text + '<li>1-я автодорога, ТД «МЕГАСТРОЙ», салон «Мебеллайн», тел. (8552) 36-73-71</li>';
    text = text + '<li>пр-т Московский, 30/18, ТД «Дом Мебели», 1-й этаж, салон «Кухни», тел. (8552)31-25-70</li>';
    text = text + '<li>пр-т Мусы Джалиля, 25 (бывшее здание Транс агенства), салон мебели "Кухни Трио", тел. (8552)36-73-01</li>';
    text = text + '<li>пр-т Мира, 4А (9/41), салон мебели "Энли", тел. (8552)47-44-66</li>';
    text = text + '<ul>';
    content[46] = text;
    citys[2] = 'г. Находка';
    text = '';
    text += '<ul>';
    text = text + '<li>Находкинский пр-т, 1с, магазин «Скандинавия»</li>';
    text = text + '<ul>';
    content[2] = text;
    citys[61] = 'г. Нефтекамск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Социалистическая, 53, тел.: +7 (34783) 411 66</li>';
    text = text + '<li>пр-т Комсомольский, 28, салон «Кухни «Трио», тел.: +7 (34783) 44 84</li>';
    text = text + '<ul>';
    content[61] = text;
    citys[74] = 'Нижегородская область';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Дзержинск, ул. Красноармейская, 15е, "Кухни ТРИО", тел: 8 831 331 43 48</li>';
    text = text + '<ul>';
    content[74] = text;
    citys[19] = 'г. Нижневартовск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Интернациональная, 20, магазин «Кухня как эргогенная зона»</li>';
    text = text + '<li>ул. Индустриальная, 29, ТК «Полигон», магазин «Кухни на заказ»</li>';
    text = text + '<li>ул.  60 лет Октября 2П-2, 1, стр. 1, салон ЛИВАДД "Кухни для Вас", тел.: +7 (3466) 61-27-66, 29-63-68</li>';
    text = text + '<li>ул. Дружбы Народов, 33, маг. "Кухни на заказ", тел.: +7 (3466) 45 64 50</li>';
    text = text + '<ul>';
    content[19] = text;
    citys[48] = 'г. Нижнекамск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Мира, 11, ТЦ «Пальмира»</li>';
    text = text + '<li>ул. Корабельная, 44, ТЦ "Якорь", 2этаж, +7(8555)49-88-29</li>';
    text = text + '<ul>';
    content[48] = text;
    citys[73] = 'г. Нижний Новгород';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Бекетова, 28, мебельный салон «Универсаль», тел.: +7 (831) 412 09 62, +7 (831) 412 07 50</li>';
    text = text + '<li>ул. Бекетова, 13, мебельный центр «БУМ», первый этаж, левое крыло, «Кухни Трио», тел.: +7 (831) 278 61 72</li>';
    text = text + '<li>ул. Гордеевская, 7, ТЦ «Мебельный Базар», 2 этаж, левое крыло, бутик 221а, тел.: +7 (831) 265 92 94</li>';
    text = text + '<li>ш. Казанское, 6, ТЦ "Фестиваль", тел.: 8 831 282 00 81</li>';
    text = text + '<ul>';
    content[73] = text;
    citys[52] = 'г. Новокуйбышевск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Белинского, 18, тел.: +7 (84635) 66 999</li>';
    text = text + '<ul>';
    content[52] = text;
    citys[80] = 'г. Новороссийск';
    text = '';
    text += '<ul>';
    text = text + '<li>пр-т Дзержинского, 211, 2 этаж, «Кухни «Трио», «Седак мебель»</li>';
    text = text + '<ul>';
    content[80] = text;
    citys[9] = 'г. Новосибирск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Богдана Хмельницкого, 2, салон мебели «Кухни России»</li>';
    text = text + '<li>ул. Есенина, 8/1, салон мебели «Кухни России»</li>';
    text = text + '<li>ул. Гурьевская, 32, салон мебели «Эскадо»</li>';
    text = text + '<li>ул. Добролюбова, 33, салон мебели «Панорама»</li>';
    text = text + '<ul>';
    content[9] = text;
    citys[36] = 'г. Новоуральск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Юбилейная, 9, мебельный салон «ШИК», тел.: +7 (34370) 3 16 46</li>';
    text = text + '<ul>';
    content[36] = text;
    citys[43] = 'г. Обнинск';
    text = '';
    text += '<ul>';
    text = text + '<li>Калужская область, ул. Гагарина, 5а, ТЦ «Триумф-Плаза»</li>';
    text = text + '<li>ул. Энгельса, 19, магазин «Веста-мебель», тел.: +7 (48439) 3 65 56, сайт: <a href="http://www.mebel-vesta-fm.ru" target="_blank">www.mebel-vesta-fm.ru</a></li>';
    text = text + '<li>Киевское шоссе, Строительная Ярмарка 101 км, мебельный центр, сектор № 3, «Веста-мебель», тел.: +7 (903) 816 16 87, сайт: <a href="http://www.mebel-vesta-fm.ru" target="_blank">www.mebel-vesta-fm.ru</a></li>';
    text = text + '<ul>';
    content[43] = text;
    citys[100] = 'г. Озерск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Космонавтов, 19 </li>';
    text = text + '<ul>';
    content[100] = text;
    citys[42] = 'г. Октябрьский';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Свердлова, 28 магазин «Фараон»</li>';
    text = text + '<li>проезд Островского, 10, магазин «Радуга» </li>';
    text = text + '<ul>';
    content[42] = text;
    citys[104] = 'г. Омск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Маршала Жукова, 76, салон «Авангард-Мебель», тел.: +7 (3812) 37 08 82</li>';
    text = text + '<li>пр-т К. Маркса, 48, салон «Авангард-Мебель», тел.: +7 (3812) 46 31 57</li>';
    text = text + '<li>пр-т Мира, 6, салон «Авангард-Мебель», тел.: +7 (3812) 60 60 64</li>';
    text = text + '<li>ул. Кирова, 18/1, салон «Авангард-Мебель», тел.: +7 (3812) 43 08 74</li>';
    text = text + '<li>ул. 70 лет Октября, 14, салон «Авангард-Мебель», тел.: +7 (3812) 70 03 10</li>';
    text = text + '<li>ул. 21-я Амурская, 11, салон «Авангард-Мебель», тел.: +7 (3812) 26 30 67</li>';
    text = text + '<ul>';
    content[104] = text;
    citys[28] = 'г. Орел';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Пионерская, 1, мебельный салон «Идея»</li>';
    text = text + '<ul>';
    content[28] = text;
    citys[55] = 'г. Оренбург';
    text = '';
    text += '<ul>';
    text = text + '<li>пр-т Победы, 174, Интерьерный центр М3, 4 этаж, +7 (3532) 466-156</li>';
    text = text + '<li>ул. Шевченко, 20Б, ТЦ "Мебельград", 1 этаж, тел.: +7 (3532) 466-977</li>';
    text = text + '<ul>';
    content[55] = text;
    citys[69] = 'г. Орск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Беляева, 2б</li>';
    text = text + '<li>ул. Краматорская, 18, салон мебели «Интерьер»</li>';
    text = text + '<ul>';
    content[69] = text;
    citys[125] = 'г. Пенза';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Кирова, 43, ТЦ "Большая медведица", 3 этаж</li>';
    text = text + '<li>ул. Суворова, 92, ТЦ "Красивая мебель", 2 этаж, мебельный салон "Мебельер", тел.: +7 (8412) 20-28-06</li>';
    text = text + '<li>пр-т Строителей, 38, магазин "Мебель"</li>';
    text = text + '<li>пр-т Строителей, 45а, магазин "Космо-Сити", 3 этаж</li>';
    text = text + '<ul>';
    content[125] = text;
    citys[17] = 'г. Первоуральск ';
    text = '';
    text += '<ul>';
    text = text + '<li>проспект Ильича, 21, магазин «Кухни», тел.: +7 (34392) 55 610</li>';
    text = text + '<ul>';
    content[17] = text;
    citys[57] = 'г. Пермь ';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Свиязева, 39а, мебельный центр «Олимп», тел.: +7 (342) 228 88 88, +7 (342) 223 59 19</li>';
    text = text + '<li>ул. Кировоградская, 51, мебельный центр «Олимп», тел.: +7 (342) 252 58 69</li>';
    text = text + '<li>ул. Гальперина, д. 6, корп. 2, тел. (342) 283-67-13</li>';
    text = text + '<li>проспект Парковый, д. 25г, салон «Кухни ТРИО», тел. (342) 222-01-01</li>';
    text = text + '<li>ул. Героев Хасана, д. 34, ТЦ «Чкаловский», павильон 2, тел. (342) 2-144-669</li>';
    text = text + '<li>ул. Героев Хасана, д. 34, ТЦ «Чкаловский», павильон 4, 2 этаж, тел. (342) 2-40-95-50</li>';
    text = text + '<li>ул. Героев Хасана, д. 109, ТЦ «Баумолл», 2 этаж, тел. (342) 2-144-841</li>';
    text = text + '<li>ул. Энергетиков, д. 37, МЦ «Мебелёво», цокольн. этаж, тел. (342) 246-25-91</li>';
    text = text + '<li>ул. Трамвайная, 33, ТД «Парковый», пав. № 4, 2 этаж, «Кухни «Трио», тел.: +7 (342) 256 40 84</li>';
    text = text + '<li>ул. Попова, 25, ТЦ «Товары Прикамья», тел.: +7 (901) 267 31 10</li>';
    text = text + '<ul>';
    content[57] = text;
    citys[3] = 'г. Петропавловск-Камчатский';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Индустриальная, 11, сеть мебельных салонов «Серая лошадь»</li>';
    text = text + '<li>Петропавловское шоссе, 27а, сеть мебельных салонов «Серая лошадь»</li>';
    text = text + '<li>ул. Вилюйская, 77, сеть мебельных салонов «Серая лошадь»</li>';
    text = text + '<ul>';
    content[3] = text;
    citys[96] = 'г. Печора';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Русанова, 34, мебельный центр «Межрай база»</li>';
    text = text + '<ul>';
    content[96] = text;
    citys[124] = 'г. Поронайск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Комсомольская, д. 3б, м-н Классик, тел.: 8(42431)41-0-82</li>';
    text = text + '<ul>';
    content[124] = text;
    citys[120] = 'г. Пушкино';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Тургенева, д. 10, 3 этаж (здание "Пятерочки" и "Медиа") "Ателье мебели "Татьяна"", тел\ф. (49653) 996-87</li>';
    text = text + '<li>Ярославское шоссе, Владение 190, ТК "ПУЛМАРТ корп. 1, 2 этаж "Ателье мебели "Татьяна"", тел\ф. (498) 720-50-44 доб. 211, 761-00-32</li>';
    text = text + '<li>ст. Ярославское шоссе, д. 1/3, территория мехколонны,"Ателье мебели "Татьяна"" тел/ф. (496) 532-46-23, (495)518-29-85 - Склад-Магазин</li>';
    text = text + '<ul>';
    content[120] = text;
    citys[82] = 'г. Ростов-на-Дону';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Малиновского, 23а, ТЦ "МебельГрад", 5 этаж</li>';
    text = text + '<li>пр. Космонавтов 6/13, ТЦ "Форум", 2 этаж</li>';
    text = text + '<li>пр-т Нагибина, 32, Салон "Анна Потапова"</li>';
    text = text + '<ul>';
    content[82] = text;
    citys[105] = 'г. Рязань';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Циолковского, 7, мебельный салон "Тоскана" тел.: +7 (4912) 460-360, режим работы с 10:00 до 20:00 (без выходных)</li>';
    text = text + '<li>185 км окружной дороги, стр. 6, гипермаркет «Стройка», 2 этаж, тел.: +7 (4912) 300 300</li>';
    text = text + '<li>ул. Маяковского, 111, "Кухни Венеция", тел.: +7(4912) 21-81-57</li>';
    text = text + '<li>ул. Гагарина, 164, ТРЦ "Полетаевский", салон "Кухни Браво", 3 этаж, тел.: +7 (910)632-35-95</li>';
    text = text + '<li>ул. Комбайновая, д. 26, мебельный салон "Дом-1", тел.: +7 (4912) 90-40-55</li>';
    text = text + '<ul>';
    content[105] = text;
    citys[51] = 'г. Самара';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Авроры, 114А, МЦ Мебельград, 1 этаж, Салон "Кухни Трио", тел.: +7 (846) 374-03-84</li>';
    text = text + '<li>ул. 22 Партсъезда, 1, ТЦ "Победа", 1 этаж, секция 148, "Кухни Трио", тел. 372-13-84</li>';
    text = text + '<li>ул. Красноармейская, ТЦ "Кубатура", корпус 4, секция 111, "Кухни Трио", тел. +7 (846)379-16-67</li>';
    text = text + '<li>МЦ «МЯГКОФФ», ул. Революционная, 70, сек. 302, тел.: 372-00-45</li>';
    text = text + '<li>ТЦ «ПОБЕДА», Заводское шоссе, 8, сек. 143, 145, тел.: 97-97-389</li>';
    text = text + '<li>18 км ул. Московское шоссе, 23, ТРК "Московский", Центр мебели  (цокольный этаж), тел.: 972-87-84. Режим работы: с 10:00 до 20:00</li>';
    text = text + '<li>ул.Партизанская,17, Мега Мебель 2, секция М19 "Кухни Трио", 990-59-11</li>';
    text = text + '<ul>';
    content[51] = text;
    citys[101] = 'Самарская область';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Жигулевск, ул. Ленина,8, ТЦ «Березка» секция 110, тел.: +7 (917) 126 52 55</li>';
    text = text + '<li>г. Кинель,  ул. 50 лет Октября 85, салон "Мебель Поволжья", тел. +7 905-300-98-80, e-mail: aryutin.kinel@mail.ru</li>';
    text = text + '<li>г. Отрадный, ул. Центральная,8, МЦ «Александрия»</li>';
    text = text + '<li>г. Отрадный, пр-д 1 Северный,3а, МЦ «Александрия»</li>';
    text = text + '<ul>';
    content[101] = text;
    citys[95] = 'г. Санкт-Петербург';
    text = '';
    text += '<ul>';
    text = text + '<li>МЦ «Аквилон», ст. м. «Лесная», ул. Новолитовская, 15в, 3 этаж, места 107 – 109, тел.: +7 (812) 335 05 39, +7 (812) 318 50 68</li>';
    text = text + '<li>МЦ «Мебельный континент», ст. м. «Электросила», ул. Варшавская, 3 :<br> - 1 очередь, 4 этаж, места 457<br>тел.: +7 (812) 337 17 76<br> - 3 очередь, 2 этаж, места 201 – 203,<br>тел.: +7 (812) 493 35 44, +7 (812) 318 70 58</li>';
    text = text + '<li>МЦ «Мебель-холл», ст. м. «Ладожская», пл. Карла Фаберже, д. 8 лит. В:<br> 2 этаж, места 226 – 230, тел.: +7 (812) 337 24 29<br> - новый корпус, 3 этаж, секция 338, тел.: +7 (812) 329 05 91</li>';
    text = text + '<li>MЦ «Клен», ст.м. "Улица Дыбенко", пр-т Большевиков, 33/1, цокольный этаж, секция "Кухни Трио", тел.: +7 (953) 364-52-55</li>';
    text = text + '<li>МЦ "СВ", г. Колпино, Бульвар Трудящихся , д.18, корп. 5, тел.: 460-64-72 доб. 100 </li>';
    text = text + '<li>МЦ Круиз, ст.м. "Комендантский проспект", Комендантский пр., д. 4/2, 3 этаж, секция 306/С "Кухни Трио", тел.: +7(812)385-40-22</li>';
    text = text + '<li>Магазин Уют "Кухни ТРИО", ст.м. "Старая деревня", пр. Оптиков, д. 45, корпус 1 , тел.: +7(953)343-54-48</li>';
    text = text + '<li>МЦ "Гранд Каньон", ст.м. "Проспект Просвещения", ул. Шостаковича, д. 8, 6 этаж, секция 624 "Кухни Трио", тел.: (812) 647-80-27</li>';
    text = text + '<li>МЦ "Мебель Молл", г. Колпино, ул. Оборонная, д.1, 2 этаж, секция 88, т-он.: (812) 244-89-86</li>';
    text = text + '<li>ТЦ "Стройдвор", ст.м.  "Проспект Просвещения", пр. Энгельса, д. 138, цокольный этаж, секция 11 "Кухни Трио", тел.: +7 (981) 748-36-55</li>';
    text = text + '<li>ТЦ Метрика Супер-Центр, ст.м. "Проспект Просвещения", "Озерки", Выборгское шоссе, д. 214, секция 23 "Кухни Трио"</li>';
    text = text + '<li>ТЦ Меркурий (Стройдвор), ст.м. "Старая Деревня", "Черная речка", ул. Савушкина, д. 141, цокольный этаж, секция 18, "Кухни Трио"</li>';
    text = text + '<li>ТЦ Торговый дом (Строймаркет Архимед), ст.м. "Проспект Большевиков", ул. Коллонтай, д. 18, цокольный этаж, секция 1-02б, тел.: (812) 449-63-96</li>';
    text = text + '<li>МС Прада, г. Сосновый Бор, ул. Солнечная, д. 15А, магазин-салон "Прада", секция "Кухни Трио", тел.:(81369) 222-52</li>';
    text = text + '<li>ТРК "Северный молл", ст.м. "Гражданский проспект", "Девятино", пр. Культуры, 21, 1 этаж, секция "Кухни Трио"</li>';
    text = text + '<li>Мебель "Кухни ТРИО", ст.м. "Ленинский пр.", Ленинский пр., д. 140, вход справа, секция "Кухни Трио", тел.: (965) 813-83-00</li>';
    text = text + '<li>ТК Переход, ст.м. "Проспект Ветеранов", "Ленинский проспект", ул. Маршала Захарова, д. 21, секция "Кухни Трио", тел.: (812)611-10-46</li>';
    text = text + '<li>ТЦ "Метрика", ст.м. "Проспект Ветеранов", "Ленинский проспект", Таллинское шоссе, д. 40, секция 2, "Кухни Трио", тел.: (904)642-55-80</li>';
    text = text + '<li>Магазин "Строитель", ст.м. "Пионерская", пр. Испытателей, 29, корп. 1, 2 этаж, секция 5 "Кухни Трио", тел.: 677-11-98</li>';
    text = text + '<li>Магазин "Строитель", ст.м. "Проспект Просвещения", пр-т Просвещения, 31, 1 этаж, секция "Кухни Трио", тел.: +7 (812) 242-58-44</li>';
    text = text + '<li>МЦ "12 Стульев", ст.м. Купчино, ул. Балканская, д. 17, лит.А, место С4, +7 (812)383-50-32</li>';
    text = text + '<li>Магазин "Кухни Трио", ст.м. "Старая Деревня", ул. Туристская, д. 28/1, тел.: +7(952)395-39-43</li>';
    text = text + '<li>ТК "Мультимекс", ст.м. "Международная", "Ломоносовская", Южное шоссе, 37/1, зал 2, секция 10, тел.: +7 (812) 677-67-51</li>';
    text = text + '<li>ТК Нева, ст.м. "Пролетарская", пр. Обуховской обороны, д. 116, 3 этаж, секция "Кухни Трио", тел.: (963) 315-36-56</li>';
    text = text + '<li>МЦ "12 Стульев", ст.м. Купчино, ул. Балканская, д. 5, 3 этаж, секция А10, тел.: +7(812)383-56-61</li>';
    text = text + '<ul>';
    content[95] = text;
    citys[59] = 'г. Саранск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Полежаева, 31, МЦ "Находка", e-mail: trio@nahodka.org, www.nahodka.org</li>';
    text = text + '<ul>';
    content[59] = text;
    citys[71] = 'г. Саратов';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Симбирская, 154 (цокольный этаж), гипермаркет мебели и товаров для дома «Мебель Сити»</li>';
    text = text + '<li>пр-т Энтузиастов, 26а, магазин «Мебель России»</li>';
    text = text + '<li>ул. Орджоникидзе, 24, магазин «Мебель России»</li>';
    text = text + '<li>пр-т Антонова, гипермаркет «Магнит», «Ярмарка мебели», тел.: +7 (8452) 53 23 20, +7 (8452) 34 73 92 (график работы: 10:00 – 19:00)</li>';
    text = text + '<li>ул. Чернышевского, 1, МЦ «Ярмарка мебели» </li>';
    text = text + '<ul>';
    content[71] = text;
    citys[72] = 'Саратовская область';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Энгельс, ул. Тельмана, д. 26, тел.: (8452)347696, 89271247000</li>';
    text = text + '<li>г. Маркс, ул. Интернациональная, д. 7, тел. (84567)5-53-79, +7 927-116-43-73</li>';
    text = text + '<ul>';
    content[72] = text;
    citys[40] = 'г. Саров';
    text = '';
    text += '<ul>';
    text = text + '<li>проспект Октябрьский, 7, Студия "Кухни на Октябрьском", тел.: +7 (831) 306 92 22, <a href="mailto:trio_sarov@mail.ru">trio_sarov@mail.ru</a><br>График работы: с 10 до 20 часов, без выходных.</li>';
    text = text + '<ul>';
    content[40] = text;
    citys[93] = 'г. Северодвинск';
    text = '';
    text += '<ul>';
    text = text + '<li>пр-т Морской, 40а, ТЦ «Морской», магазин «Дом кухни и света КЛЕН»</li>';
    text = text + '<ul>';
    content[93] = text;
    citys[88] = 'г. Североморск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. 1-я Московская, 4/24, магазин «Манеж»</li>';
    text = text + '<ul>';
    content[88] = text;
    citys[5] = 'г. Славгород';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Карла Либкнехта, 179, магазин «Уют»</li>';
    text = text + '<li>ул. Ленина, 144, ТД «Искра»</li>';
    text = text + '<ul>';
    content[5] = text;
    citys[8] = 'г. Слюдянка';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Ленина, 3/1, мебельный салон «Мир Мебели»</li>';
    text = text + '<ul>';
    content[8] = text;
    citys[111] = 'г. Смоленск';
    text = '';
    text += '<ul>';
    text = text + '<li>проспект Гагарина, 22, ТЦ "Зебра", 2-й этаж; тел. 8(4812) 24-48-06</li>';
    text = text + '<ul>';
    content[111] = text;
    citys[75] = 'г. Соликамск ';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Северная, 46, ТД «Бисмарк», салон «Кухни «Трио», тел.: +7 (342) 534 04 00</li>';
    text = text + '<ul>';
    content[75] = text;
    citys[85] = 'г. Сочи ';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Конституции, 44а, мебельный салон «Садко», тел. (8622) 98-28-41</li>';
    text = text + '<li>ул. Донская, 30, «КУХНИ РОССИИ», тел. (8622)55-09-80</li>';
    text = text + '<li>ул. Донская, 27, салон "Столплит", (8622) 55-37-19</li>';
    text = text + '<ul>';
    content[85] = text;
    citys[10] = 'г. Стрежевой';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Коммунальная, 53, ТК «Сосна»</li>';
    text = text + '<ul>';
    content[10] = text;
    citys[64] = 'г. Сызрань';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Московская, 25, магазин «Железнодорожник»</li>';
    text = text + '<li>ул. Советская, 123, магазин «Мечта»</li>';
    text = text + '<li>ул. К. Федина, 86, ЦУМ «Сызрань», цокольный этаж </li>';
    text = text + '<li>ул. Красная, 12, ТЦ "ГеРА и К", мебельные ряды, место 6</li>';
    text = text + '<li>ул. Выборгская, 7, ТЦ "Мир техники", тел.: +7 (927) 774-33-94, +7 (927) 211-28-48</li>';
    text = text + '<ul>';
    content[64] = text;
    citys[98] = 'г. Сыктывкар';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Пушкина, 36, «Дом кухни на Пушкина», тел.: +7 (212) 20 16 21 </li>';
    text = text + '<ul>';
    content[98] = text;
    citys[32] = 'г. Таганрог';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Чехова, 98, тел.: +7 (8634) 36 36 30</li>';
    text = text + '<ul>';
    content[32] = text;
    citys[26] = 'г. Тамбов';
    text = '';
    text += '<ul>';
    text = text + '<li>Моршанское шоссе, 18а, мебельный салон «Дом кухни» </li>';
    text = text + '<ul>';
    content[26] = text;
    citys[23] = 'г. Тверь';
    text = '';
    text += '<ul>';
    text = text + '<li>пер. Свободный, 1, магазин «Волга»</li>';
    text = text + '<li>ул. Виноградова, 9, "Салон кухни "Трио"", ост. «Пролетарка», тел.: +7 (4822) 74 70 90, Skype — ogula1</li>';
    text = text + '<li>набережная Афанасия Никитина, 110, студия корпусной мебели  <a target="_blank" href="https://sites.google.com/site/skmvera/">«ВЕРА»</a>, тел.: +7 (915) 745 43 72 </li>';
    text = text + '<li>проезд Дарвина, д.10, магазин"Мебель". Тел:8(4822)42-21-77,8(4822)33-09-77</li>';
    text = text + '<li>проспект Победы, д.43, магазин"Мебель". Тел:8(4822)58-19-90</li>';
    text = text + '<ul>';
    content[23] = text;
    citys[18] = 'г. Тобольск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Октябрьская, 48, магазин «Мебельный городок»</li>';
    text = text + '<ul>';
    content[18] = text;
    citys[53] = 'г. Тольятти';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Баныкина, 16, 2 этаж, ТОЦ "Фаворит", тел.: +7 (8482) 773-309</li>';
    text = text + '<li>ул. Юбилейная, 2б, «Восточный дублер», тел.: +7 (8482) 36 65 56</li>';
    text = text + '<li>ул. Громовой, 33, «Мега Мебель», тел.: +7 (8482) 51 37 11</li>';
    text = text + '<li>ул. Революционная, 72, ТЦ «Культтовары», тел.: +7 (8482) 51 70 99</li>';
    text = text + '<li>ул. Дзержинского, 38а, ТД «Омега», тел.: +7 (8482) 36 83 00</li>';
    text = text + '<li>ул. Революционная, 52, 2 этаж, офис 33, дом быта «Орбита», тел.: +7 (8482) 37 49 18</li>';
    text = text + '<li>ул. 40 лет Победы 14, 2 этаж, ТД «Мебельный дом», тел.: +7 (8482) 36 57 36</li>';
    text = text + '<li>ТЦ "АВРОРА", ул. 70 лет Октября, 3, 2 этаж, тел.: (8284) 95-03-07</li>';
    text = text + '<li> ул. Матросова, 31а, тел. (8482) 20-90-67</li>';
    text = text + '<ul>';
    content[53] = text;
    citys[90] = 'г. Туапсе';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Гагарина, тел.: +7 (928) 42 57 492, <a href="mailto:kyxniTRIO@mail.ru">kyxniTRIO@mail.ru</a></li>';
    text = text + '<ul>';
    content[90] = text;
    citys[110] = 'г. Тула';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Коминтерна, 24г, ТЦ «Таурус», корпус № 2, 2 этаж, пав. «Веста-мебель», тел.: +7 (4872) 70 20 21, <a href="http://www.mebel-vesta-fm.ru" target="_blank">www.mebel-vesta-fm.ru</a></li>';
    text = text + '<li>ул. Октябрьская, 95, магазин "Русмебель" тел.: +7 (4872) 47-57-30</li>';
    text = text + '<li>ул. Макарченко, 1А, ТЦ "Русмебель", тел.: +7 (4872) 21-21-18</li>';
    text = text + '<ul>';
    content[110] = text;
    citys[118] = 'Тульская область';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Новомосковск, ул. Чапаева, 12б, магазин "Мебель России" (гостиница "Россия" - вход со двора), тел: 8 (48762) 3-03-44</li>';
    text = text + '<li>г. Кимовск, ул. Толстого, 32, магазин "Мебель России", тел.: 8 (48735)5-98-58</li>';
    text = text + '<ul>';
    content[118] = text;
    citys[117] = 'г. Улан-Удэ';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Жердева, 60а</li>';
    text = text + '<li>ул. Октябрьская, 45а</li>';
    text = text + '<ul>';
    content[117] = text;
    citys[78] = 'г. Ульяновск';
    text = '<img id="altContent1" src="/swf/flash_cupon.jpg" style="visibility: visible;"> <p id="cupon"><a href="/include/images/cupon-ul.html" onclick=\'javascript: window.open("/include/images/cupon-ul.html", "popup", "status=no,toolbar=no,menubar=no,width=595,height=465,scrollbars=1"); return false;\'>Распечатать купон</a></p>';
    text += '<ul>';
    text = text + '<li>ул. Октябрьская, 22а, Торговый Центр «Звезда»тел.: +7 (8422) 67-95-98</li>';
    text = text + '<li>ул. Октябрьская, 22г, Торговый Комплекс «Звезда», тел.: +7 (8422) 76-10-08, сайт www.kuhni-trio73.ru</li>';
    text = text + '<li>пр-т Тюленева, 2б, ТК «Рим», цокольный этаж, тел.: +7 (8422) 25-47-61</li>';
    text = text + '<li>ул. Марата, 8, Строительный рынок, корпус 3, бутик 21, тел.: +7(8422)76-28-23, сайт www.kuhni-trio73.ru</li>';
    text = text + '<li>пр-т Ульяновский, 24, ТК "СтройГрад", 2 этаж, тел.: +7 (8422) 54-25-72</li>';
    text = text + '<ul>';
    content[78] = text;
    citys[79] = 'Ульяновская область';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Димитровград, ул. Ганенкова, 55, МЦ "Гранд", 3 этаж "Кухни Трио", тел.: +7 937-459-30-00</li>';
    text = text + '<ul>';
    content[79] = text;
    citys[56] = 'г. Уфа';
    text = '<img id="altContent2" src="/swf/flash_cupon.jpg" style="visibility: visible;"> <p id="cupon"><a href="/include/images/cupon.html" onclick=\'javascript: window.open("/include/images/cupon.html", "popup", "status=no,toolbar=no,menubar=no,width=595,height=465,scrollbars=1"); return false;\'>Распечатать купон</a></p>';
    text += '<ul>';
    text = text + '<li>Салон-магазин "Трио", Индустриальное шоссе, 4, корп. А (рядом с ТЦ "БКС", тел.: +7 (347) 246-46-02, факс: +7 (347) 246-92-23</li>';
    text = text + '<li>Бренд-секция "Трио", ул. Лесотехникума, 47, ТЦ «Мебельвилль», тел.: +7 (347) 246-46-02 +7 (347) 292-39-36</li>';
    text = text + '<li>Салон-магазин "Трио", б-р Ибрагимова, 88, ТЦ «Три кита»,тел.: +7 (347) 246-46-02 , факс: +7 (347) 246-51-64</li>';
    text = text + '<ul>';
    text += '<p style = "height: 50px;"></p>';
    content[56] = text;
    citys[97] = 'г. Ухта';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Оплеснина, 15а, магазин «Мебельный центр»</li>';
    text = text + '<ul>';
    content[97] = text;
    citys[58] = 'г. Чайковский';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Советская, 20/10, ТЦ «ЦСК», мебельный салон «1-ый мебельный», тел.: +7 (34241) 6 09 01</li>';
    text = text + '<ul>';
    content[58] = text;
    citys[54] = 'г. Чапаевск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Ленина, 92, ТЦ "Универсам", 2 этаж, тел.: +7 (937) 640-99-88 <br><a href="http://www.trio-kuhni.ru/">www.trio-kuhni.ru</a></li>';
    text = text + '<ul>';
    content[54] = text;
    citys[15] = 'г. Челябинск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Дегтярева, 83, магазин № 26 «Мебель»</li>';
    text = text + '<li>Свердловский тракт, 1ж, торгово-выставочная компания «Строительно-Деловой Мир», секция 3/21</li>';
    text = text + '<li>ул. Дзержинского, 10, магазин «Аннушка»</li>';
    text = text + '<li>пр-т Победы, 150, магазин «Русь»</li>';
    text = text + '<li>ул. Дарвина, 18, ТЦ «Мебель на мебельном», сектор 3/5</li>';
    text = text + '<li>ул. Чичерина, 22, "Мебельный цент", секция 31</li>';
    text = text + '<li>ул. Дарвина, 2, ТЦ "Маяк для дома", тел.: +7 908-577-27-77</li>';
    text = text + '<ul>';
    content[15] = text;
    citys[16] = 'Челябинская область';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Троицк, ул. Гагарина, д. 84, салон "Кухни "Трио", +7-904-302-88-88</li>';
    text = text + '<ul>';
    content[16] = text;
    citys[114] = 'г. Чита';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Шилова, 95в</li>';
    text = text + '<ul>';
    content[114] = text;
    citys[122] = 'г. Южно-Сахалинск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Сахалинская, д. 98-7, Студия мебели "Классик", тел.: 8(4242)77-48-92</li>';
    text = text + '<li>ул. Украинская, д. 94, м-н "Классик", тел.: 8(4242)72-63-60</li>';
    text = text + '<ul>';
    content[122] = text;
    citys[107] = 'г. Южноуральск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Мира, 64, ТЦ "Тема", тел.: +7 951-783-88-20</li>';
    text = text + '<ul>';
    content[107] = text;
    citys[108] = 'г. Якутск';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Автодорожная, 4, салон кухни «Мебельный Дворик», тел.: +7 (4112) 47 30 32</li>';
    text = text + '<ul>';
    content[108] = text;
    citys[62] = 'г. Янаул';
    text = '';
    text += '<ul>';
    text = text + '<li>ул. Советская, 2, мебельный салон «Кухни «Трио»</li>';
    text = text + '<ul>';
    content[62] = text;
    citys[126] = 'республика Казахстан';
    text = '';
    text += '<ul>';
    text = text + '<li>г. Астана, ул. Кунаева 35/1 ВП 4, ЖК "Новый мир", (напротив Дома Министерств) тел: 8 (7172) 52-67-32, сот: 8-701-516-39-62.</li>';
    text = text + '<li>г. Актобе, ТРЦ "Алтау", ул. Санкибай батыра, 14Д, бутик 106 и 109, тел.: (7132) 55-75-09, e-mail: kuhnitrio.aktobe@mail.ru</li>';
    text = text + '<li>г. Актау, ЖК "Оазис", 15 мкр., д. 69, тел.: 8-705-666-98-32, e-mail: kuhnitrioaktau@mail.ru</li>';
    text = text + '<ul>';
    content[126] = text;

    function show_city(id_city) {
        //_gaq.push(['_trackEvent', 'customer', 'where', 'anyone']);
        var left = parseInt($('#city_href_' + id_city).css('left'));
        var top = parseInt($('#city_href_' + id_city).css('top'));
        if (top > 0 && left > 0) {
            $('.jScrollPaneContainer').css('height', '135px');
            $('.scroll-pane').css('height', '135px');
            $('.jScrollPaneContainer').css('width', '255px');
            $('.scroll-pane').css('width', '255px');
            $('.scroll-pane').html(content[id_city]);
            $('.shop_content h1').html(citys[id_city]);
            //$('.scroll-pane').jScrollPane({showArrows:false, scrollbarWidth:29, dragMinHeight:73, dragMaxHeight:73});
            if ($('.scroll-pane').css('height') != "auto") {
                $('.shop_content').addClass('shop_content_min');
                $('.jScrollPaneContainer').css('height', '135px');
                $('.scroll-pane').css('height', '135px');
                $('.jScrollPaneContainer').css('width', '222px');
                $('.scroll-pane').css('width', '222px');
                $('#tail').css('width', '222px');
                $('#tail img').attr('width', '222');
                if (left < 710) {
                    left = (left - 22) + 'px';
                    $('#tail').removeClass('right_tail');
                    $('#tail').addClass('left_tail');
                }
                else {
                    left = (left - 238) + 'px';
                    $('#tail').addClass('right_tail');
                    $('#tail').removeClass('left_tail');
                }
                top = (top - 273) + 'px';
                //$('.scroll-pane').jScrollPane({showArrows:false, scrollbarWidth:29, dragMinHeight:73, dragMaxHeight:73});
            }
            else {
                $('.shop_content').removeClass('shop_content_min');
                $('.jScrollPaneContainer').css('height', '232px');
                $('.scroll-pane').css('height', '232px');
                $('.jScrollPaneContainer').css('width', '342px');
                $('.scroll-pane').css('width', '342px');
                $('#tail').css('width', '342px');
                $('#tail img').attr('width', '342');
                if (left < 710) {
                    left = (left - 63) + 'px';
                    $('#tail').removeClass('right_tail');
                    $('#tail').addClass('left_tail');
                }
                else {
                    left = (left - 237) + 'px';
                    $('#tail').addClass('right_tail');
                    $('#tail').removeClass('left_tail');
                }
                top = (top - 371) + 'px';
                //$('.scroll-pane').jScrollPane({showArrows:false, scrollbarWidth:29, dragMinHeight:73, dragMaxHeight:73});
            }
            $('.shop_info').css('left', left);
            $('.shop_info').css('top', top);
        }
        $('#city_' + id_city).find("div").toggle("fast");
    }

    $('.city').click(function(){
        $("[id *= map_]").fadeOut();
        var the_map = $("#map_"+$(this).attr('rel'));
        the_map.fadeIn();
        mapping($(this).attr('rel'));
        show_city($(this).attr('rel'));
        return false;
    });
    //$('.scroll-pane').jScrollPane({showArrows:false, scrollbarWidth:29, dragMinHeight:73, dragMaxHeight:73});
    $("div.faq ul li.uncover div.hide").hide();
    $("div.faq ul li.uncover div.show").show();
    $("div.faq ul li.uncover a").click(function () {
        show_city($(this).attr('rel'));
    });
    $('.map_img, .left_tail, .right_tail').click(function(){
        $('.shop_info').css('left', '-3333px');
        $("div.faq ul li.uncover div.hide").hide();
        $("div.faq ul li.uncover div.show").hide();
    })
})
	