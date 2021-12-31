function hideLoader() {
    $('#loading').hide();
    $('#section1').toggle();
}

// $(window).ready(hideLoader);

setTimeout(hideLoader, 5 * 1000);
