const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
burger.addEventListener("click", function (e) {
    e.target.classList.toggle("burger_active");
    if (e.target.classList.contains("burger_active")) {
        nav.classList.add("active");
    }
    else {
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

