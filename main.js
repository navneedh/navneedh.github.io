function hideLoader() {
    $('#loading').hide();
    $('#section1').css('visibility', 'visible');
}

// $(window).ready(hideLoader);
$('#section1').toggle();
setTimeout(hideLoader, 5 * 1000);
