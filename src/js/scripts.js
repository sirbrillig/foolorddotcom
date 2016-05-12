(function() {
    if ( document.readyState != 'loading' ) {
        smoothScroll.init();
    } else {
        document.addEventListener( 'DOMContentLoaded', smoothScroll.init );
    }
})();
