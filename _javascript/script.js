function createSnow() {
    const snow = document.createElement("div")
    snow.classList.add("snow")
    snow.style.left = Math.random() * 100 + "vw"
    snow.style.animationDuration = Math.random() + 2 + 3 + "s"
    snow.innerText = "❄"
    document.body.appendChild(snow)
}

setInterval(createSnow, 500)

// gsap
let tl = gsap.timeline({ default: { duration: .65 } })

tl.fromTo(".text", { scale: 0 }, { scale: 1, ease: "elastic.out(1,0.3", duration: 1 })
tl.fromTo(".icon-topo", { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
tl.fromTo(".title", { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
tl.fromTo(".icons", { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
tl.fromTo(".icon-topo", { rotation: "-2deg" }, { rotation: "2deg", repeat: -1, yoyo: true }, "<")
tl.fromTo(".icons", { y: 0 }, { y: -10, repeat: -1, yoyo: true })