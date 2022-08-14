const loginForm = document.querySelector(".login_form");
const usernameInput = document.querySelector(".username_input");
const main = document.querySelector(".main_container");

function handleUsernameSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = usernameInput.value;
    localStorage.setItem("username", username);
    const savedUsername = localStorage.getItem("username");
    const greeting = document.querySelector(".greeting"); 
    greeting.innerText = `${savedUsername}님 반갑습니다.`
    main.classList.remove("hidden");
}

loginForm.addEventListener("submit", handleUsernameSubmit);
