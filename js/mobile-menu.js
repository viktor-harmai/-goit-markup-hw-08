(() => {
  const refs = {
    openMenuBtn: document.querySelector(".open-btn"),
    closeMenuBtn: document.querySelector(".close-mob-btn"),
    menu: document.querySelector(".menu-mob"),    
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");    
  }
})();


