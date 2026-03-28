document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS with faster timing
    AOS.init({
        duration: 450,
        easing: 'ease-out',
        once: true,
        offset: 60
    });

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // FAQ Accordion
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const faqItem = header.parentElement;
            const faqContent = faqItem.querySelector('.faq-content');

            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-content').style.display = 'none';
                }
            });

            if (faqItem.classList.contains('active')) {
                faqItem.classList.remove('active');
                faqContent.style.display = 'none';
            } else {
                faqItem.classList.add('active');
                faqContent.style.display = 'block';
            }
        });
    });

    // Form Submission
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', () => {
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! Your details are being sent to our admissions team at cispilot9@gmail.com. We will contact you shortly.`);
        });
    }

});
