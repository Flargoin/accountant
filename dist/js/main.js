'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const dotsText = ['Алгоритм', 'Экспресс-анализ', 'Аудит', 'Восстановление', 'Оптимизация']

    /* Слайдер */
    const contactsSlider = new Swiper('.contacts__inner', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 23,
        loop: true,

        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 23
            }
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    const width = window.innerWidth
    if (width < 992){
      const tabsSlideMobile = new Swiper('.mechanism__slider');
      tabsSlideMobile.destroy(true, true);
    } else {
        const tabsSlider = new Swiper('.mechanism__slider', {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 580,
            loop: false,
            autoHeight: true,
            allowTouchMove: false,
    
            pagination: {
                el: '.mechanism__tabs-top',
                bulletClass: 'mechanism__tabs-item',
                bulletActiveClass: 'mechanism__tabs-item--active',
                renderBullet: (index, className) => `<div class="${className}"><span>0${index + 1}.</span>${dotsText[index]}</div>`,
                clickable: true,
            },
        });
    }


      
    
    // Табы
    function tabs (parentSelector, tabSelector, contentSelector, activeClass, display = 'block') {
        const parent = document.querySelector(parentSelector),
              tabs = document.querySelectorAll(tabSelector),
              content = document.querySelectorAll(contentSelector);
    
        function hideTabsContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });
    
            tabs.forEach(tab => {
                tab.classList.remove(activeClass);
            });
        }
    
        function showTabsContent(i = 0) {
            console.log(content);
            content[i].style.display = display;
            tabs[i].classList.add(activeClass);
        }

        function hideTabsContentMobile() {
            content.forEach(item => {
                item.style.height = 0;
                item.style.overflow = 'hidden';
                item.style.display = 'none';
            });
    
            tabs.forEach(tab => {
                tab.classList.remove(activeClass);
            });
        }

        function showTabsContentMobile(i = 0) {
            content[i].style.height = '100%';
            content[i].style.overflow = 'visible';
            content[i].style.display = display;
            tabs[i].classList.add(activeClass);
        }
    
        if(window.screen.availWidth >= 992) {
            hideTabsContent();
            showTabsContent();
        } else if (window.screen.availWidth <= 991) {
            hideTabsContentMobile();
            showTabsContentMobile();
        }

    
        parent.addEventListener('click', (e) => {
            const target = e.target;

            if(target && (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
                console.log(tabs);
                tabs.forEach((item, i) => {
                    if((target === item || target.parentNode === item) && window.screen.availWidth >= 992) {
                        hideTabsContent();
                        showTabsContent(i);
                    }  else if ((target === item || target.parentNode === item) && window.screen.availWidth <= 991) {
                        hideTabsContentMobile();
                        showTabsContentMobile(i);
                    }
                });
            }
        });
    }

    // Табы
    tabs('.tabs__list', '.tabs__list-item-top', '.tabs__description-item', 'tabs__list-item-top--active');
    // Мобильные селекторы
    tabs('.tabs__list', '.tabs__list-item-top', '.tabs__list-item-bottom', 'tabs__list-item-top--active');
    
    // Табы в слайдере
    tabs('.mechanism__block-analysis-list', '.mechanism__block-analysis-item', '.mechanism__block-analysis-info', 'mechanism__block-list-item-top--active');
    tabs('.mechanism__block-audit-list', '.mechanism__block-audit-item', '.mechanism__block-audit-info', 'mechanism__block-list-item-top--active');
    tabs('.mechanism__block-recovery-list', '.mechanism__block-recovery-item', '.mechanism__block-recovery-info', 'mechanism__block-list-item-top--active');
    tabs('.mechanism__block-optimization-list', '.mechanism__block-optimization-item', '.mechanism__block-optimization-info', 'mechanism__block-list-item-top--active');
    // Мобильные селекторы
    tabs('.mechanism__block-analysis-list', '.mechanism__block-analysis-item', '.mechanism__block-analysis-item-bottom', 'mechanism__block-list-item-top--active');
    tabs('.mechanism__block-audit-list', '.mechanism__block-audit-item', '.mechanism__block-audit-item-bottom', 'mechanism__block-list-item-top--active');
    tabs('.mechanism__block-recovery-list', '.mechanism__block-recovery-item', '.mechanism__block-recovery-item-bottom', 'mechanism__block-list-item-top--active');
    tabs('.mechanism__block-optimization-list', '.mechanism__block-optimization-item', '.mechanism__block-optimization-item-bottom', 'mechanism__block-list-item-top--active');
});