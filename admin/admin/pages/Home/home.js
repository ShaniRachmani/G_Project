import volunteersAPI from "../../api/volunteersAPI.js";
import activitiesAPI from "../../api/activitiesAPI.js";
import { addCalendarEvent } from "../../components/ActivityViewerPanel.js";
import createNewActivity from "../../components/CreateActivity/createActivity.js";
let volunteersData = [];
let activitiesData = [];
let hospitalsData = [];
let selectedDate = new Date();

const createNewEventButton = document.getElementById("createNewEventButton");
createNewEventButton.addEventListener("click", () => {
	showNewEventModal();
});

const newEventModal = document.getElementById("createActivityModal");
const showNewEventModal = async () => {
	newEventModal.innerHTML = "";
	newEventModal.style.visibility = "visible";
	const closeBtn = document.createElement("button");
	closeBtn.classList.add("closeBtn");
	closeBtn.innerText = "✖️";
	closeBtn.addEventListener("click", () => {
		newEventModal.style.visibility = "collapse";
	});
	newEventModal.appendChild(closeBtn);
	// const formWrapper = document.createElement("div");
	// formWrapper.classList.add("formWrapper");
	newEventModal.appendChild(await createNewActivity());
	// newEventModal.appendChild(formWrapper);
};

const refreshVolunteersData = async () => {
	volunteersData = await volunteersAPI.getAllVolunteers();
};

const refreshActivitiesData = async () => {
	activitiesData = await activitiesAPI.getAllActivities();
	if (!activitiesData) return;
	activitiesData.map((activity, index) => {
		const isManned = activity.status === true ? "מאויישת" : "לא מאויישת";
		const activityText =
			activity.actName +
			" - " +
			activity.shortDesc +
			", (" +
			activity.amount +
			") " +
			isManned;

		addCalendarEvent(
			activity.actNum,
			activityText,
			activity.startHour,
			activity.endHour
		);
	});
	console.log("activitiesData", activitiesData);
};

export const setSelectedDate = (newSelectedDate) => {
	selectedDate = newSelectedDate;
	// refreshCalendar(selectedDate)
	// refreshEventChart(selectedDate)
};

refreshActivitiesData();
refreshVolunteersData();
