const instructions = document.querySelectorAll('.recipe-instructions p');
instructions.forEach((paragraph, index) => {
  const span = document.createElement('span');
  span.classList.add('number');
  span.textContent = `${index + 1}.`;
  paragraph.prepend(span);
});