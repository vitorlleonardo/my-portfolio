/* sr.reveal("#secondary-section", {
    origin: "left", //Para ele surgir de cima para baixo.
    distance: "250px", // A distancia do origin para a posição original do elemento.
    duration: 4000, // A duração da animação em ms
    delay: 300, // O delay para a animação acontecer
    reset: true // Ao sair do campo de tela, a animação não acontecerá novamente caso eu passe por ela novamente.
}); 

const mg = ScrollReveal({reset: true})

mg.reveal("#third-section", {
    origin: "left", //Para ele surgir de cima para baixo.
    distance: "150px", // A distancia do origin para a posição original do elemento.
    duration: 5000, // A duração da animação em ms
    delay: 500, // O delay para a animação acontecer
    reset: true // Ao sair do campo de tela, a animação não acontecerá novamente caso eu passe por ela novamente.
});