// Récupère tous les éléments "a" dans la navigation
const navLinks = document.querySelectorAll('nav ul li a');

// Ajoute un gestionnaire d'événement à chaque lien
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Supprime la classe active de tous les liens
    navLinks.forEach(link => link.classList.remove('active'));
    // Ajoute la classe active uniquement au lien cliqué
    this.classList.add('active');
  });
});
