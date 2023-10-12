const form3: HTMLFormElement = document.querySelector(".form3")!;

const forgetPassword: HTMLAnchorElement = document.querySelector(".forget-password")!;
const RegisterPage: HTMLDivElement = document.querySelector(".register-page")!;
const forgetPage: HTMLDivElement = document.querySelector(".forget-page")!;
const success: HTMLDivElement = document.querySelector(".registered")!;

forgetPassword.addEventListener("click", (e) => {
	e.preventDefault();
	RegisterPage.style.display = "none";
	forgetPage.style.display = "block";
});

form3.addEventListener("submit", (e) => {
	e.preventDefault();
	RegisterPage.style.display = "none";
	forgetPage.style.display = "none";
	success.style.display = "block";
	setTimeout(() => {
		RegisterPage.style.display = "flex";
		success.style.display = "none";
	}, 2000);
});
