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

    $("input[type=button]").click(function(){
        var prio = $(this).attr('data-priority');
        var title = $('#title-task').val();
        var date = $('#date-task').val();
        var desc = $('#desc-task').val();

        $.ajax({
            type: "post",
            url: "http://314.bl.ee/gtask/soket.communication.php",
            data: "?title-task="+title+"&date-task="+date+"&desc-task="+desc+"&priority-task="+prio+"&flag=add",
            datatype: "html"
        }).done(function(e){
            alert(e);
        }).fail(function(e){
            console.log(e);
        });
    });

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}
