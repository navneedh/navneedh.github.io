function hideLoader() {
    $('#loading').hide();
    $('#section1').toggle();
}

// $(window).ready(hideLoader);
$('#section1').toggle();
setTimeout(hideLoader, 5 * 1000);
