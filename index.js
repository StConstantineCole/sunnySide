const menuIcon = document.getElementById('menuIcon');
const navItems = document.getElementById('navItems');


function openmenu() {
        if (navItems.style.display != 'flex') {
            navItems.style.display = 'flex';

    }else if( navItems.style.display != 'none'){
        navItems.style.display = 'none'
    }
}

menuIcon.addEventListener('click', openmenu);
