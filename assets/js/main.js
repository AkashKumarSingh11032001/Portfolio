/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});


/*=============== SWIPER TESTIMONIAL ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactName = document.getElementById('contact-name')
const contactEmail = document.getElementById('contact-email')
const contactProject = document.getElementById('contact-project')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault();
    // Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        // Show message	
        contactMessage.textContent = "Write all the input fields "
    }
    else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_fwj75ql', 'template_tvcry2d', '#contact-form', 'sQ-QQ-aYM8gzfBifV').then(() => {
            // Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = "Message sent!"

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)
        }, (error) => {
            alert("OOPS! SOMETHING HAS FAILED...", error)
        })

        // to clear input filed
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }

}
contactForm.addEventListener('submit', sendEmail)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const sectionClass = document.querySelector('nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'): scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

