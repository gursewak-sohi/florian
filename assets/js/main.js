(function() {

    // JS loaded
    let body = document.body;
    body.classList.add('js-loaded');


    // Show Active for Desktop
    const toggleActive = () => {
        let toggleItems = document.querySelectorAll("#toggleBlock .swiper-slide");

        if (toggleItems && window.innerWidth >= 1024) {
            const addActive = el => {
                // console.log(el)
                el.stopPropagation()
                let selectedLink = el.currentTarget;
                toggleItems.forEach(el => {
                    el.classList.remove("swiper-slide-active");
                });
                selectedLink.classList.add("swiper-slide-active");
            }
            toggleItems.forEach(el => {
                el.addEventListener("mouseenter", addActive);
            });
        }
    }
    toggleActive();


    // Toggle Swiper for Mobile
    const toggleSwiper = document.querySelector("#toggleSwiper");
    if (toggleSwiper && window.innerWidth < 1024) {
        const swiper = new Swiper('#toggleSwiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            pagination: {
                el: "#toggleSwiper .swiper-pagination",
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
        });
    }

    // Reload Window for mobile/desktop
    var ww = window.innerWidth;
    var limit = 1023;

    function refresh() {
        ww = window.innerWidth;
        var w = ww < limit ? (location.reload(true)) : (ww > limit ? (location.reload(true)) : ww = limit);
    }

    var tOut;
    window.onresize = function(event) {
        var resW = window.innerWidth
        clearTimeout(tOut);
        if ((ww > limit && resW < limit) || (ww < limit && resW > limit)) {
            tOut = setTimeout(refresh, 100);
        }
    };

    // Gallery Swiper
    const gallerySwiper = document.querySelector("#gallerySwiper"),
        activeSlide = document.querySelectorAll(".activeSlide"),
        totalSlides = document.querySelectorAll(".totalSlides");
    if (gallerySwiper && activeSlide && totalSlides) {
        const swiper = new Swiper('#gallerySwiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            on: {
                init: function() {
                    totalSlides.forEach(el => {
                        el.innerHTML = ('0' + this.slides.length).slice(-2)
                    });
                },
                slideChange: function() {
                    activeSlide.forEach(el => {
                        el.innerHTML = ('0' + (this.activeIndex + 1)).slice(-2)
                    });
                },
            },
        });
    }

})();