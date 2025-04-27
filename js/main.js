// Quality Landscaping And Construction- Written by Nathan McQuaid who you should definitely hire!

navbarContent = '<ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="services.html">Services</a></li><li><a href="contact.html">Contact</a></li></ul>'

contactBarContent = '<div class="contactInfo"><a href="tel:555-555-5555"><img src="../images/phone.jpg" alt="Call 555-555-5555" /></a><a href="tel:555-555-5555"><img src="../images/email.png" alt="Call 555-555-5555" id="email"/></a></div>'

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactBar = document.getElementById("contactBar");
    if (contactBar) {
        contactBar.innerHTML += contactBarContent;
    }

    // Menu toggle functionality
    const menuButton = document.querySelector('.dropdownButton');
    const sideMenu = document.getElementById('sideMenu');
    
    if (menuButton && sideMenu) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            sideMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
                menuButton.classList.remove('active');
                sideMenu.classList.remove('active');
            }
        });
    }

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top <= windowHeight * 0.8 && // Trigger when element is 80% in view
            rect.bottom >= 0
        );
    }

    // Function to handle scroll animation
    function handleScrollAnimation() {
        const images = document.querySelectorAll('.services img');
        images.forEach(img => {
            if (isInViewport(img)) {
                img.classList.add('animate');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);

    // Initial check for elements in view
    handleScrollAnimation();
});