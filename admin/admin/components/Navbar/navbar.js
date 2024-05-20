import { dataStore } from "../../dataStore.js";

const addLogo = (container) => {
	const leftContainer = document.createElement("div");
	leftContainer.style.display = "flex";
	const image = document.createElement("img");
	image.src = "../../assets/logo.jpg";
	image.classList.add("logo");

	const exit = document.createElement("p");
	exit.innerText = "יציאה";
	exit.classList.add("nav-option");

	exit.addEventListener("click", () => {
		dataStore.setData(null);
		window.location.href = "../Login/login.html";
	});

	leftContainer.appendChild(exit);

	leftContainer.appendChild(image);
	container.appendChild(leftContainer);
};

const addNavOptions = (container) => {
	const optionsContainer = document.createElement("div");
	optionsContainer.classList.add("options-container");
	const navOptions = {
		"דף בית": "../Home/home.html",
		"רעיונות חיצוניים": "../ideaSuggestions/index.html",
		התנדבויות: "../volunteerings/volunteerings.html",
		"ניהול מתדברים": "../ManageVolunteers/manageVolunteers.html",
		"ניהול עובדים": "../ManageEmployees/ManageEmployees.html",
		"דשבורד נתונים": "../Dashboard/Dashboard.html",
	};

	addProfileContainer(optionsContainer);

	for (const [key, value] of Object.entries(navOptions)) {
		const navOption = document.createElement("div");
		navOption.classList.add("nav-option");
		const navOptionText = document.createElement("p");
		navOptionText.innerText = key;
		navOption.appendChild(navOptionText);
		navOption.addEventListener("click", () => {
			window.location.href = value;
		});
		optionsContainer.appendChild(navOption);
	}
	container.appendChild(optionsContainer);
};

const addProfileContainer = (container) => {
	const profileContainer = document.createElement("div");
	profileContainer.classList.add("profile-container");
	profileContainer.innerText =
		"👤" + dataStore.getData().fName + " " + dataStore.getData().lName;
	profileContainer.addEventListener("click", () => {
		window.location.href = "../Profile/Profile.html";
	});
	container.appendChild(profileContainer);
};

const createNavbar = () => {
	const navContainer = document.getElementById("navbar");

	addNavOptions(navContainer);
	addLogo(navContainer);
};

createNavbar();
