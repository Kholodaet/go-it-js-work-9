const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

function saveFormData() {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', function () {
  saveFormData();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (emailValue && messageValue) {
    console.log({ email: emailValue, message: messageValue });

    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
