document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.spoiler-button');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var spoiler = button.parentElement.nextElementSibling;

      while (spoiler && !spoiler.classList.contains('spoiler')) {
        spoiler = spoiler.nextElementSibling;
      }
      
      if (spoiler) {
        if (spoiler.hasAttribute('hidden')) {
          spoiler.removeAttribute('hidden');
        } else {
          spoiler.setAttribute('hidden', true);
        }
      }
    });
  });
});