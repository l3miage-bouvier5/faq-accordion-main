document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question');
  const answers = document.querySelectorAll('.answer');

  questions.forEach(function (question) {
    question.addEventListener('click', function () {
      const index = question.getAttribute('data-index');
      const answer = document.getElementById(`answer${index}`);
      const button = question.querySelector('.btn-deploy');

      // Vérifiez si une réponse est déjà déployée
      const openAnswer = document.querySelector('.answer.visible');

      // Fermez la réponse précédente (si elle existe)
      if (openAnswer && openAnswer !== answer) {
        openAnswer.classList.remove('visible');
      }

      // Basculez la classe hidden pour afficher ou masquer la réponse
      answer.classList.toggle('hidden');

      // Ajoutez ou supprimez la classe visible pour activer la transition
      answer.classList.toggle('visible', !answer.classList.contains('hidden'));

      // Réinitialisez la classe visible pour la réponse précédente
      if (openAnswer && openAnswer !== answer) {
        openAnswer.classList.remove('visible');
      }

      // Récupérez l'attribut data-image du bouton
      let imageType = button.getAttribute('data-image');

      // Changez la valeur de l'attribut data-image
      if (imageType === 'plus') {
        imageType = 'minus';
      } else {
        imageType = 'plus';
      }

      // Mettez à jour l'attribut data-image du bouton
      button.setAttribute('data-image', imageType);

      // Changez la source de l'image en fonction de la nouvelle valeur de data-image
      if (imageType === 'plus') {
        button.querySelector('img').src = './assets/images/icon-plus.svg';
      } else {
        button.querySelector('img').src = './assets/images/icon-minus.svg';
      }

      // Ajustez la taille de la carte en fonction de l'état de la réponse
      const card = question.closest('.card');
    });
  });
});
