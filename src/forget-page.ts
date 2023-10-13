import * as yup from "yup";

const form3: HTMLFormElement = document.querySelector(".form3")!;
const forgetPasswordLink: HTMLAnchorElement = document.querySelector(".forget-password-link")!;
const RegisterPage: HTMLDivElement = document.querySelector(".register-page")!;
const forgetPage: HTMLDivElement = document.querySelector(".forget-page")!;
const success: HTMLDivElement = document.querySelector(".registered")!;
const forgetEmail: HTMLInputElement = document.querySelector(".forget-password")!;
const forgetPassword: HTMLInputElement = document.querySelector(".forget-password")!;
const forgetConfirm: HTMLInputElement = document.querySelector(".forget-password")!;
const invalid1: HTMLDivElement = document.querySelector(".invalid1")!;
const invalid2: HTMLDivElement = document.querySelector(".invalid2")!;

const schema = yup.object().shape({
	forgetEmail: yup.string().email().required("Brand is required"),
	forgetPassword: yup
		.string()
		.min(4)
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
		.required("No password provided."),
	forgetConfirm: yup
		.string()
		.min(4)
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
		.required("No password provided."),
});
forgetPasswordLink.addEventListener("click", (e) => {
	e.preventDefault();
	RegisterPage.style.display = "none";
	forgetPage.style.display = "block";
});

form3.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = {
		forgetEmail: forgetEmail.value,
		forgetPassword: forgetPassword.value,
		forgetConfirm: forgetConfirm.value,
	};

	console.log(formData);
	schema
		.validate(formData)
		.then(() => {
			console.log("correct");

			RegisterPage.style.display = "none";
			forgetPage.style.display = "none";
			success.style.display = "block";
			setTimeout(() => {
				forgetPage.style.display = "block";
				success.style.display = "none";
			}, 2000);
		})
		.catch((error) => {
			console.log(error);
			if (error.path === "forgetPassword" || forgetPassword.value === "") {
				invalid1.innerText = "Password is incorrect";
			}
			if (error.path === "forgetConfirm" || forgetConfirm.value === "") {
				invalid2.innerText = "Confirm Password is incorrect";
			}
		});
});
