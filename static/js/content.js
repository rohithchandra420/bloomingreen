var full_circle = $('#full_circle_id');
var fill_left = $('#fill_left_id');
var fill_right = $('#fill_right_id');
var menu_circle = $('#menu_circle_id');
var aftermovie_icon = $('#aftermovie_icon_id');
var gallery_icon = $('#gallery_icon_id');
var aftermovie_text = $('#aftermovie_text_h1_id');
var gallery_text = $('#gallery_text_h1_id');
var gallery = $('#gallery_id');
var aftermovie = $('#aftermovie_id');
var landing = $('#landing_id');
var datevenue = $('#about_id');
var about = $('#dv_id');
var eighteen = $('#eighteen_id');
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var menu = $('#second_menu');
var animator = $('#animator');
var contact = $('#contact_id');
var workshop = $('#workshop_id');
var band = $('#band_id');
var menu_icon = $('#menu_icon');
var menu_content = $('#menu_content');
var menu_home = $('#menu_home');
var menu_about = $('#menu_about');
var menu_gallery = $('#menu_gallery');
var menu_aftermovie = $('#menu_aftermovie');
var menu_contact = $('#menu_contact');
var menu_workshop = $('#menu_workshop');
var menu_band = $('#menu_band');
var popUpModalImg = $('#popUpModalImg');
var btnId = $('btnId')
var wrkshopImg = $('#wrkshopImg')
var workshop_title = $('.workshopWrapper .title');
var workshop_content = $('.workshopWrapper .content');

var slack = "./static/img/workshop/slacklining.jpg";
var acro = "./static/img/workshop/acro.jpg";
var contactImprov = "./static/img/workshop/contact improvisation.jpg"
var didge = './static/img/workshop/didge.jpg';
var dreamCatcher = './static/img/workshop/dream catcher.jpg'
var ecoSymp = './static/img/workshop/ecology symposium.jpg'
var estaticDance = './static/img/workshop/ecstatic dance.jpg'
var haiku = './static/img/workshop/haiku.jpg'
var handpan = './static/img/workshop/handpan.jpg'
var hulaHoop = './static/img/workshop/hula hoop.jpg'
var photography = './static/img/workshop/photography.jpg'
var plantMedicine = './static/img/workshop/plant medicine.jpg'

var slackText = "Slackline is the simple art of balancing and walking on a thin piece of webbing. Balancing the webbing and yourself at the same time can be at times calming as a struggle at the same time. It requires a focused mind and a relaxed body, but above all its fun. Workshop facilitated by Patrick Bosen."
var acroText = "Acroyoga is a physical practice, which combines yoga and acrobatics. Acro yoga includes many types of (mostly recreational) partner and group acrobatics in which at least someone is lifted. As such, it also draws on traditions of circus arts, cheerleading, and dance acro."
var contactImprovText = "Contact Improvisation is a partner dance form based on the physical principles of touch, momentum, shared weight, and most quintessentially - following a shared point of contact. This dance practice explores the skills of falling, rolling, counterbalance, lifting using minimal effort, how to make ourselves light when being lifted, centering and breathing techniques, and responsiveness to our partners and surroundings. Workshop taken by Contact Improvisation"
var didgeText = 'The didgeridoo is a wind instrument made from hollow wood. The first didgeridoos, played by aboriginal peoples in northern Australia an estimated 40,000 years ago, were made from fallen eucalyptus branches that had been naturally hollowed out by termites. It is also known that the mayan people of Central America had a similar instrument made of yucca or agave and today referred to as “la trompeta maya”. Workshop facilitated by Yogev Haruvi.';
var dreamCatcherText = 'Dream catcher is a handmade willow hoop, on which is woven a net or web. The dreamcatcher may also include sacred items such as certain feathers or beads. Traditionally they are often hung over cradles as protection. Workshop facilitated by Tejaswini Gopalakrishnan.'
var ecoSympText = 'Experts talking in various topics like unconventional living, rain water harvesting, minimalism, organic farming, vegan athletics and so on.'
var estaticDanceText = 'Ecstatic dance is a form of dance in which the dancers, sometimes without the need to follow specific steps, abandon themselves to the rhythm and move freely as the music takes them, leading to trance and a feeling of ecstasy. The effects of ecstatic dance begin with ecstasy itself, which may be experienced in differing degrees. Dancers are described as feeling connected to others, and to their own emotions. The dance serves as a form of meditation, helping people to cope with stress and to attain serenity. The workshop at BIG is facilitated by Ranjith Vallathol, founder of Thathsthu Wellness.'
var haikuText = 'Haiku is a Japanese poetry form. A haiku uses just a few words to capture a moment and create a picture in the readers mind. It is like a tiny window into a scene much larger than itself. raditionally, haiku is written in three lines, with five syllables in the first line, seven syllables in the second line, and five syllables in the third line. Stroll in the nature and write haiku poems with Samantak Bhadra.'
var handpanText = 'You will get in touch with this amazing instrument and we will guide you trough the basics of playing, explain the different types of scales, materials and playing styles. This is a hands-on experience and is designed for you to make an educated choice about whether this is something you want to further explore, before investing in an instrument. Workshop facilitated by Dheeraj and Akshay.'
var hulaHoopText = 'If you think hula hooping is just for kids, think again. This simple piece of equipment can boost the fun factor in your fitness routine and give you an excellent workout at the same time. The hoop is twirled around the waist, limbs or neck. Workshop is facilitated by Smriti Singh.'
var photographydText = 'A one-day photography workshop for enthusiasts who want to learn photography by understanding the technicalities of cameras and composition techniques. Workshop is taken by Arun Hegden. He is a professional photographer, based up in Mysore.'
var plantMedicineText = 'Plant based medicine and alternate healing modalities have been around for thousands of years and its time we started looking at the therapeutic benefits of using various kinds of plants to heal us from all forms of ailments and maladies which are psychosomatic in nature and beckon a spiritual catharsis. Workshop facilitated by Abhishek Roycowdhury, founder of Psychedlic Adventure.';


