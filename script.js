let mobileNav = document.getElementById('mobile-nav')
let modalNav = document.getElementById('modal-nav');
let backProjectButton = document.getElementById('back-project-button')

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

modalNav.addEventListener("click", function(){
    let modal = document.getElementById('modal-back')
    
    if (!modal.classList.contains('hidden')) {
        modal.classList.add('hidden')
    } else {
        modal.classList.remove('hidden')

    }
})

backProjectButton.addEventListener("click", function() {

    let modal = document.getElementById('modal-back')
    
    if (!modal.classList.contains('hidden')) {
        modal.classList.add('hidden')
    } else {
        modal.classList.remove('hidden')

    }
})