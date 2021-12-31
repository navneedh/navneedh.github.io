function hideLoader() {
    $('#loading').hide();
    $('#section1').toggle();
}

// $(window).ready(hideLoader);


$('#section1').hide();
setTimeout(hideLoader, 5 * 1000);
