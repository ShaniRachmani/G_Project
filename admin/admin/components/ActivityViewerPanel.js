import { createActivityModal } from "./ActivityModal/activityModal.js";

let calendar;

document.addEventListener("DOMContentLoaded", function () {
	const calendarEl = document.getElementById("activityViewerPanel");
	calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "timeGridWeek",
		editable: false,
		eventClick: function (info) {
			const activityID = info.event._def.publicId;
			createActivityModal(activityID);
		},
	});

	calendar.render();
});

export const changeCalendarDate = (newDate) => {
	calendar.changeView("timeGridWeek", newDate);
};

export const addCalendarEvent = (id, title, start, end) => {
	const newEvent = {
		id,
		title,
		start,
		end,
	};
	calendar.addEvent(newEvent);
};
