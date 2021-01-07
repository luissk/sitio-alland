'use strict'

$(function(){
    // CALCULATE NAV POSITION RESPONSIVE
    let ancho = $(window).outerWidth(),
        altoHeader = $(".header").height();
    $(window).resize(function(){
        ancho = $(window).outerWidth();
        altoHeader = $(".header").height();
        calculaAnchoVentana();
    });
    function calculaAnchoVentana(){
        if( ancho <= 992 ){
            $(".nav").hide();
            $(".nav").css({top:altoHeader+'px'});
            $(".menu-sub").removeClass('invisible').hide();

            $(".search").hide();
        }else{
            $(".nav").show();
            $(".menu-sub").addClass('invisible').show();
            //$(".menu-sub").removeClass('invisible');
            $(".search").show();                
        }
        //console.log(ancho, altoHeader);

        if( ancho <= 767 )
            $("#filters-container").hide();
        else
            $("#filters-container").show();
    }
    calculaAnchoVentana();
    // FIN CALCULATE NAV POSITION RESPONSIVE

    $("#sec-search").on('click', function(){
        $(".search").toggle(100);
    });

    $("#sec-menu").on('click', function(){
        $(".nav").toggle(100);
    });

    // OCULTAR MENU CLICK FUERA
    $(document).on("click",function(e){               
        let nav = $(".nav"),
            btnmenu = $("#sec-menu");
        if( ancho <= 992 ){
            if ( !nav.is(e.target) && nav.has(e.target).length === 0 && 
                !btnmenu.is(e.target) && btnmenu.has(e.target).length === 0 ){
                nav.hide();
            }
        }
    });
    // FIN OCULTAR MENU CLICK FUERA

    //MOSTRAR SUBMENU HOVER
    $(".menu li").on('mouseover', function(){
        let _this = $(this);
        if( ancho >= 993 ){
            _this.find('.menu-sub').removeClass('invisible');
        }
    });
    $(".menu li").on('mouseout', function(){
        let _this = $(this);
        if( ancho >= 993 ){
            _this.find('.menu-sub').addClass('invisible');
        }
    });

    //MOSTRAR SUBMENU
    $(".menu-link").on('click', function(){
        let _this = $(this);
        if( ancho <= 992 ){
            _this.siblings().toggle();
            //$(".menu-sub").toggle();
        }
    });

    //RESULTADO BUSQUEDA
    $("#filters-hide").on('click', function(){
        $("#filters-container").toggle(200);
    });
});
