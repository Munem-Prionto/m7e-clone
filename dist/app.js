const mobile_menu = document.querySelector('#mobile-menu-btn')
const mobile_menu_link = document.querySelector('#mobile-menu-links')
const mobile_about_dd = document.querySelector('#mobile-about-dd');
const mobile_about_dd_links = document.querySelector('#mobile-about-dd-link');
const mobile_arrow_up = document.querySelector('#arrow-up');
const mobile_arrow_down = document.querySelector('#arrow-down');



mobile_menu.addEventListener('click' , e=> {
    mobile_menu_link.classList.toggle('show');
})
mobile_about_dd.addEventListener('click' , e=> {
    
    mobile_arrow_down.classList.toggle('hide');
    mobile_arrow_up.classList.toggle('hide');
    mobile_about_dd_links.classList.toggle('show');
})
