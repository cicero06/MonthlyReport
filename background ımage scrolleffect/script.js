const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", ()=>{
    updateImage()
})

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900
    console.log(window.pageXOffset / 900);
    bgImageEl.style.backgroundSize = 160 - window.pageXOffset  / 12 + "%"
}
