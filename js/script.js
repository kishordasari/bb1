$(document).ready(function(){
    var ht = $('.navbar-default').height();
    console.log(ht);
    $("#pinContainer").css('padding-top',$('.navbar-default').height());


    $(".scroll-downs").click(function() {
        $('html,body').animate({
            scrollTop: $("#pinContainer").offset().top + 50},
            1000);
    });


    var controller = new ScrollMagic.Controller();



    var tl1 = new TimelineMax()
                .from($(".quote1, .quote2, .quote3"), 1, {y: "150px", opacity:0})
                .from($(".textc1, .textc2, .textc3"), 1, {opacity:0})
                .to(".quote1", 1, {y: "-50px", opacity:1})
                .to(".textc1", 1, {opacity:1})
                .to(".quote1", 1, {y: "-50px", opacity:1})
                .to(".textc1", 1, {opacity:1})
                .to(".quote1", 1, {y: "-250px", opacity:0})
                .to(".textc1", 1, {opacity:0, ease:Power2.easeIn},"+=1")
                .to(".quote1", 1, {y: "-150px", opacity:0})
                .to(".textc1", 1, {opacity:0, ease:Power2.easeIn},"+=1")
                .to(".quote2", 1, {y: "-50px", opacity:1})
                .to(".textc2", 1, {opacity:1})
                .to(".quote2", 1, {y: "-50px", opacity:1})
                .to(".textc2", 1, {opacity:1})
                .to(".quote2", 1, {y: "-150px", opacity:0})
                .to(".textc2", 1, {opacity:0, ease:Power2.easeIn},"+=1")
                .to(".quote2", 1, {y: "-150px", opacity:0})
                .to(".textc2", 1, {opacity:0, ease:Power2.easeIn},"+=1")
                .to(".quote3", 1, {y: "-50px", opacity:1})
                .to(".textc3", 1, {opacity:1})
                .to(".quote3", 1, {y: "-50px", opacity:1})
                .to(".textc3", 1, {opacity:1});


                // var tl1 = new TimelineMax()
                // $(".textScroll").each(function(index, element){
                //     tl1.to(element, 1, {y:-50, opacity:1})
                //         .to(element, 1, {y:150, opacity:0, ease:Power2.easeIn}, "+=1")
                //   });

    // var tl2 = new TimelineMax()
	// 			.from($(".textc1"), 1, {autoAlpha:1})
    //             .to(".textc1", 1, {autoAlpha:1})
    //             .to(".textc1", 1, {autoAlpha:0})
    //             .to(".textc2", 1, {autoAlpha:1})
    //             .to(".textc2", 1, {autoAlpha:0})
    //             .to(".textc3", 1, {autoAlpha:1});

    var slideAnimation = new TimelineMax();

    slideAnimation.add(tl1, 0);

    new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: 0.1,
    duration: "100%"
    }).setPin("#pinContainer").setTween(slideAnimation).addTo(controller);


});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        
        $('.scroll-downs').fadeOut('fast');    
    } else {
        $('.scroll-downs').fadeIn('fast');  
    }
});
