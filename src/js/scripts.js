(function() {
    function setUpSmoothScroll() {
        if ( document.readyState != 'loading' ) {
            smoothScroll.init();
        } else {
            document.addEventListener( 'DOMContentLoaded', smoothScroll.init );
        }
    }

    function beginNarration() {
        var elements = [].slice.call( document.querySelectorAll( '.progressive' ) );
        timeout = 200;
        elements.map( function( element ) {
            setTimeout( showElement.bind( null, element ), timeout );
            var charLen = element.innerText.length;
            var increase = 3000 + ( charLen * 20 );
            timeout += increase;
        } );
    }

    function hidePage() {
        var page = document.querySelector( '.content' );
        page.className = page.className + ' narration-mode';
    }

    function showElement( element ) {
        element.className = element.className + ' show';
    }

    function linkAboutSection() {
        var aboutSection = document.querySelector( '.about' );
        var aboutLink = document.querySelector( '.about-icon' );
        if ( ! aboutLink || ! about ) return;
        aboutLink.addEventListener( 'click', function( event ) {
            event.preventDefault();
            showElement( about );
        } );
    }

    // ---------------------------------

    setUpSmoothScroll();
    hidePage();
    beginNarration();
    linkAboutSection();
})();
