const botaoNao = document.querySelector("#nao");
const botaoSim = document.querySelector("#sim");


function posicaoAleatoria() {
    isAnimating = true;
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;
    botaoNao.style.transform = `translate(${randomX}px, ${randomY}px)`;
    botaoNao.style.transition = "all 0.2s ease";
}


botaoNao.addEventListener("mouseover", posicaoAleatoria);
botaoNao.addEventListener("click", posicaoAleatoria);

botaoSim.addEventListener("click", () => {
  const html = document.getElementById("conteudo-surpresa").innerHTML;

  Swal.fire({
    title: '',
    html: html,
    showConfirmButton: false,
    width: 400,
    padding: '0',
    background: 'transparent',
    backdrop: `rgba(0,0,0,0.6)`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    timer: 7000,
    timerProgressBar: true
  });
});


