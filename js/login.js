const loginForm = document.querySelector(".login_form");
const usernameInput = document.querySelector(".username");

function handleUsernameSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = usernameInput.value;
    localStorage.setItem("username", username);
}

loginForm.addEventListener("submit", handleUsernameSubmit);