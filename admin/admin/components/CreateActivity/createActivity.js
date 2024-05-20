import areasAPI from "../../api/areasAPI.js";
import professionsApi from "../../api/professionsAPI.js";

const createNewActivity = async () => {
	// const volunteeringContent = document.createElement("div");
	// if (!createEvent) return;
	const selectedProfessionsArr = [];

	const volunteeringContentPanel = document.createElement("div");
	volunteeringContentPanel.classList.add("volunteeringCreationPanel");

	// Header
	const headerContainer = document.createElement("div");
	headerContainer.classList.add("volunteeringHeaderContainer");
	const title = document.createElement("h2");
	title.innerText = "צור התנדבות חדשה";
	headerContainer.appendChild(title);
	volunteeringContentPanel.appendChild(headerContainer);

	// Form
	const formContainer = document.createElement("div");
	formContainer.classList.add("volunteeringFormContainer");

	// Event name
	const nameLbl = document.createElement("label");
	nameLbl.innerText = "שם התנדבות:";
	const nameInput = document.createElement("input");
	formContainer.appendChild(nameLbl);
	formContainer.appendChild(nameInput);

	// Event date
	const dateLbl = document.createElement("label");
	dateLbl.innerText = "תאריך:";
	const dateInput = document.createElement("input");
	dateInput.type = "date";
	formContainer.appendChild(dateLbl);
	formContainer.appendChild(dateInput);

	// Event time
	const startLbl = document.createElement("label");
	startLbl.innerText = "שעת התחלה: ";
	formContainer.appendChild(startLbl);
	const startInput = document.createElement("input");
	startInput.type = "time";
	formContainer.appendChild(startInput);
	const endLbl = document.createElement("label");
	endLbl.innerText = "שעת סיום: ";
	formContainer.appendChild(endLbl);
	const endInput = document.createElement("input");
	endInput.type = "time";
	formContainer.appendChild(endInput);

	// Area
	const areaLbl = document.createElement("label");
	areaLbl.innerText = "איזור:";
	formContainer.appendChild(areaLbl);
	const areaInput = document.createElement("select");
	const allAreas = await areasAPI.getAllAreas();
	allAreas.map((area) => {
		const option = document.createElement("option");
		option.value = area.areaNum;
		option.innerText = area.areaName;
		areaInput.appendChild(option);
	});

	formContainer.appendChild(areaInput);

	// Show selected professions
	const selectedProfessionsContainer = document.createElement("div");
	selectedProfessionsContainer.classList.add("selectedProfessionsContainer");
	// Professions:
	const professionLbl = document.createElement("label");
	professionLbl.innerText = "תפקידים:";
	formContainer.appendChild(professionLbl);
	const professionInput = document.createElement("select");
	const allProfessions = await professionsApi.getAllProfessions();
	professionInput.addEventListener("change", () => {
		selectedProfessionsArr.push({
			professionNum: professionInput.value,
			professionName:
				professionInput.options[professionInput.selectedIndex].text,
		});
		selectedProfessionsContainer.innerHTML = "";
		selectedProfessionsArr.map((profession) => {
			console.log("profession", profession);
			const professionSpan = document.createElement("span");
			professionSpan.innerText = profession.professionName;
			professionSpan.classList.add("professionTag");
			// professionSpan.addEventListener("click", () => {
			// 	selectedProfessionsArr.splice(
			// 		selectedProfessionsArr.indexOf(profession),
			// 		1
			// 	);
			// 	// refreshSelectedProfessions();
			// });
			selectedProfessionsContainer.appendChild(professionSpan);
		});
	});
	allProfessions.map((profession) => {
		const option = document.createElement("option");
		option.value = profession.professionNum;
		option.innerText =
			profession.professionName + " (" + profession.shortDesc + ")";
		professionInput.appendChild(option);
	});
	formContainer.appendChild(professionInput);

	// // Hospital
	// const hospitalLbl = document.createElement("label");
	// hospitalLbl.innerText = "בית חולים:";
	// formContainer.appendChild(hospitalLbl);
	// const hospitalSelect = document.createElement("select");
	// dataStore.getData().hospitals.map((hospital, index) => {
	// 	const option = document.createElement("option");
	// 	option.value = hospital.id;
	// 	option.innerText = hospital.name;
	// 	hospitalSelect.appendChild(option);
	// });
	// formContainer.appendChild(hospitalSelect);

	// Event notes
	const notesLbl = document.createElement("label");
	notesLbl.innerText = "תיאור:";
	formContainer.appendChild(notesLbl);
	const notesInput = document.createElement("textarea");
	formContainer.appendChild(notesInput);

	// Volunteers number
	const volunteersLbl = document.createElement("label");
	volunteersLbl.innerText = "מספר מתנדבים:";
	formContainer.appendChild(volunteersLbl);
	const volunteersNumberInput = document.createElement("input");
	formContainer.appendChild(volunteersNumberInput);

	volunteeringContentPanel.append(formContainer);
	volunteeringContentPanel.append(selectedProfessionsContainer);

	// Submit
	const submitBtn = document.createElement("button");
	submitBtn.innerText = "צור התנדבות:";
	submitBtn.addEventListener("click", () => {});
	volunteeringContentPanel.appendChild(submitBtn);

	return volunteeringContentPanel;
	// volunteeringContentPanel.appendChild

	// volunteeringContent.appendChild(volunteeringContentPanel);
	// volunteeringContent.appendChild(selectedProfessionsContainer);
};

export default createNewActivity;
