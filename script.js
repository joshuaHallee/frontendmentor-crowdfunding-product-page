let mobileNav = document.getElementById('mobile-nav')
// let modalNav = document.getElementById('modal-nav');

// modalNav.addEventListener("click", function(){
//     document.getElementById('modal').classList.add('hidden')
// })

mobileNav.addEventListener("click", function() {
    let menu = document.getElementById('hero-nav-menu')
    let pageOverlay = document.getElementById('mobile-overlay')
    
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden')
        pageOverlay.classList.add('hidden')
    } else {
        menu.classList.remove('hidden')
        pageOverlay.classList.remove('hidden')
    }
    
})