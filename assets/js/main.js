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

    // Display Swiper
    const displaySwiper = document.querySelectorAll(".display-swiper");
    if (displaySwiper) {
        const swiper = new Swiper('.display-swiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            navigation: {
                nextEl: '.display-swiper .swiper-button-next',
                prevEl: '.display-swiper .swiper-button-prev',
            },
        });
    }

    
    const customSelects = document.querySelectorAll(".custom-select");
    if (customSelects.length > 0) {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        if (selElmnt.selectedIndex === 0) {
            a.classList.add("placeholder");
        }
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            if (j === selElmnt.selectedIndex) {
                c.setAttribute("class", "same-as-selected");
            }
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    h.classList.remove("placeholder");
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                    y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
            arrNo.push(i)
            } else {
            y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
            }
        }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
    }

    

})();