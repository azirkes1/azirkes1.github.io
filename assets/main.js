document.addEventListener('DOMContentLoaded', () => {
  // Event listener for opening modals
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.dataset.target;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevents scrolling behind the modal
      }
    });
  });

  // Event listener for closing modals
  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.close;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restores scrolling
      }
    });
  });

  // Close modal when clicking outside of the modal content
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });
});