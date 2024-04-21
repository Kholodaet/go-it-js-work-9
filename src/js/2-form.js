const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

// Функція для збереження даних у локальне сховище
function saveFormData() {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Відслідковуємо подію введення даних у поля форми
form.addEventListener('input', function () {
  saveFormData();
});

// Перевіряємо форму при її відправці
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  // Перевіряємо, чи обидва поля форми заповнені
  if (emailValue && messageValue) {
    // Виводимо дані у консоль
    console.log({ email: emailValue, message: messageValue });

    // Очищаємо локальне сховище та поля форми
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
