document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.mobile-menu');
    const menuPanel = document.querySelector('.mobile-panel');
    const overlay = document.querySelector('.overlay');
    const menuItems = document.querySelectorAll('.mobile-menu-items a'); 
    
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    function openMenu() {
        hamburger.classList.add('active');
        menuPanel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        menuItems.forEach(item => {
            item.style.animation = 'none';
            item.offsetHeight; // reflow
            item.style.animation = null;
        });
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        menuPanel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        isMenuOpen = false;
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
            console.log('메뉴 클릭:', item.textContent);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            closeMenu();
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const writeButtonGroup = document.querySelector('.write-button-group');
    const plusIcon = document.querySelector('.plus-icon');
    const dropdownArrowIcon = document.querySelector('.dropdown-arrow-icon');
    const writeDropdownMenu = document.querySelector('.dropdown-menu');
    const profileButton = document.querySelector('.profile-button');
    const profileDropdownMenu = document.querySelector('.profile-dropdown-menu');

    function toggleWriteDropdown(event) {
        event.stopPropagation();
        writeDropdownMenu.classList.toggle('active');
        profileDropdownMenu.classList.remove('active');
    }

    plusIcon.addEventListener('click', toggleWriteDropdown);
    dropdownArrowIcon.addEventListener('click', toggleWriteDropdown);

    profileButton.addEventListener('click', (event) => {
        event.stopPropagation();
        profileDropdownMenu.classList.toggle('active');
        writeDropdownMenu.classList.remove('active');
    });

    document.addEventListener('click', (event) => {
        if (!writeDropdownMenu.contains(event.target) && !writeButtonGroup.contains(event.target)) {
            writeDropdownMenu.classList.remove('active');
        }
        if (!profileDropdownMenu.contains(event.target) && !profileButton.contains(event.target)) {
            profileDropdownMenu.classList.remove('active');
        }
    });

    const rankWrap = document.querySelector(".rank-wrap");
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    const headerGap = 40;
    const transitionPoint = headerHeight + headerGap;

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > transitionPoint) {
            rankWrap.classList.add("fixed");
        } else {
            rankWrap.classList.remove("fixed");
        }
    });


    const categoryWrap = document.querySelector('.category-button-wrap');
    if (categoryWrap) {
        categoryWrap.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                categoryWrap.querySelectorAll('button').forEach(btn => {
                    btn.classList.remove('active');
                });
                event.target.classList.add('active');
            }
        });
    }

    const etcWrap = document.querySelector('.etc-button-wrap');
    if (etcWrap) {
        etcWrap.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                etcWrap.querySelectorAll('button').forEach(btn => {
                    btn.classList.remove('active');
                    console.log("gg");
                });
                event.target.classList.add('active');
            }
        });
    }


});
