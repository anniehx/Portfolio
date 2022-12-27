// NAV BAR SCROLL EFFECT (from https://stackoverflow.com/questions/8218159/javascript-check-if-page-is-at-the-top)

window.addEventListener("scroll", function(){
    if (window.scrollY == 0) {
        document.querySelector('nav').className = "nav-bar";
    } else {
        document.querySelector('nav').className = "nav-bar nav-bar-scroll";
    }
})

// ADD ANY OTHER JS BELOW: