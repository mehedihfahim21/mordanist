$(document).ready(function(){
 
    //jquery waypoints
    
    $(".js--services-section").waypoint(function(direction){
        if(direction == "down"){
           $("nav").addClass("sticky");
           } else{
            $("nav").removeClass("sticky");
           }
    });
    
    //gl-slide
    
    let slider = new glSlider(document.getElementById('slider'), {
    arrows: true,             // Boolean (default - true)
    dots: false,              // Boolean (default - false)
    preloader: true,          // Boolean (default - true)

    autoplay: false,          // Boolean (default - false)
    autoplaySpeed: 3000,      // Number (default - 3000)

    startItem: 0,             // Number (defaul - 0)
    animationSpeed: 800,      // Number (default - 500)

    renderInView: true, // render only when slider visible (Used Intersection Observer API )

    effects: {
        filter: 'base',        // String ( defaul - base | monochrome | negative | sepia )
        slide: 'zoomBlur'      // String ( defaul - base | zoomBlur | fragmentParalax | wave )
    }
});

    
});

