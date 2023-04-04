(function () {
  const tab = document.querySelectorAll('.tabs a');
  for (let i = tab.length; i--;) {
    if (tab[i].href === window.location.pathname || tab[i].href === window.location.href) tab[i].className += ' active';
  }
})();



