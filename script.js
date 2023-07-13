

 $('.hamburger')[0].addEventListener('click', function(){
    $('.options')[0].style.bottom = "0";
 })



 $('.close')[0].addEventListener('click',function(){
     $('.options')[0].style.bottom = "100%";
 })

 var padded = false;

$('.grid-toggle')[0].addEventListener('click',function(){
     
    if (!padded){   
        $('.container-fluid')
            .find('img')
                .css('padding', '10px')
        .end()
        padded = true;
    }

    else if (padded){
        $('.container-fluid')
            .find('img')
                .css('padding', '0px')
        .end()
        padded = false;
    }
    
})

