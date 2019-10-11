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

let toBeEnlrg = document.getElementsByClassName('hoverEnl');
console.log(toBeEnlrg);

for (let i = 0; i < toBeEnlrg.length; i++) {
    toBeEnlrg[i].addEventListener("mouseover", enlarge);
    toBeEnlrg[i].addEventListener("mouseout", deEnlarge);
}
