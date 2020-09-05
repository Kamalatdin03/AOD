const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
burger.addEventListener("click", function (e) {
    e.target.classList.toggle("burger_active");
    if (e.target.classList.contains("burger_active")) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});

function ibg() {
    let ibg = document.querySelectorAll(".ibg");

    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector("img")) {
            ibg[i].style.backgroundImage =
                "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
    }
}

ibg();

const track = document.querySelector(".review__track");
const trackItem = track.children;
const dots = document.querySelector(".review__dots").children;
var index = 0;

track.style.height = trackItem[0].scrollHeight + "px";

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function (e) {
        for (let k = 0; k < dots.length; k++) {
            if (dots[k] == e.target) {
                dots[i].classList.add("active");
                index = i;
                track.style.height = trackItem[index].scrollHeight + "px";
                continue;
            }
            dots[k].classList.remove("active");
        }
        track.style.transform = "translateX(-" + (100 * i) + "%)";
    });
}

window.addEventListener("resize", function () {
    track.style.height = trackItem[index].scrollHeight + "px";
});
