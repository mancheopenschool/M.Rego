/*gmap*/
function evision_corporate_map_initialize() {
    var evision_corporate_latlng = new google.maps.LatLng( evision_corporate_main.evision_corporate_map_latitude, evision_corporate_main.evision_corporate_map_longitude );
    var mapOptions = {
        zoom: 4,
        center: evision_corporate_latlng,
        width: "100%",
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: true,
        scaleControl: true,
        draggable: true
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: evision_corporate_latlng,
        map: map
    });
}


function evision_corporate_loadmap() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
    '&signed_in=true&callback=evision_corporate_map_initialize';
    document.body.appendChild(script);
}
if( 1 == evision_corporate_main.evision_corporate_map_enable && 1 == evision_corporate_main.evision_corporate_front_page){
    window.onload = evision_corporate_loadmap;
}

jQuery(document).ready(function ($) {
    //add-remove evision-corporate-fixed-top
    function evision_corporate_fixed_top(){

        if($(window).width() < 768 ){
            $('.wrap-header').removeClass('navbar-fixed-top');
            $("body").css("padding-top", "");
        }
        else{
            $('.wrap-header').addClass('navbar-fixed-top');
            $("body").css("padding-top", $(".wrap-header").height());
        }
    }
    //What happen on window resize
    evision_corporate_fixed_top();


    /*home page slider start*/
    $(window).load(function () {

    /*Bootstrap Scrollspy start*/
        $("body").scrollspy({target: "#site-navigation", offset: $('.wrap-header').height()});
        /*Bootstrap Scrollspy End*/
        if( 1 == evision_corporate_main.evision_corporate_front_page){
            var evision_corporate_main_slider = $('.evision-corporate-main-slider').bxSlider({
                adaptiveHeight: true,
                pause: 7000,
                auto: true,
                pager: false,
                tickerHover:true,
                prevText: '<i class="fa fa-angle-left fa-5x"></i>',
                nextText: '<i class="fa fa-angle-right fa-5x"></i>'
            });
        }

        //thumb-size same as thumb image
        function evision_corporate_thumb_size(){
            // $(".evision-corporate-thumb-size").each(function(){
            //     var image_width = $(this).children('img').attr('width');
            //     $(this).width(image_width);
            // });
        }
        evision_corporate_thumb_size();
        $(window).resize(function () {
            evision_corporate_fixed_top();
            //evision_corporate_thumb_size();
        });

        /*evision function end*/
    });
    //What happen on window scroll
    function back_to_top(){
        var scrollTop = $(window).scrollTop();
        var offset = 500;
        if (scrollTop < offset) {
            $('.evision-corporate-back-to-top').hide();
        } else {
            $('.evision-corporate-back-to-top').show();
        }
    }
    $(window).on("scroll", function (e) {
        back_to_top();
    });
    back_to_top();
    $('a[href*=#]').on('click', function(event){
        if ($(this.hash).length){
            event.preventDefault();
            $("html, body").stop().animate({scrollTop: $(this.hash).offset().top - 70}, 2e3, "easeInOutExpo");
        }
    });
});
/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */
( function() {
    var container, button, menu, links, subMenus;

    container = document.getElementById( 'site-navigation' );
    if ( ! container ) {
        return;
    }

    button = container.getElementsByTagName( 'button' )[0];
    if ( 'undefined' === typeof button ) {
        return;
    }

    menu = container.getElementsByTagName( 'ul' )[0];

    // Hide menu toggle button if menu is empty and return early.
    if ( 'undefined' === typeof menu ) {
        button.style.display = 'none';
        return;
    }

    menu.setAttribute( 'aria-expanded', 'false' );
    if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
        menu.className += ' nav-menu';
    }

    button.onclick = function() {
        if ( -1 !== container.className.indexOf( 'toggled' ) ) {
            container.className = container.className.replace( ' toggled', '' );
            button.setAttribute( 'aria-expanded', 'false' );
            menu.setAttribute( 'aria-expanded', 'false' );
        } else {
            container.className += ' toggled';
            button.setAttribute( 'aria-expanded', 'true' );
            menu.setAttribute( 'aria-expanded', 'true' );
        }
    };

    // Get all the link elements within the menu.
    links    = menu.getElementsByTagName( 'a' );
    subMenus = menu.getElementsByTagName( 'ul' );

    // Set menu items with submenus to aria-haspopup="true".
    for ( var i = 0, len = subMenus.length; i < len; i++ ) {
        subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
    }

    // Each time a menu link is focused or blurred, toggle focus.
    for ( i = 0, len = links.length; i < len; i++ ) {
        links[i].addEventListener( 'focus', toggleFocus, true );
        links[i].addEventListener( 'blur', toggleFocus, true );
    }

    /**
     * Sets or removes .focus class on an element.
     */
    function toggleFocus() {
        var self = this;

        // Move up through the ancestors of the current link until we hit .nav-menu.
        while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

            // On li elements toggle the class .focus.
            if ( 'li' === self.tagName.toLowerCase() ) {
                if ( -1 !== self.className.indexOf( 'focus' ) ) {
                    self.className = self.className.replace( ' focus', '' );
                } else {
                    self.className += ' focus';
                }
            }

            self = self.parentElement;
        }
    }
} )();