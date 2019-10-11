//----------------------------------------------------------------------------
//VIDEO HANDLING BEGIN
//----------------------------------------------------------------------------

//PHONE USERS REQUIRE CONTROL
let phone = window.matchMedia("(orientation: portrait)");
if (phone.matches) {
    let vids = document.getElementsByTagName('video');
    for (let i = 0; i < vids.length; i++) {
        let vid = vids[i];
        vid.controls = "true";
    }
}

const enlarge = (evt) => {
    if (evt.target.classList.contains('hoverEnl')) {
        if (evt.target.classList.contains('deEnlarge')) {
            evt.target.classList.remove('deEnlarge');
        }
        if (!evt.target.classList.contains('enlarge')) {
            evt.target.classList.add('enlarge');
        }
        if (!evt.target.classList.contains('animated')) {
            evt.target.classList.add('animated');
        }
        else {
            evt.target.classList.remove('animated');
            evt.target.classList.add('animated');
        }
    }
}

const deEnlarge = (evt) => {
    if (evt.target.classList.contains('hoverEnl')) {
        if (evt.target.classList.contains('enlarge')) {
            evt.target.classList.remove('enlarge');
            evt.target.classList.add('deEnlarge');
        }   
        if (evt.target.classList.contains('animated')) {
            evt.target.classList.remove('animated');
            evt.target.classList.add('animated');
        }
        else {
            evt.target.classList.add('animated');
        }
    }
}

const vidOpen = (evt) => {
    let c = evt.target.children;
    let vid;
    let extra;
    for (let i = 0; i < c.length; i++) {
        if (c[i].tagName == 'VIDEO') {
            vid = c[i];
        }
        if (c[i].classList.contains('extra')) {
            extra = c[i];
        }
    }

    if (phone.matches) {
        vid.style.pointerEvents = "all";
    }
    vid.play();
    extra.classList.remove('fadeIn');
    extra.classList.remove('fadeOut');
    extra.classList.remove('animated');
    extra.classList.add('fadeIn');
    extra.classList.add('animated');
    vid.classList.remove('fadeIn');
    vid.classList.remove('fadeOut');
    vid.classList.remove('animated');
    vid.classList.add('fadeIn');
    vid.classList.add('animated');
}

const vidClose = (evt) => {
    let c = evt.target.children;
    let vid;
    let extra;
    for (let i = 0; i < c.length; i++) {
        if (c[i].tagName == 'VIDEO') {
            vid = c[i];
        }
        if (c[i].classList.contains('extra')) {
            extra = c[i];
        }
    }
    extra.classList.remove('fadeIn');
    extra.classList.remove('fadeOut');
    extra.classList.remove('animated');
    extra.classList.add('fadeOut');
    extra.classList.add('animated');
    vid.classList.remove('fadeIn');
    vid.classList.remove('fadeOut');
    vid.classList.remove('animated');
    vid.classList.add('fadeOut');
    vid.classList.add('animated');
    vid.pause();
    vid.currentTime = 0;
}

let toBeEnlrg = document.getElementsByClassName('hoverEnl');

for (let i = 0; i < toBeEnlrg.length; i++) {
    if (!phone.matches) {
        toBeEnlrg[i].addEventListener("mouseover", enlarge);
        toBeEnlrg[i].addEventListener("mouseover", vidOpen);
        toBeEnlrg[i].addEventListener("mouseout", deEnlarge);
        toBeEnlrg[i].addEventListener("mouseout", vidClose);
    }
}
//----------------------------------------------------------------------------
//VIDEO HANDLING END
//----------------------------------------------------------------------------