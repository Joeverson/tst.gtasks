$(function(){
    document.addEventListener('deviceready', onDeviceReady, false);
});


function onDeviceReady() {

    jQuery( window ).on( "swipeleft", function( event ) {
        $('.form-box-ini').css({transform:'translateX(500px)'});
    })

    jQuery( window ).on( "swiperight", function( event ) {
        $('.form-box-ini').css({transform:'translateX(0px)'});
    })
}
