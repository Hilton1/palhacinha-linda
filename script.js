const botaoNao = document.querySelector("#nao");
const botaoSim = document.querySelector("#sim");

let isAnimating = false;

function posicaoAleatoria() {
  if (!isAnimating) {
    isAnimating = true;
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;
    botaoNao.style.transform = `translate(${randomX}px, ${randomY}px)`;
    botaoNao.style.transition = "all 0.2s ease";

    setTimeout(function () {
      isAnimating = false;
    }, 200);
  }
}

botaoNao.addEventListener("click", function () {
  posicaoAleatoria()
});

botaoNao.addEventListener("mouseover", function () {
  posicaoAleatoria()
});

sim.addEventListener("click", () => {
  let timerInterval
  Swal.fire({
    title: 'FELIZ DIA DOS NAMORADOS, MEU AMOR',
    html: 'É o primeiro de MUITOS <br> (Sabia que você iria escolher essa opção. 🤍)',
    timer: 4000,
    imageUrl: './amor.jpeg',
    imageWidth: 300,
    imageHeight: 400,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
});

