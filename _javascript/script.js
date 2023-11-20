function createSnow() {
    const snowFlake = document.createElement("div");
    snowFlake.classList.add("snow");
    snowFlake.innerText = "❄";
    // Define o posicionamento horizontal aleatório e a duração da animação
    snowFlake.style.left = Math.random() * 100 + "%";
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Selecionar o elemento .card para anexar o floco de neve
    const card = document.querySelector('.card');
    card.appendChild(snowFlake);

    // Remover o floco de neve depois que a animação estiver completa
    // O tempo de remoção deve ser igual ao 'animationDuration' definido acima
    let animationDuration = parseFloat(snowFlake.style.animationDuration);
    setTimeout(() => {
        snowFlake.remove();
    }, animationDuration * 1000); // Converte para milissegundos
}

// Continuar criando flocos de neve a cada intervalo
setInterval(createSnow, 500);

// Animações GSAP
let tl = gsap.timeline({ default: { duration: .65 } })

tl.fromTo(".icons", { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
tl.fromTo(".icons", { y: 0 }, { y: -10, repeat: 1, yoyo: true })
gsap.fromTo(".icon-topo",  { y: 0 },{ y: 45, rotation: 15, duration: 2});
