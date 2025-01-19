document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const submenu = dropdown.querySelector('.wide-submenu');
    if (submenu) {
      dropdown.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
      });

      dropdown.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
      });

      submenu.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
      });

      submenu.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
      });
    }
  });
});
