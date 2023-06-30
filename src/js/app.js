/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например, import "files/script.js";
Неиспользуемый (не вызываемый)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его раскомментировать
*/
// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал =============================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML*/
/* (i) необходимо для корректного отображения webp с css*/
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный*/
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы*/
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер)*/
// flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh*/
// flsFunctions.fullVHfix();
/* Форматирование чисел*/
// import './libs/wNumb.min.js';

/*
Настройка подключения плагина Jquery выполняется в файле js/files/jquery.js
ДЛЯ КОРРЕКТНОЙ РАБОТЫ ПЛАГИН НУЖНО ИМПОРТИРОВАТЬ В КАЖДЫЙ МОДУЛЬ (потому что он импортируется только для одного файла)
Документация плагина: https://jquery.com/
*/
// import $ from "jquery";

/*
Настройка подключения плагина GSAP выполняется в файле js/libs/gsap.js
Документация плагина: https://www.npmjs.com/package/gsap, https://greensock.com/
*/
// import "./libs/gsap.js";

/*
Пробная версия gsap с платными плагинами, которые запускаются только локально
НЕ ПЫТАТЬСЯ ЗАПУСТИТЬ В КОММЕРЧЕСКИХ ПРОЕКТАХ, НЕ СРАБОТАЕТ! ПРИ ПОПЫТКЕ ПОДКЛЮЧИТЬ, БУДЕТ ПРЕДУПРЕЖДЕНИЕ В КОНСОЛИ, И РЕДИРЕКТ НА СТРАНИЦУ ПЛАГИНА
*/
// import "./libs/gsap-trial.js";


/*
Настройка подключения плагина MagicMouse выполняется в файле js/libs/magicMouse.js
Документация плагина: https://magicmousejs.web.app/
*/
// import "./libs/magicMouse.js";

/*
Модуль "Спойлеры"
Документация: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
// flsFunctions.spollers();
/*
Модуль "Табы"
Документация: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
// flsFunctions.tabs();
/*
Модуль "Показать еще"
Документация: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();
/*
Модуль "Эффект волн"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();
/*
Модуль "Кастомный курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);
/*
Модуль "Попапы"
Документация: https://template.fls.guru/template-docs/funkcional-popup.html
Сниппет (HTML): pl, pop
*/
// import './libs/popup.js'
/*
Модуль параллакса мышью
Документация: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'
// ========================================================================================================================================================================================================================================================
// Работа с формами =======================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы*/
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html/
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Отправка формы*/
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html*/
// flsForms.formSubmit();
/* Модуль формы "количество"*/
// flsForms.formQuantity();
/* Модуль звездного рейтинга*/
// flsForms.formRating();
/* Модуль работы с select.*/
// import './libs/select.js'
/* Модуль работы с календарем*/
// import './files/forms/datepicker.js'
/* (в работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./files/forms/inputmask.js";
/* Модуль работы с ползунком*/
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./files/forms/range.js";
/* Модуль работы с подсказками (tippy)*/
/*
Подключение плагина Tippy.js и настройки производится в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";
// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ===========================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import "./files/sliders.js";

/*
Настройка подключения плагина Bootstrap и обработка объектов плагина выполняется в файле js/files/bootstrap.js
Документация плагина: https://getbootstrap.com/
*/
// import "./files/bootstrap.js";

/*
Настройка подключения плагина Mixitup и новых галлерей выполняется в файле js/files/mixitup.js
Документация плагина: https://www.npmjs.com/package/mixitup
*/
// import "./files/mixitup.js";

/*
Настройка подключения плагина AOS выполняется в файле js/files/aos.js
Документация плагина: https://michalsnik.github.io/aos/, https://www.npmjs.com/package/aos, https://github.com/michalsnik/aos#-animations
*/
// import "./files/aos.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ====================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем в блок атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML):
*/
// import './files/scroll/simplebar.js';
// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
// import './files/scroll/lazyload.js';
// Наблюдатель за объектами с атрибутом data-watch
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сниппет(HTML):
// import './libs/watcher.js'
// Модуль поэкранной прокрутки
// Документация: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сниппет(HTML):
// import './libs/fullpage.js'
// Модуль параллакса
// Документация: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сниппет(HTML):
// import './libs/parallax.js'
// Функции работы скролом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
// Документация: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();
// Функционал добавления классов к хедеру во время прокрутки
// Документация: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();
// Анимация цифрового счетчика.
// Документация: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сниппет (HTML):
// flsScroll.digitsCounter();
// ========================================================================================================================================================================================================================================================
// Галерея ================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";
// ========================================================================================================================================================================================================================================================
// Магическая сетка =======================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
Документация плагина:
Сниппет(HTML):
*/
// import "./files/isotope.js";
// ========================================================================================================================================================================================================================================================
// Другие плагины =========================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Динамический адаптив*/
// Документация: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";
// ========================================================================================================================================================================================================================================================
// Другое =================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом*/
import "./files/script.js";
// ========================================================================================================================================================================================================================================================
