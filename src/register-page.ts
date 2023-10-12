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
const invalid1: HTMLDivElement = document.querySelector(".invalid1")!;
const invalid2: HTMLDivElement = document.querySelector(".invalid2")!;
const invalid3: HTMLDivElement = document.querySelector(".invalid3")!;
const invalid4: HTMLDivElement = document.querySelector(".invalid4")!;
const invalid5: HTMLDivElement = document.querySelector(".invalid5")!;
const loginPage: HTMLDivElement = document.querySelector(".login-page")!;
const registerPage: HTMLDivElement = document.querySelector(".register-page")!;
const registered: HTMLDivElement = document.querySelector(".registered")!;
IMask(inputRegisterPhoneNumber, {
	mask: "+{998} 00 000-00-00",
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
	inputRegisterName: yup.string().matches(/^[A-Za-z\.]+$/g),
	inputRegisterUsername: yup.string().matches(/^[a-z0-9_\.]+$/g),
	inputRegisterPhoneNumber: yup.string().matches(/^[+]*[]{0,1}[0-9]{1,4}[]{0,1}[-\s\./0-9]*$/g),
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
			invalid1.innerText = "";
			invalid2.innerText = "";
			invalid3.innerText = "";
			invalid4.innerText = "";
			registered.style.display = "block";
			registerPage.style.display = "none";
		})
		.catch((error) => {
			console.log(error);
			if (error.path === "inputRegisterEmail" || inputRegisterEmail.value === "") {
				invalid1.innerText = "Email is incorrect";
			}
			if (error.path === "inputRegisterPassword" || inputRegisterPassword.value === "") {
				invalid2.innerText = "Password is incorrect";
			}
			if (error.path === "inputRegisterConfirm" || inputRegisterConfirm.value === "") {
				invalid3.innerText = "Confirm Password is incorrect";
			}
			if (error.path === "inputRegisterName" || inputRegisterName.value === "") {
				invalid4.innerText = "Please create correct Username ";
			}
			if (error.path === "inputRegisterUsername" || inputRegisterUsername.value === "") {
				invalid4.innerText = "Please create correct Username ";
			}
		});
});
