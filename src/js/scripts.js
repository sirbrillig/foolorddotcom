(function() {
    function setUpSmoothScroll() {
        if ( document.readyState != 'loading' ) {
            smoothScroll.init();
        } else {
            document.addEventListener( 'DOMContentLoaded', smoothScroll.init );
        }
    }

    function beginNarration() {
        // Hide the content
        var page = document.querySelector( '.content' );
        page.className = page.className + ' narration-mode';

        var elements = [].slice.call( document.querySelectorAll( '.progressive' ) );
        timeout = 200;
        elements.map( function( element ) {
            setTimeout( showElement.bind( null, element ), timeout );
            timeout += 3000;
        } );
    }

    function showElement( element ) {
        element.className = element.className + ' progressive--show';
    }

    // ---------------------------------

    setUpSmoothScroll();
    beginNarration();
})();
