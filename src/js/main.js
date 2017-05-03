
$(document).ready(function() {
    function resizeInput() {
        $(this).attr('size', $(this).val().length + 10);

        console.log('fine')
    }

    $('.search-input').keyup(resizeInput).each(resizeInput);


});