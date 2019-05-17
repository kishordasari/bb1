$(document).ready(function(){
    var ht = $('.navbar-default').height();
    console.log(ht);
    $("#content").css('padding-top',$('.navbar-default').height());


    $(".scroll-downs").click(function() {
        $('html,body').animate({
            scrollTop: $("#content").offset().top - 50},
            1000);
    });



    var controller = new ScrollMagic.Controller();

    var slideAnimation = new TimelineMax();

    var tl2 = new TimelineMax()
                .from($(".quote1, .quote2, .quote3"), 1, {y: "0%", autoAlpha:0})
                .to(".quote1", 1, {y: "0%", autoAlpha:1})
                .to(".quote1", 1, {y: "-=50%", autoAlpha:0})
                .to(".quote2", 1, {y: "0%", autoAlpha:1})
                .to(".quote2", 1, {y: "-=50%", autoAlpha:0})
                .to(".quote3", 1, {y: "0%", autoAlpha:1});


    slideAnimation.add(tl2, 0);

    // var ourScene = new ScrollMagic.Scene({
    //     triggerElement : '.fade-in',
    //     reverse : true
    // })
    // .setClassToggle('.fade-in', 'show')
    // .addTo(controller);

    // $('.fade-in').each(function(){
    //     var ourScene = new ScrollMagic.Scene({
    //         triggerElement : this,
    //         reverse : true
    //     })
    //     .setClassToggle(this, 'show')
    //     .addTo(controller);
    // });

    var pinScene = new ScrollMagic.Scene({ 
        triggerElement: "#content", 
        triggerHook: 0.1,
        duration: '0%'
    })
        .setPin("#content", {pushFollowers : false})
        .setTween(slideAnimation)
        .addTo(controller);
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        
        $('.scroll-downs').fadeOut('fast');    
    } else {
        $('.scroll-downs').fadeIn('fast');  
    }
});
