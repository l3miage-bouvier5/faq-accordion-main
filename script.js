document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question');

  questions.forEach(function (question) {
    question.addEventListener('click', function () {
      const index = question.getAttribute('data-index');
      const answer = document.getElementById(`answer${index}`);
      const button = question.querySelector('.btn-deploy');

      const openAnswer = document.querySelector('.answer.visible');

      if (openAnswer && openAnswer !== answer) {
        openAnswer.classList.remove('visible');
      }

      answer.classList.toggle('hidden');

      answer.classList.toggle('visible', !answer.classList.contains('hidden'));

      if (openAnswer && openAnswer !== answer) {
        openAnswer.classList.remove('visible');
      }

      let imageType = button.getAttribute('data-image');

      if (imageType === 'plus') {
        imageType = 'minus';
      } else {
        imageType = 'plus';
      }
      button.setAttribute('data-image', imageType);
      if (imageType === 'plus') {
        button.querySelector('img').src = './assets/images/icon-plus.svg';
      } else {
        button.querySelector('img').src = './assets/images/icon-minus.svg';
      }
    });
  });
});
