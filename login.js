const valuesLog = {
  email: '',
  password: '',
};
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#reg");
    const logEmail = document.getElementById("floatingInput");
    const logPassword = document.getElementById("floatingPassword");
    logEmail.value = localStorage.getItem('savedEmail');
    logPassword.value = localStorage.getItem('savedPassword');
  form.addEventListener("submit", function (event) {
    event.preventDefault();
      localStorage.setItem('savedEmail', logEmail.value);
      localStorage.setItem('savedPassword', logPassword.value)
      valuesLog.email = logEmail.value;
      valuesLog.password = logPassword.value;
  });
});
