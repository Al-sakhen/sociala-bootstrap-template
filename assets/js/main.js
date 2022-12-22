// navbar
$('.offcanva-btn').on('click' , function(){
    $(this).toggleClass('active')
})

// main content
$('.message-btn').on('click' , function(){
    $('.chat-contacts').toggleClass('active')
    $('.main-content').toggleClass('active-chat')
})

let navbarHeight = $('.navbar').outerHeight();
$('.sidebar').css({'top' : navbarHeight+'px'})
$('.chat-contacts').css({'top' : navbarHeight+'px'})
$('.main-content').css({'padding-top': navbarHeight+'px'})

let windowWidth = $(window).width();
let sidebarWidth = $('.sidebar').width();

if( windowWidth >= 1600 ){
    console.log('greater than 1600');
    $('.main-content').css({'padding-right': sidebarWidth+'px' , 'padding-left': sidebarWidth+'px'})
}else if ( windowWidth >= 992 && windowWidth < 1600 ){
    console.log('between 992 and  1600');
    $('.main-content').css({'padding-right': 0 , 'padding-left': sidebarWidth+'px'})

}else if ( windowWidth < 992 ){
    console.log('less than 992 ');
    $('.main-content').css({'padding-right': 0 , 'padding-left': 0})
}

$(window).on('resize', function(){
    let windowWidth = $(window).width();

    if( windowWidth >= 1600 ){
        console.log('greater than 1600');
        $('.main-content').css({'padding-right': sidebarWidth+'px' , 'padding-left': sidebarWidth+'px'})
    }else if ( windowWidth >= 992 && windowWidth < 1600 ){
        console.log('between 992 and  1600');
        $('.main-content').css({'padding-right': 0 , 'padding-left': sidebarWidth+'px'})
    
    }else if ( windowWidth < 992 ){
        console.log('less than 992 ');
        $('.main-content').css({'padding-right': 0 , 'padding-left': 0})
    }
})