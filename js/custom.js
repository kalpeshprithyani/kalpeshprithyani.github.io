
    $(window).on('load', function() {
        $('#preloader').addClass('hide-preloader');
        $('#top').removeClass("preload");

        //home screen buttons slide
        $('.designer-button').viewportChecker({
            classToAdd: 'designer-button-opacity',
            offset: -1
        });
        $('.box-slide-vertical').viewportChecker({
            classToAdd: 'box-slide-vertical-animate',
            offset: -1
        });
        $('.developer-button').viewportChecker({
            classToAdd: 'designer-button-opacity',
            offset: -1
        });

        //about slide
        $('.about-slide,.about-slide2').viewportChecker({
            classToAdd: 'about-slide-animate',
            offset:100
        });
        $('.about').viewportChecker({
            classToRemove: 'about-opacity',
            offset: 100
        });

        //work slide
        $('.work-img').viewportChecker({
            classToRemove: 'about-opacity',
            offset: 100
        });
        $('.work-text2').viewportChecker({
            classToRemove: 'about-opacity',
            offset: 100
        });
        $('.work-bg-dark,.work-bg-dark2').viewportChecker({
            classToRemove: 'work-bg-dark-animate',
            offset: 100
        });

        //text animate
        $('.welcome-text,.experiment-text-head').viewportChecker({
            classToRemove: 'welcome-text-animate',
            offset: 200
        });
        $('.work-text-head,.hire-text-head').viewportChecker({
            classToRemove: 'work-text-animate',
            offset: 200
        });

        //svg animation
        $('#triangleSvg').viewportChecker({
            callbackFunction: function(){
                var a = document.getElementById("triangleSvg");
                var svgDoc = a.contentDocument;
                var svgRoot  = svgDoc.documentElement;
                $(".st0,.st00",svgRoot).addClass("st0-animation");
            },
            offset: 200
        });
        $('#footer-square-img').viewportChecker({
            callbackFunction: function(){
                var a = document.getElementById("footer-square-img");
                var b = document.getElementById("footer-sign");
                var svgDocA = a.contentDocument;
                var svgDocB = b.contentDocument;
                var svgRootA  = svgDocA.documentElement;
                var svgRootB  = svgDocB.documentElement;
                $("#st1,#st2,#st3,#st4",svgRootA).addClass("square-anim");
                setTimeout(function() {
                    $(".footer-img-text").css("opacity","1");
                },900);
                setTimeout(function() {
                    $(".footer-img-text-2").addClass('enlarge-footer-text');
                },1200);
                setTimeout(function() {
                    $(".footer-img-text-3").css("opacity","1");
                },2200);
                setTimeout(function() {
                    $("#k-1,#k-2,#a,#l,#p-1,#p-2,#e,#s-1,#s-2,#h,#dash,#dot", svgRootB).addClass("k-1-anim");
                },2500);
            },
            offset: 200
        });

        //awesome shit
        $('.work-golden').viewportChecker({
            offset: 200,
            callbackFunction: function(){
                $('.awesome-sht-border-top').addClass('awesome-sht-border-top-animate');
                $('.awesome-sht-border-right').addClass('awesome-sht-border-right-animate');
                $('.awesome-sht-border-bottom').addClass('awesome-sht-border-bottom-animate');
                $('.awesome-sht-border-left').addClass('awesome-sht-border-left-animate');
                $('.awesome-sht').addClass('awesome-sht-animate');
            }
        });

        //experiment slide
        $('.experiment-container').viewportChecker({
            classToAdd: 'designer-button-opacity',
            offset: 100
        });

        //background-image hover
        $(function() {
            $(".developer-night-hover").hover(
                function() {
                    $(".developer-night").css("background-image", "url('img/Comp-1_3.gif')");
                },
                function() {
                    $(".developer-night").css("background-image", "url('img/developer-night.png')");
                }
            );
            $(".designer-day-hover").hover(
                function() {
                    $(".designer-day").css("background-image", "url('img/Comp-1_4.gif')");
                },
                function() {
                    $(".designer-day").css("background-image", "url('img/designer-day.png')");
                }
            );
        });

        //text-scramble
        class TextScramble {
            constructor(el) {
                this.el = el;
                this.chars = '!<>-_\\/[]{}—=+*^?#________';
                this.update = this.update.bind(this);
            }
            setText(newText) {
                const oldText = this.el.innerText;
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise((resolve) => this.resolve = resolve);
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || '';
                    const to = newText[i] || '';
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
                return promise;
            }
            update() {
                let output = '';
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span class="dud">${char}</span>`;
                    } else {
                        output += from;
                    }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++
                }
            }
            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)]
            }
        }
        // ——————————————————————————————————————————————————
        // Example1
        // ——————————————————————————————————————————————————
        const phrases = [
            'Kalpesh Prithyani'
        ];
        const phrases2 = [
            'Bhopal, India'
        ];
        const phrases3 = [
            'FrontEnd Developer'
        ];
        const el = document.querySelector('.text-scramble');
        const el2 = document.querySelector('.text-scramble2');
        const el3 = document.querySelector('.text-scramble3');
        const fx = new TextScramble(el);
        const fx2 = new TextScramble(el2);
        const fx3 = new TextScramble(el3);
        let counter = 0;
        $('.text-scramble').viewportChecker({
            offset: -1,
            callbackFunction: function(){
                fx.setText(phrases[counter]).then(() => {
                });
            }
        });
        $('.text-scramble2').viewportChecker({
            offset: -1,
            callbackFunction: function(){
                fx2.setText(phrases2[counter]).then(() => {
                });
            }
        });
        $('.text-scramble3').viewportChecker({
            offset: -1,
            callbackFunction: function(){
                fx3.setText(phrases3[counter]).then(() => {
                });
            }
        });
    });

$(document).ready(function() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        $('.designer-day').css("background-size", $('body').innerWidth() + "px ");
        $('.developer-night').css("background-size", $('body').innerWidth() + "px ");
    }else{
        if (window.matchMedia('(min-width: 499px)').matches) {
            var imgMult=0.8;
        }else{
            var imgMult=0.6;
        }
        $('.designer-day').css("background-size", "auto "+$(window).height()*imgMult+"px");
        $('.developer-night').css("background-size","auto "+$(window).height()*imgMult+"px");
        var y =2.271531100478469*($(window).height()*imgMult);
        var x = y/2 - $('.developer-night').width();
        var z = $('.developer-night').width();
        $('.designer-day').css("background-position-x", -1*x + "px");
        $('.developer-night').css("background-position-x", -(z + x) + "px");

        $('.designer-day-hover').hover(function(){
            $('.designer-day').css("background-position-x","50%");
        }, function(){
            $('.designer-day').css("background-position-x",-1*x + "px");
        });
        $('.developer-night-hover').hover(function(){
            $('.developer-night').css("background-position-x","50%");
        }, function(){
            $('.developer-night').css("background-position-x",-(z + x) + "px");
        });
    }
});
$('.designer-day-hover').hover(
    function(){
        $('.developer-night').addClass('reduce-width');
    }, function(){
        $('.developer-night').removeClass('reduce-width');
    }
);
$('.developer-night-hover').hover(
    function(){
        $('.designer-day').addClass('reduce-width');
    }, function(){
        $('.designer-day').removeClass('reduce-width');
    }
);
var opened = false;
$('.menu,#go-home,#go-about,#go-hire,#go-lab,#go-work').click(function(){
    $('.menu').toggleClass('animate-menu');
    $('.menu').toggleClass('animate-menu-close');
    if(!opened){
        setTimeout(function(){$('.menu-content').addClass("show-menu");},500);
        $('.red-block').addClass("red-block-animation-show");
        $('.red-block').removeClass("red-block-animation-hide");
        $('html').css("overflow-y","hidden");
        opened = true;
    }else{
        $('.red-block').removeClass("red-block-animation-show");
        $('.red-block').addClass("red-block-animation-hide");
        setTimeout(function(){$('.menu-content').removeClass("show-menu");},500);
        $('html').css("overflow-y","auto");
        opened = false;
    }
});
$(function() {
    if (window.matchMedia('(min-width: 767px)').matches) {
        $('.exp-open').hover(
            function(){
                $(this).siblings('.exp-img').css("width","100%");
            },
            function(){
                $('.exp-img').css("width","0%");
            }
        );
    }else{
        $('.exp-img').css("width","100%");
    }
});
$('#go-top,#go-home').click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1500);
});
$('#go-about,.home-screen-divider').click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});
$('#go-work').click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1500);
});
$('#go-lab').click(function() {
    $('html, body').animate({
        scrollTop: $("#lab").offset().top
    }, 1500);
});
$('#go-hire').click(function() {
    $('html, body').animate({
        scrollTop: $("#hire").offset().top
    }, 1500);
});
//to disable bottom link of chrome
var aTags = document.querySelectorAll('div[data-href]');
for(var i = 0; i < aTags.length; i++){
    var aTag = aTags[i];
    aTag.addEventListener('click', function(e){
        var ele = e.target;
        window.open(ele.getAttribute('data-href'),'_blank');
    });
};

//Logo button rotate
$(window).scroll(function() {
    var $body = $(window),
        bodyHeight = $body.height();
    $('.logo').css({ transform: 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)' });
});