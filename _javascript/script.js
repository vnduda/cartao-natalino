// Função para criar flocos de neve
function createSnow() {
    const snow = document.createElement("div")
    snow.classList.add("snow")
    snow.style.left = Math.random() * 100 + "vw"
    snow.style.animationDuration = Math.random() + 2 + 3 + "s"
    snow.innerText = "❄"
    document.body.appendChild(snow)
}

setInterval(createSnow, 500); // Cria um floco de neve a cada 500ms

// Animações GSAP
let tl = gsap.timeline({ default: { duration: .65 } })

tl.fromTo(".icons", { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
tl.fromTo(".icons", { y: 0 }, { y: -10, repeat: 1, yoyo: true })
gsap.fromTo(".icon-topo",  { y: 0 },{ y: 45, rotation: 15, duration: 2});
