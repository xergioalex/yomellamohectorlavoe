// This is the custom javascript file 

$(window).on("load", function() {
    "use strict";
    // === Page Load Animation ===
    $("#preloaderTL").delay(400).fadeOut("slow");
    
});// END LOAD

jQuery(document).ready(function($) {
    "use strict";

    // === Header Menu Button ===
    $('#menu-button').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('close-icon');
        $('#main-nav').toggleClass('fade');
        // player toggle
        $('#player-button').removeClass('close-icon');
        $('.jp-audio').removeClass('fade');
        $('.jp-jplayer').removeClass('img-fade');
        // search toggle
        $('#search-button').removeClass('close-icon');
        $('#search-nav').removeClass('fade');
    });
    $('#main-nav').on('click',function(){
        $('#menu-button').removeClass('close-icon');
        $('#main-nav').removeClass('fade');
    });

    // === Header Player Button ===
    $('#player-button').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('close-icon');
        $('.jp-audio').toggleClass('fade');
        $('.jp-jplayer').toggleClass('img-fade');
        // search toggle
        $('#search-button').removeClass('close-icon');
        $('#search-nav').removeClass('fade');
        // menu toggle
        $('#menu-button').removeClass('close-icon');
        $('#main-nav').removeClass('fade');
    });

    // === Header Search Button ===
    $('#search-button').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('close-icon');
        $('#search-nav').toggleClass('fade');
        // menu toggle
        $('#menu-button').removeClass('close-icon');
        $('#main-nav').removeClass('fade');
        // player toggle
        $('#player-button').removeClass('close-icon');
        $('.jp-audio').removeClass('fade');
        $('.jp-jplayer').removeClass('img-fade');
    });
    $('#search-nav button').on('click',function(){
        $('#search-button').removeClass('close-icon');
        $('#search-nav').removeClass('fade');
    });

   // Open Close PlayList
    $('#playlist-toggle').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('close-icon');
        $('#jp_container_1').find(".jp-playlist").fadeToggle(100);
    });


    //{"access_token": "4635663708.26f75f3.a3f5e9dc734a44afbf6bdaefbc76703e", "user": {"id": "4635663708", "username": "yomellamo_hector_lavoe2017", "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/17596226_1680288155604737_6689026034370609152_a.jpg", "full_name": "Oscar Garcia Soto", "bio": "Cantante de Salsa y Ex finalista de Colombia tiene talento en 2013 y ex participante de #YoMeLlamo 2017 Adquiere mi #ShowMusical \n57 3105478093", "website": "https://youtu.be/jgOU4ak8f4k"}}%

   // === Sidebar Instagram Widget ===
    var feedSidebar = new Instafeed({
        get: 'user',
        userId: 4635663708, // your user id
        accessToken: '4635663708.26f75f3.a3f5e9dc734a44afbf6bdaefbc76703e', // your access token
        sortBy: 'most-liked',
        template: '<li><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
        target: 'instagram-sidebar-widget',
        limit: 9,
        resolution: 'low_resolution'
    });
    if ($('#instagram-sidebar-widget').length>0) {
        feedSidebar.run();
    }

    // === Footer Instagram Slider ===
    var feedFooter = new Instafeed({
        get: 'user',
        userId: 4635663708, // your user id
        accessToken: '4635663708.26f75f3.a3f5e9dc734a44afbf6bdaefbc76703e', // your access token
        sortBy: 'most-liked',
        template: '<a href="{{link}}" target="_blank"><div style="background-image: url({{image}}); height: 213px; width: 100%;"></div></a>',
        target: 'instagram-carousel',
        limit: 6,
        resolution: 'low_resolution',
        after: function () {
            $('#instagram-carousel').owlCarousel({
                items: 6,
                navigation: false,
                pagination: false,
                autoPlay: 4000
            });
        }
    });
    feedFooter.run();
    
    // === Home Slider ===
    $('#home-slider').owlCarousel({
        addClassActive: true,
        items: 1,
        navigation: false,
        dots: false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        autoPlay: 7000, // time each slide is displayed
        transitionStyle: "fadeUp",
        //Basic Speeds
        slideSpeed : 1000,
        paginationSpeed : 800,
        rewindSpeed : 1000,
        dragBeforeAnimFinish: false,
        mouseDrag: false,
        
        beforeMove: function(){
        // BEFORE going to the next slide (hide captions)
        $('.owl-item').find('.text-container').removeClass('activated');
        }, 
        afterMove: function(){
            // AFTER going to next slide (show captions)
            setTimeout(function(){
               $('.owl-item.active').find('.text-container').addClass('activated');
            }, 600);
        }
    });

    // === Countdown track.html config ===
    if ($('#countdown-2').length>0) {
        $("#countdown-2").countdown({
            date: "12 june 2016 12:00:00", // Edit this line
            format: "on"
        },
        function() {
          // This will run when the countdown ends
        });
    }

    // === Responsive Videos ===
    $(".embed-video").fitVids();

    // ScrollTo annimation
    if ($('.scrollTo').length>0) {
        $('.scrollTo').on('click',function (e) {
            e.preventDefault();
            var target = this.hash,
            $target = $(target);
            $('body, html').stop().animate({
                'scrollTop': $(target).offset().top-0
            }, 1000, 'swing', 
            function() {
                window.location.hash = target;
            });
        }); // End Click  
    }

    // Extend Event Info
    $(".event").find(".open-icon").on('click', function() {
        var $thisPrev = $(this).prev();
        $(".event").find(".info-wrapper").not($thisPrev).slideUp("fast");
        $(".event").find(".open-icon").not(this).removeClass("close-icon");
        $(this).prev().slideToggle("slow");
        $(this).toggleClass("close-icon");
    });//End Click 

    // == Back to top Button ===
    $(window).scroll(function(){
        if($(document).scrollTop() > 600) {    
            $('.back-to-top').css({bottom:"-1px"});
        }
        else {  
           $('.back-to-top').css({bottom:"-40px"});
        }
    });
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    }); 

    // === Form Validation ===
    // Single Post Form
    $('#comment-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        }, //end rules
        messages: {
            email: {
                required: "Por favor ingresa un correo electrónico.",
                email: "Por favor ingresa un correo electrónico válido."
            }
        }
    }); 
    // Contact Homepage Form
    $('#contact-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        }, //end rules
        messages: {
            email: {
                required: "Por favor ingresa un correo electrónico.",
                email: "Por favor ingresa un correo electrónico válido."
            }
        }
    });// end validate



    $('video').click(function (event) {
        let videos = $('video');

        // is playing
        if (this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2) {
            event.currentTarget.pause();
        } else {
            for (var i = 0; i < videos.length; i++) {
                videos[i].pause();
            }
            event.currentTarget.play();
        }
    });

    // Process contact form
    $('#contact-form').submit(function(event) {
        event.preventDefault();
        $('#feedbackForm').html('');

        var successForm = function () {
            $('#form-name').val('');
            $('#form-email').val('');
            $('#form-phone').val('');
            $('#form-message').val('');
            $('#feedbackForm').html('<label class="text-success">Mensaje envíado! Te contactaré tan pronto me sea posible :)</label>');
        }

        var data = {
            'entry.791135658': $('#form-name').val(),
            'entry.951127638': $('#form-email').val(),
            'entry.1284068016': $('#form-phone').val(),
            'entry.800213098': $('#form-message').val()
        };

        // Validate form
        var formSuccess = true;
        Object.keys(data).forEach(function(key, index) {
            if (!data[key]) {
                formSuccess = false;
            }
        });

        if (formSuccess) {
            $.ajax({
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSeIZCqhIpsTFlr-uheOx8kmHUOTi4c80-e6IEuYYqqVeO9lhg/formResponse',
                type: 'POST',
                crossDomain: true,
                dataType: "xml",
                data: data,
                success: function(jqXHR, textStatus, errorThrown) {
                    // On success
                    successForm();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // On error
                    successForm();
                }
            });
        }
    }); 

});// END READY