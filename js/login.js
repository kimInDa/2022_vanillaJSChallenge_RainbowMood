const loginForm = document.querySelector(".login_form");
const usernameInput = document.querySelector(".username_input");

function handleUsernameSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = usernameInput.value;
    localStorage.setItem("username", username);
    const savedUsername = localStorage.getItem("username");
    const greeting = document.querySelector(".greeting"); 
    greeting.innerText = `${savedUsername}님 반갑습니다.`
}

loginForm.addEventListener("submit", handleUsernameSubmit);
