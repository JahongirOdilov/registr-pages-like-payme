import * as yup from "yup";

const form1: HTMLFormElement = document.querySelector(".form1")!;
const inputLoginEmail: HTMLInputElement = document.querySelector(".log-email")!;
const inputLoginPassword: HTMLInputElement = document.querySelector(".log-password")!;
const invalidLogin: HTMLDivElement = document.querySelector(".invalid-login-password")!;
const loginPage: HTMLDivElement = document.querySelector(".login-page")!;
const registerPage: HTMLDivElement = document.querySelector(".register-page")!;

const schema = yup.object().shape({
	inputLoginEmail: yup.string().email().required("Brand is required"),
	inputLoginPassword: yup
		.string()
		.min(4)
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
		.required("No password provided."),
});
form1.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = {
		inputLoginEmail: inputLoginEmail.value,
		inputLoginPassword: inputLoginPassword.value,
	};
	console.log(formData);
	schema
		.validate(formData)
		.then(() => {
			console.log("correct");
			invalidLogin.innerText = "";
			loginPage.style.display = "none";
			registerPage.style.display = "block";
		})
		.catch((error) => {
			console.log(error);
			if (error.path === "inputLoginPassword" || inputLoginPassword.value === "") {
				invalidLogin.innerText = "Password is incorrect";
			}
		});
});
