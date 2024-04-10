function kroesArrowUp() {
    const arrowUp = document.querySelector('.kroes-arrow-up');

    if (!arrowUp) {
        return;
    }


window.addEventListener('scroll', () => {
  const bodyHeight = document.body.scrollHeight;
  const halfwayPoint = bodyHeight / 2;

  if (window.scrollY > halfwayPoint) {
    arrowUp.classList.add('kroes-arrow-up-show');

  } else {
    arrowUp.classList.remove('kroes-arrow-up-show');

  }
});

}