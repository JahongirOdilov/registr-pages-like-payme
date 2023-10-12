import * as yup from "yup";
import IMask from "imask";

const form2: HTMLFormElement = document.querySelector(".form2")!;
const inputRegisterEmail: HTMLInputElement = document.querySelector(".register-email")!;
const inputRegisterPassword: HTMLInputElement = document.querySelector(".register-password")!;
const inputRegisterConfirm: HTMLInputElement = document.querySelector(".register-confirm")!;
const inputRegisterName: HTMLInputElement = document.querySelector(".register-name")!;
const inputRegisterUsername: HTMLInputElement = document.querySelector(".register-username")!;
const inputRegisterPhoneNumber: HTMLInputElement = document.querySelector(".register-phone")!;
const forgetTag: HTMLAnchorElement = document.querySelector(".forget-password")!;
const invalidRegister: HTMLDivElement = document.querySelector(".invalid-login-password")!;
const loginPage: HTMLDivElement = document.querySelector(".login-page")!;
const registerPage: HTMLDivElement = document.querySelector(".register-page")!;

IMask(inputRegisterPhoneNumber, {
	mask: "+{998}(00) 000-00-00",
});

const schema = yup.object().shape({
	inputRegisterEmail: yup.string().email().required("Brand is required"),
	inputRegisterPassword: yup
		.string()
		.min(4)
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
		.required("No password provided."),
	inputRegisterConfirm: yup
		.string()
		.min(4)
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
		.required("No password provided."),
	inputRegisterName: yup.string().matches(/^[A-Za-z0-9_\.]+$/g),
	inputRegisterUsername: yup.string().matches(/^[a-z0-9_\.]+$/g),
	inputRegisterPhoneNumber: yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g),
});
form2.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = {
		inputRegisterEmail: inputRegisterEmail.value,
		inputRegisterPassword: inputRegisterPassword.value,
		inputRegisterConfirm: inputRegisterConfirm.value,
		inputRegisterName: inputRegisterName.value,
		inputRegisterUsername: inputRegisterUsername.value,
		inputRegisterPhoneNumber: inputRegisterPhoneNumber.value,
	};
	console.log(formData);
	schema
		.validate(formData)
		.then(() => {
			console.log("correct");
			// invalidRegister.innerText = "";
			// loginPage.style.display = "none";
			// registerPage.style.display = "block";
		})
		.catch((error) => {
			console.log(error);
			// if (error.path === "inputRegisterPassword" || inputRegisterPassword.value === "") {
			// 	invalidRegister.innerText = "Password is incorrect";
			// }
		});
});
