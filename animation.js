
// NAVIGATION
function closeNav() {
   document.getElementById("navi-toggle").checked = false;
}

// ABOUT //

TweenMax.fromTo('.background-img', 20, { x: 0 }, { x: '-250px', repeat: -1, repeatDelay: .2, yoyo: true })

TweenMax.to('.logo-2', 7, { rotation: -360, ease: Power2.easeOut })

// EVENT //
const hellos = new TimelineMax({ repeat: -1, repeatDelay: 1 })
hellos.to('.english', 1, { opacity: 1 })
hellos.to('.english', 1, { opacity: 0 })
hellos.to('.korean', 1, { opacity: 1 })
hellos.to('.korean', 1, { opacity: 0 })
hellos.to('.japanese', 1, { opacity: 1 })
hellos.to('.japanese', 1, { opacity: 0 })
hellos.to('.chinese', 1, { opacity: 1 })
hellos.to('.chinese', 1, { opacity: 0 })
hellos.to('.hindi', 1, { opacity: 1 })
hellos.to('.hindi', 1, { opacity: 0 })
hellos.to('.vietnamese', 1, { opacity: 1 })
hellos.to('.vietnamese', 1, { opacity: 0 })

// ABOUT //

const animAbout = new TimelineMax()
animAbout.fromTo('.about-title', .5, { y: '-5px', opacity: 0 }, { y: 0, opacity: 1 })
animAbout.fromTo('.about-line', .5, { width: '0%' }, { width: '20%' }, '-=.5')
animAbout.fromTo('.about-icon-1', .5, { x: '-100px', opacity: 0 }, { x: 0, opacity: 1 })
animAbout.fromTo('.about-span-1', .5, { x: '100px', opacity: 0 }, { x: 0, opacity: 1 }, '-=.5')
animAbout.fromTo('.about-icon-2', .5, { x: '-200px', opacity: 0 }, { x: 0, opacity: 1 }, '-=.3')
animAbout.fromTo('.about-span-2', .5, { x: '120px', opacity: 0 }, { x: 0, opacity: 1 }, '-=.5')
animAbout.fromTo('.about-icon-3', .5, { x: '-300px', opacity: 0 }, { x: 0, opacity: 1 }, '-=.3')
animAbout.fromTo('.about-span-3', .5, { x: '130px', opacity: 0 }, { x: 0, opacity: 1 }, '-=.5')

// GALLERY //

const animGallery = new TimelineMax()
animGallery.fromTo('#section-gallery', .3, { filter: 'brightness(.25)' }, { filter: 'brightness(1)' })

// PEOPLE //
const animPeople = new TimelineMax()
animPeople.fromTo('.people-title', .5, { y: '-5px', opacity: 0 }, { y: 0, opacity: 1 })
animPeople.fromTo('.people-line', .5, { width: '0%' }, { width: '20%' }, '-=.5')
animPeople.fromTo('.group', .5, { y: '-10px', opacity: 0 }, { y: 0, opacity: 1 })

////////////// SCROLLMAGIC ///////////////

const controller = new ScrollMagic.Controller()

// about
const sceneAbout = new ScrollMagic.Scene({
   triggerElement: '#section-about',
})
   .setTween(animAbout)
   .addTo(controller)

// gallery
const sceneGallery = new ScrollMagic.Scene({
   triggerElement: '#section-gallery',
})
   .setTween(animGallery)
   .addTo(controller)

// people
const scenePeople = new ScrollMagic.Scene({
   triggerElement: '#section-people',
})
   .setTween(animPeople)
   .addTo(controller)
