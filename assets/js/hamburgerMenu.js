function kroesMobileNav(){

    if (!document.querySelector(".navbar-toggler")) {
        return;
    }

    const navToggler = document.querySelector(".navbar-toggler");
    const hamburger = document.querySelector(".kroes-hamburger-menu");

    const navLinks = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('navbarSupportedContent');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});

    navToggler.addEventListener("click", function(e){

        e.stopPropagation();
        hamburger.classList.toggle('active');

    });

    menuToggle.addEventListener('shown.bs.collapse', function () {

        hamburger.classList.add('active');

    });

    menuToggle.addEventListener('hidden.bs.collapse', function () {

        hamburger.classList.remove('active');

    });

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', (e) => {

            e.stopPropagation();

         
            if (getComputedStyle(navToggler).display !== 'none') {
                bsCollapse.toggle();
                hamburger.classList.remove('active');
            }
        });
    });
}