menu_content.css({
    'display': 'none'
});
menu_icon.attr('src', './static/img/menu.png');


//mouse enter menu
var animation_speed_animator = 150;
menu.mouseenter(function () {
    animator.animate({
        left: "-2vh",
        width: "13vh",
        height: "13vh"
    }, animation_speed_animator);
});
menu.mouseleave(function () {
    animator.animate({
        left: "0vh",
        width: "9vh",
        height: "9vh"
    }, animation_speed_animator);
});
//menu click
var menu_state = false;
menu_icon.click(function () {
    if (window.innerHeight > window.innerWidth) {
        animator.animate({
            width: window.innerHeight * 3,
            height: window.innerHeight * 3,
            left: -window.innerWidth / .5
        }, 200);
    } else {
        animator.animate({
            width: window.innerWidth * 3,
            height: window.innerWidth * 3,
            left: -window.innerWidth / .9
        }, 200);
    }

    window.location.href = './about.html'

    animator.animate({
        opacity: 0
    }, 600);
    animator.animate({
        opacity: 1,
        left: "0vh",
        width: "9vh",
        height: "9vh"
    }, 0);
    menu_icon.attr('src', './static/img/menu_2.png');
    menu_state = false;
});

//mouse click on menu content
menu_home.click(function () {
    window.location.href = 'https://bloomingreenfestival.com'
});
menu_about.click(function () {
    window.location.href = 'https://bloomingreenfestival.com/about'
});
menu_gallery.click(function () {
    window.location.href = 'https://bloomingreenfestival.com/gallery'
});
menu_aftermovie.click(function () {
    window.location.href = 'https://bloomingreenfestival.com/aftermovie'
});
menu_contact.click(function () {
    window.location.href = 'https://bloomingreenfestival.com/contact'
});
menu_workshop.click(function () {
    window.location.href = 'https://bloomingreenfestival.com/workshop'
});
menu_band.click(function () {
    window.location.href = 'file:///D:/Rohith/Web/akhilthankachen.github.io-master/band.html'
});

/// simple light box gallery
//$('.galleryWrapper a').simpleLightbox();

/// Workshop Animations

workshop_title.hover(function () {
    workshop_content.css("display", "block");
    console.log('working');
});




$(document).ready(function () {
    $('#wrkshopImg1').click(function () {
        $('#popUpModalImg').attr('src', slack);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = slackText;
    });
    $('#wrkshopImg2').click(function () {
        $('#popUpModalImg').attr('src', acro);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = acroText;
    });
    $('#wrkshopImg3').click(function () {
        $('#popUpModalImg').attr('src', contactImprov);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = contactImprovText;
    });
    $('#wrkshopImg4').click(function () {
        $('#popUpModalImg').attr('src', didge);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = didgeText;
    });
    $('#wrkshopImg5').click(function () {
        $('#popUpModalImg').attr('src', dreamCatcher);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = dreamCatcherText;
    });
    $('#wrkshopImg6').click(function () {
        $('#popUpModalImg').attr('src', ecoSymp);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = ecoSympText;
    });
    $('#wrkshopImg7').click(function () {
        $('#popUpModalImg').attr('src', estaticDance);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = estaticDanceText;
    });
    $('#wrkshopImg8').click(function () {
        $('#popUpModalImg').attr('src', haiku);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = haikuText;
    });
    $('#wrkshopImg9').click(function () {
        $('#popUpModalImg').attr('src', handpan);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = handpanText;
    });
    $('#wrkshopImg10').click(function () {
        $('#popUpModalImg').attr('src', hulaHoop);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = hulaHoopText;
    });
    $('#wrkshopImg11').click(function () {
        $('#popUpModalImg').attr('src', photography);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = photographyText;
    });
    $('#wrkshopImg12').click(function () {
        $('#popUpModalImg').attr('src', plantMedicine);
        var bandText = document.getElementById("workshopContentId");
        bandText.textContent = plantMedicineText;
    });

});


