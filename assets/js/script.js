function toggleVisuallyHidden({ target }) {
  ['start_date', 'end_date'].forEach((inputId) => {
    document.querySelector(`label[for=${inputId}]`).classList.toggle('visually-hidden');
  });
}