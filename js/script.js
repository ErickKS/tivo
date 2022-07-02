// NAV

const btnMobile = document.getElementById('btn-mobile')
const nav = document.getElementById('navigation')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

// CLOSE NAV ON CLICK UL -> A 

function closeNav() {
    nav.classList.toggle('active')
}

// SCROLL NAV EFFECT

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    activateMenuCurrentSection(home);
    activateMenuCurrentSection(features);
    activateMenuCurrentSection(details);
    activateMenuCurrentSection(video);
    activateMenuCurrentSection(pricing);
}

function activateMenuCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu li a[href*=${sectionId}]`)

    menuElement.classList.remove('selected')
    if (sectionBoundaries) {
        menuElement.classList.add('selected')
    }
}

// SLIDER 01

$('.slider').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// FEATURES ANIMATION

const panelBtn = document.querySelector('.features-panel button');
const panelBtnTwo = document.querySelector('.features-panel button:nth-of-type(2)');
const panelBtnThree = document.querySelector('.features-panel button:nth-of-type(3)');

const featuresOne = document.querySelector('.features .features-single');
const featuresTwo = document.querySelector('.features .features-single:nth-of-type(2)');
const featuresThree = document.querySelector('.features .features-single:nth-of-type(3)');

function featuresFunction() {
    if(panelBtn.classList.contains('active')){
        return
    }else {
        panelBtnTwo.classList.remove('active');
        panelBtnThree.classList.remove('active');
        
        featuresTwo.classList.remove('active');
        featuresThree.classList.remove('active');

        panelBtn.classList.add('active');
        featuresOne.classList.add('active');
    }
}

function featuresTwoFunction() {
    if(panelBtnTwo.classList.contains('active')){
        return
    }else {
        panelBtn.classList.remove('active');
        panelBtnThree.classList.remove('active');

        featuresOne.classList.remove('active');
        featuresThree.classList.remove('active');
        
        panelBtnTwo.classList.add('active');
        featuresTwo.classList.add('active');
    }
}

function featuresThreeFunction() {
    if(panelBtnThree.classList.contains('active')){
        return
    }else {
        panelBtn.classList.remove('active');
        panelBtnTwo.classList.remove('active');

        featuresOne.classList.remove('active');
        featuresTwo.classList.remove('active');
        
        panelBtnThree.classList.add('active');
        featuresThree.classList.add('active');
    }
}

// SLIDER 02 - TESTIMONIALS

$('.slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
