document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const button = form.querySelector("button");

      button.textContent = "Thanks for joining!";
      button.disabled = true;
    });
  }
});
